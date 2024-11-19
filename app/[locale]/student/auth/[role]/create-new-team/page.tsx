import { Role } from "@/config/enums";
import { redirect } from "@/i18n/routing";
import { CreateNewTeamForm } from "@/components/auth/create-new-team-form";

export default async function CreateNewTeamPage({
  params,
}: {
  params: Promise<{ role: Role }>;
}) {
  const { role } = await params;

  if (!Object.values(Role).includes(role as Role)) {
    redirect({
      href: `/auth/${Role.STUDENT}/login`,
      locale: "en",
    });
  }
  return <CreateNewTeamForm role={role} />;
}
