import { data } from "@/lib/data";
import { Star } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <main className="max-w-xl mx-auto p-4 sm:p-8">
        <div className="space-y-12">
          {data.map((category) => (
            <section key={category.id}>
              <h2 className="text-3xl font-bold text-gray-200 border-b-2 border-gray-700 pb-3 mb-4">
                {category.name}
              </h2>
              {category.subcategories.map((sub) => (
                <div key={sub.id}>
                  {sub.name && <h3 className="text-xl font-semibold text-gray-400 mb-3">{sub.name}</h3>}
                  <ul className="space-y-2.5">
                    {sub.links.map((link) => (
                      <li key={link.name} className="flex items-center group">
                        <div className="w-6 flex-shrink-0">
                          {link.premium ? (
                            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                          ) : (
                             <span className="text-gray-600 font-mono text-lg">•</span>
                          )}
                        </div>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline text-base"
                        >
                          {link.icon && <span className="mr-2 inline-block">{link.icon}</span>}
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
