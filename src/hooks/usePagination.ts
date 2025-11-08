import { useState, useMemo } from "react";

export function usePagination<T>(data: T[], itemsPerPage = 5) {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const currentData = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  }, [data, page, itemsPerPage]);

  const next = () => setPage((p) => Math.min(p + 1, totalPages));
  const prev = () => setPage((p) => Math.max(p - 1, 1));
  const goTo = (p: number) => setPage(Math.max(1, Math.min(p, totalPages)));

  return { page, totalPages, currentData, next, prev, goTo };
}
