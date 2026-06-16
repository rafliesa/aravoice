import MerchImpact from "@/modules/merch/sections/MerchImpact";
import MerchProducts from "@/modules/merch/sections/MerchProducts";
import MerchReasons from "@/modules/merch/sections/MerchReasons";

export default function MerchPage() {
  return (
    <main className="flex-1 bg-[#f7f7f7] text-[#070a1d]">
      <MerchImpact />
      <MerchProducts />
      <MerchReasons />
    </main>
  );
}
