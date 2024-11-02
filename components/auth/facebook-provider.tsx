import { FaFacebookF } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export const FacebookProvider = () => {
  return (
    <Button variant="outline" className="w-full">
      <FaFacebookF className="h-5 w-5 mr-2" />
      Facebook
    </Button>
  );
};
