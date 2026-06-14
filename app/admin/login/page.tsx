import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  ADMIN_SESSION_COOKIE,
  isValidAdminSession,
} from "@/lib/server/admin-auth";

type LoginPageProps = {
  searchParams: Promise<{ error?: string }>;
};

export default async function AdminLoginPage({
  searchParams,
}: LoginPageProps) {
  const session = (await cookies()).get(ADMIN_SESSION_COOKIE)?.value;
  if (isValidAdminSession(session)) {
    redirect("/admin");
  }

  const showError = (await searchParams).error === "invalid";

  return (
    <main className="flex flex-1 items-center justify-center bg-[#faf8f3] px-6 py-16 text-[#1a1a1a]">
      <section className="w-full max-w-md rounded-xl border border-zinc-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-bold tracking-wider text-[#F29100]">
          ADMIN
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight">
          Masuk ke panel
        </h1>
        <p className="mt-3 text-sm leading-6 text-zinc-500">
          Masukkan password admin untuk mengelola berita.
        </p>

        <form action="/api/admin/login" method="post" className="mt-8">
          <label
            htmlFor="password"
            className="text-sm font-semibold text-zinc-700"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            autoFocus
            className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-3 text-sm outline-none focus:border-[#F29100]"
          />
          {showError && (
            <p role="alert" className="mt-3 text-sm font-medium text-red-600">
              Password tidak valid.
            </p>
          )}
          <button
            type="submit"
            className="mt-6 w-full rounded-md bg-[#1a1a1a] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-black"
          >
            Masuk
          </button>
        </form>
      </section>
    </main>
  );
}
