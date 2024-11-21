"use client";

import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLogout } from "@/hooks/auth/use-logout";

export const UserButton = () => {
  const { mutate } = useLogout();

  const logout = () => {
    mutate();
  };

  return (
    <Button variant="destructive" onClick={logout}>
      <LogOut className="h-5 w-5" />
      <span>Logout</span>
    </Button>
  );
};
