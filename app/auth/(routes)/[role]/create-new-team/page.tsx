import { redirect } from "next/navigation";

import { Role } from "@/config";
import { CreateNewTeamForm } from "@/components/auth/create-new-team-form";

export default async function CreateNewTeamPage({
  params,
}: {
  params: { role: Role };
}) {
  const { role } = await params;
  if (role !== Role.BUSINESS) redirect("/auth/login");
  return <CreateNewTeamForm role={role} />;
}
