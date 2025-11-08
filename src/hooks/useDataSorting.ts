import { useState } from "react";
import type { SortOrder } from "../components/QcDataTable/QcDataTypes";

export function useDataSorting<T>(initialData: T[]) {
  const [sortKey, setSortKey] = useState<keyof T | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>(null);

  const sortedData = [...initialData].sort((a, b) => {
    if (!sortKey || !sortOrder) return 0;

    const valA = a[sortKey];
    const valB = b[sortKey];

    if (valA < valB) return sortOrder === "asc" ? -1 : 1;
    if (valA > valB) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  const toggleSort = (key: keyof T) => {
    if (key === sortKey) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  return { sortedData, sortKey, sortOrder, toggleSort };
}
