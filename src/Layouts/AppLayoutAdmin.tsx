import NextAuthSessionProvider from "@/providers/sessionProvider";
import React from "react";

interface AppLayoutAdminProps {
  children: React.ReactNode;
}

export default function AppLayoutAdmin({ children }: AppLayoutAdminProps) {
  return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>;
}
