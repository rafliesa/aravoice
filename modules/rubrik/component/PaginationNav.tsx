import { DesignButton } from "@/components/design-system/Primitives";
import { type Pagination } from "@/lib/news";

type PaginationNavProps = {
  pagination: Pagination;
  loading: boolean;
  onPageChange: (page: number) => void;
};

export default function PaginationNav({
  pagination,
  loading,
  onPageChange,
}: PaginationNavProps) {
  return (
    <nav
      aria-label="Pagination artikel rubrik"
      className="mt-12 flex flex-wrap items-center justify-center gap-3"
    >
      <DesignButton
        variant="secondary"
        onClick={() => onPageChange(pagination.page - 1)}
        disabled={pagination.page <= 1 || loading}
        className="disabled:cursor-not-allowed disabled:opacity-40"
      >
        Sebelumnya
      </DesignButton>

      {Array.from({ length: pagination.total_pages }, (_, index) => index + 1).map(
        (pageNumber) => (
          <DesignButton
            key={pageNumber}
            variant={pageNumber === pagination.page ? "next" : "secondary"}
            aria-current={
              pageNumber === pagination.page ? "page" : undefined
            }
            onClick={() => onPageChange(pageNumber)}
            disabled={loading}
            className="h-10 min-w-10 px-3 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {pageNumber}
          </DesignButton>
        ),
      )}

      <DesignButton
        variant="secondary"
        onClick={() => onPageChange(pagination.page + 1)}
        disabled={pagination.page >= pagination.total_pages || loading}
        className="disabled:cursor-not-allowed disabled:opacity-40"
      >
        Berikutnya
      </DesignButton>
    </nav>
  );
}