import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";

export const GoogleProvider = () => {
  return (
    <Button variant="outline" className="w-full">
      <FcGoogle className="h-5 w-5 mr-2" />
      Google
    </Button>
  );
};
