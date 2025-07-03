// src/ai/flows/search-enhancement.ts
'use server';

/**
 * @fileOverview Implements real-time search enhancement using GenAI to understand the context of the query
 * and provide more accurate results. It leverages a tool to find relevant entries from a JavaScript data source.
 *
 * - searchEnhancement - A function that enhances the search query using AI.
 * - SearchEnhancementInput - The input type for the searchEnhancement function.
 * - SearchEnhancementOutput - The return type for the searchEnhancement function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SearchEnhancementInputSchema = z.object({
  query: z.string().describe('The user search query.'),
  dataSource: z.string().describe('The JavaScript data source containing link categories, subcategories, names, descriptions, and URLs.'),
});
export type SearchEnhancementInput = z.infer<typeof SearchEnhancementInputSchema>;

const SearchEnhancementOutputSchema = z.object({
  enhancedQuery: z.string().describe('The enhanced search query with context.'),
  relevantEntries: z.string().describe('The relevant entries from the data source based on the enhanced query.'),
});
export type SearchEnhancementOutput = z.infer<typeof SearchEnhancementOutputSchema>;

export async function searchEnhancement(input: SearchEnhancementInput): Promise<SearchEnhancementOutput> {
  return searchEnhancementFlow(input);
}

const findRelevantEntries = ai.defineTool(
  {
    name: 'findRelevantEntries',
    description: 'Finds relevant entries from a JavaScript data source based on a search query.',
    inputSchema: z.object({
      query: z.string().describe('The search query.'),
      dataSource: z.string().describe('The JavaScript data source to search within.'),
    }),
    outputSchema: z.string().describe('The relevant entries from the data source.'),
  },
  async (input) => {
    try {
      // Dynamically import the data source
      const data = eval(input.dataSource) as any[];

      if (!Array.isArray(data)) {
        throw new Error('Data source must be a JavaScript array.');
      }

      const results = data.filter(item => {
        // Combine all relevant fields into a single string for searching
        const searchableText = Object.values(item).join(' ').toLowerCase();
        return searchableText.includes(input.query.toLowerCase());
      });

      return JSON.stringify(results);
    } catch (error: any) {
      console.error('Error finding relevant entries:', error);
      return JSON.stringify([]);
    }
  }
);

const prompt = ai.definePrompt({
  name: 'searchEnhancementPrompt',
  input: {schema: SearchEnhancementInputSchema},
  output: {schema: SearchEnhancementOutputSchema},
  tools: [findRelevantEntries],
  prompt: `You are an AI assistant designed to enhance search queries for a link repository.

  The user will provide a search query and a JavaScript data source.
  Your goal is to understand the context of the query and find the most relevant entries from the data source.

  First, enhance the search query to make it more contextually relevant.  Consider typos and vague keywords.
  Then, use the 'findRelevantEntries' tool to find the relevant entries from the data source based on the enhanced query.

  User Query: {{{query}}}
  Data Source: {{{dataSource}}}

  Return the enhanced query and the relevant entries.
  `,config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const searchEnhancementFlow = ai.defineFlow(
  {
    name: 'searchEnhancementFlow',
    inputSchema: SearchEnhancementInputSchema,
    outputSchema: SearchEnhancementOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
