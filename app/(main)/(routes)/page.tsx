import { ModeToggle } from "@/components/modeToggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="h-screen">
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </div>
  );
}
