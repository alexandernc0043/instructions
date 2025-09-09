import React from "react";
import { Navigation, routeType } from "@/components/navigation/Navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Module 2",
  description: "Welcome to Module 2",
};

export default function Index() {
  const routes = [
    { text: "Home Page Submission", path: "/module-2/home-page-submission" },
    { text: "Accumulus Validator Setup", path: "/module-2/accumulus-validator-setup" },
    { text: "First Course Site Submission", path: "/module-2/first-course-site-submission" },
    { text: "FCC 2 >> CSS", path: "/module-2/fcc2-css" },
  ] as routeType[];
  return (
    <>
      <Navigation routes={routes} title={metadata.title!.toString()} />
    </>
  );
}

