import { DesignButton } from "@/components/design-system/Primitives";

type ErrorStateProps = {
  message: string;
  onRetry: () => void;
};

export default function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <div
      role="alert"
      className="mt-10 rounded-lg border border-red-200 bg-red-50 px-6 py-10 text-center"
    >
      <h2 className="font-caslon text-2xl font-bold text-red-900">
        Berita belum dapat dimuat
      </h2>
      <p className="mt-3 text-sm text-red-700">{message}</p>
      <DesignButton
        variant="next"
        onClick={onRetry}
        className="mt-6"
      >
        Coba lagi
      </DesignButton>
    </div>
  );
}