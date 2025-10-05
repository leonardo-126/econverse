import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
const router = useRouter();
async function logout() {
  await signOut({
    redirect: false,
  });
  router.replace("/auth");
}
