import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "archive",
  description: "hello",
};

interface ArchiveLayoutProps {
  children: React.ReactNode;
}

export default function ArchiveLayout({ children }: ArchiveLayoutProps) {
  return <div>{children}</div>;
}
