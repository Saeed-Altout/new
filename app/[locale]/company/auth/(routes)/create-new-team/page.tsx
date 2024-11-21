import { Role } from "@/config/enums";
import { CreateNewTeamForm } from "@/components/auth/create-new-team-form";

export default async function CreateNewTeamPage() {
  return <CreateNewTeamForm role={Role.COMPANY} />;
}
