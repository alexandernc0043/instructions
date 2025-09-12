import React from "react";
import { Navigation, routeType } from "@/components/navigation/Navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Module 3",
  description: "Welcome to Module 3",
};

export default function Index() {
  const routes = [
    { text: "FCC 3 >> CSS", path: "/module-3/fcc3-css" },
  ] as routeType[];
  return (
    <>
      <Navigation routes={routes} title={metadata.title!.toString()} />
    </>
  );
}

