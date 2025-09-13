"use client";

import React from "react";
import {usePathname, useRouter} from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

type ModuleLink = { id: number; label: string; href: string };

const MODULES: ModuleLink[] = [
  { id: 1, label: "Module 1", href: "/module-1" },
  { id: 2, label: "Module 2", href: "/module-2" },
  { id: 3, label: "Module 3", href: "/module-3" },
  { id: 4, label: "Module 4", href: "/module-4" },
];

export default function ModuleSwitcher({ variant = "button" }: { variant?: "button" | "link" }) {
  const pathname = usePathname();
  const router = useRouter();

  const currentId = React.useMemo(() => {
    const match = pathname?.match(/^\/(?:module|assignment)s?-?(\d+)/) || pathname?.match(/^\/module-(\d+)/);
    const id = match && Number(match[1]);
    return MODULES.some(m => m.id === id) ? id : undefined;
  }, [pathname]);

  const current = MODULES.find(m => m.id === currentId) ?? MODULES[0];

  const triggerClass =
    variant === "link"
      ? "inline-flex items-center gap-1 bg-transparent p-0 border-0 text-blue-600 hover:text-blue-900 hover:underline focus:outline-none"
      : "inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-sm font-medium shadow-sm hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button aria-label="Select module" className={triggerClass}>
          <span>{current.label}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-3.5 opacity-70 translate-y-[1px]"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-44 bg-white">
        <DropdownMenuLabel>Switch Module</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={current.id.toString()}
          onValueChange={(val) => {
            const id = Number(val);
            const next = MODULES.find((m) => m.id === id);
            if (next) router.push(next.href);
          }}
        >
          {MODULES.map((m) => (
            <DropdownMenuRadioItem key={m.id} value={m.id.toString()}>
              {m.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
