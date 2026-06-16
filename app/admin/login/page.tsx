import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminLoginPage from "@/modules/admin-login";
import {
  ADMIN_SESSION_COOKIE,
  isValidAdminSession,
} from "@/lib/server/admin-auth";

type LoginPageProps = {
  searchParams: Promise<{ error?: string }>;
};

export default async function Page({ searchParams }: LoginPageProps) {
  const session = (await cookies()).get(ADMIN_SESSION_COOKIE)?.value;
  if (isValidAdminSession(session)) {
    redirect("/admin");
  }

  const showError = (await searchParams).error === "invalid";

  return <AdminLoginPage showError={showError} />;
}
