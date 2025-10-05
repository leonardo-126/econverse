import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import AppLayoutAdmin from "@/Layouts/AppLayoutAdmin";
import { getServerSession } from "next-auth";

export default async function Admin() {
  const session = await getServerSession(nextAuthOptions);

  return (
    <AppLayoutAdmin>
      <span>{session?.user.name ?? "Usuário"}</span>
      <p>Dashboard do administrador</p>
    </AppLayoutAdmin>
  );
}
