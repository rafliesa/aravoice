import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminDashboard from "@/modules/admin";
import {
  ADMIN_SESSION_COOKIE,
  isValidAdminSession,
} from "@/lib/server/admin-auth";

export const metadata: Metadata = {
  title: "Admin",
};

export default async function AdminPage() {
  const session = (await cookies()).get(ADMIN_SESSION_COOKIE)?.value;

  if (!isValidAdminSession(session)) {
    redirect("/admin/login");
  }

  return <AdminDashboard />;
}
