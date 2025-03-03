import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Auth example with nextjs and nextAuth</h1>
      <Button>
        <Link href="/protected">Go to protected route</Link>
      </Button>
    </div>
  );
}
