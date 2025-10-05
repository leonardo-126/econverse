import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";

interface PrivateLayoutProps {
  children: React.ReactNode;
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  const session = await getServerSession(nextAuthOptions);

  if (session) {
    redirect("/admin");
  }
  return <>{children}</>;
}
