import React from "react";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import SignOutButton from "@/components/SignOutButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function ProtectedRoute() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Protected Route</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Welcome, {session.user?.email}</p>
          <SignOutButton />
        </CardContent>
      </Card>
    </div>
  );
}
