export type EditorialMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  sort_order: number;
};

export type CreateEditorialMemberPayload = Omit<EditorialMember, "id">;

export async function fetchEditorialMembers(signal?: AbortSignal) {
  const response = await fetch("/api/about/team", {
    cache: "no-store",
    signal,
  });
  if (!response.ok) {
    throw new Error(await getEditorialMemberResponseError(response));
  }

  return (await response.json()) as EditorialMember[];
}

export async function getEditorialMemberResponseError(response: Response) {
  try {
    const data = (await response.json()) as { error?: string };
    return data.error || `Request gagal (${response.status})`;
  } catch {
    return `Request gagal (${response.status})`;
  }
}
