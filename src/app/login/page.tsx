import SignInButton from "@/components/SignInButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <SignInButton />
        </CardContent>
      </Card>
    </div>
  );
}
