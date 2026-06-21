export type MerchProduct = {
  id: number;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  sort_order: number;
  is_active: boolean;
};

export type CreateMerchProductPayload = Omit<MerchProduct, "id">;

export async function fetchMerchProducts(signal?: AbortSignal) {
  const response = await fetch("/api/merch", {
    cache: "no-store",
    signal,
  });
  if (!response.ok) {
    throw new Error(await getMerchResponseError(response));
  }

  return (await response.json()) as MerchProduct[];
}

export async function fetchAllMerchProducts(signal?: AbortSignal) {
  const response = await fetch("/api/merch?all=1", {
    cache: "no-store",
    signal,
  });
  if (!response.ok) {
    throw new Error(await getMerchResponseError(response));
  }

  return (await response.json()) as MerchProduct[];
}

export async function getMerchResponseError(response: Response) {
  try {
    const data = (await response.json()) as { error?: string };
    return data.error || `Request gagal (${response.status})`;
  } catch {
    return `Request gagal (${response.status})`;
  }
}
