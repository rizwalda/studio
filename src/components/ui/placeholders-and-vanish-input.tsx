"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const PlaceholdersAndVanishInput = ({
  placeholders,
  onChange,
  onSubmit,
  value: controlledValue,
}: {
  placeholders: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  value?: string;
}) => {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);

  useEffect(() => {
    let interval: any;
    const startAnimation = () => {
      interval = setInterval(() => {
        setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
      }, 2000);
    };
    startAnimation();
    return () => clearInterval(interval);
  }, [placeholders.length]);

  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(controlledValue || "");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange(e);
  };
  
  useEffect(() => {
    setValue(controlledValue || "");
  }, [controlledValue]);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <form
      className={cn(
        "w-full relative max-w-xl mx-auto bg-card border border-border h-12 rounded-full overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200",
        value && "bg-background"
      )}
      onSubmit={handleOnSubmit}
    >
      <div className="h-full z-50">
        <AnimatePresence mode="wait">
          {!value && (
            <motion.p
              initial={{
                y: 5,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -5,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
              className="dark:text-zinc-500 text-zinc-500 text-sm pl-4 sm:pl-12 text-left w-[calc(100%-2rem)] h-full flex items-center"
            >
              {placeholders[currentPlaceholder]}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <input
        onChange={handleOnChange}
        value={value}
        ref={inputRef}
        type="text"
        className="w-full relative text-sm sm:text-base z-50 border-none dark:text-white bg-transparent text-black h-full rounded-full focus:outline-none focus:ring-0 pl-4 sm:pl-12 pr-4"
      />
    </form>
  );
};
