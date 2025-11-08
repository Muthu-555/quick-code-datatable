import { useMemo, useState } from "react";

export function useDataFilter<T>(data: T[]) {
  const [query, setQuery] = useState("");

  const filteredData = useMemo(() => {
    const q = query.toLowerCase();
    return data.filter((row) =>
      JSON.stringify(row).toLowerCase().includes(q)
    );
  }, [data, query]);

  return { query, setQuery, filteredData };
}
