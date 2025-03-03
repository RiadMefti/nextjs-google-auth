import React from "react";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import SignOutButton from "@/components/SignOutButton";

export default async function ProtectedRoute() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <p>Welcome, {session.user?.email}</p>
      <SignOutButton />
    </div>
  );
}
