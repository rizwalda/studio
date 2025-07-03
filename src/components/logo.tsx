import { Ghost } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-2 font-bold text-lg text-primary">
      <Ghost className="h-6 w-6" />
      <span>GoonMovement</span>
    </div>
  );
}
