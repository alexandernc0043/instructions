"use client";
import React, { useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function titleCase(segment: string): string {
  const decoded = decodeURIComponent(segment);
  // Keep short alphanumeric codes (e.g., m0a) as-is, otherwise title case
  if (/^[a-z]\d+[a-z]?$/i.test(decoded)) return decoded;
  return decoded
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function AutoBreadcrumbs() {
  const pathname = usePathname() || "/";

  const parts = useMemo(() => {
    if (pathname === "/") return [] as string[];
    return pathname
      .split("?")[0]
      .split("#")[0]
      .split("/")
      .filter(Boolean);
  }, [pathname]);

  const items = useMemo(() => {
    const acc: { href: string; label: string }[] = [];
    let href = "";
    for (const seg of parts) {
      href += `/${seg}`;
      acc.push({ href, label: titleCase(seg) });
    }
    return acc;
  }, [parts]);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {items.length > 0 && <BreadcrumbSeparator />}
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <React.Fragment key={item.href}>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={item.href}>{item.label}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

