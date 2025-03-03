import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold text-center tracking-tight md:text-4xl">
        Auth example with nextjs and nextAuth
      </h1>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Next.js Authentication</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Button>
            <Link href="/protected">Go to protected route</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
