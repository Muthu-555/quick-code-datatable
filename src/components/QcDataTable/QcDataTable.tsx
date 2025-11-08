import React, { useState } from "react";
import type { QcDataTableProps } from "./QcDataTypes";
import styles from "./QcDataTable.module.css";
import { useDataSorting } from "../../hooks/useDataSorting";
import { useDataFilter } from "../../hooks/useDataFilter";

const highlight = (text: string, query: string) => {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, "gi");
  return text.replace(regex, "<mark>$1</mark>");
}

const QcDataTable = <T extends object>({
  rowdata,
  columns,
  onRowSelect,
}: QcDataTableProps<T>) => {

 const [selected, setSelected] = useState<T | null>(null);

   const handleRowClick = (row: T) => {
    const newSelection = selected === row ? null : row;
    setSelected(newSelection);
    onRowSelect?.(newSelection);
  };

   const { query, setQuery, filteredData } = useDataFilter(rowdata);
   const { sortedData, sortKey, sortOrder, toggleSort } = useDataSorting(filteredData);

    return(
      <div className={styles.qcTableComponent}>
        <div className={styles.qcTableSearchBox}>
          <input type="text" placeholder="Search here..."  value={query}
          onChange={(e) => setQuery(e.target.value)} />
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
              <thead>
                <tr className={styles.theadRow}>
            {columns.map((col) => (
              <th key={String(col.key)} 
              onClick={() => toggleSort(col.key)}
              className={styles.th}>
                {col.label}
                  {sortKey === col.key && (
                <span style={{ marginLeft: 6 }}>
                  {sortOrder === "asc" ? "⯅" : "⯆"}
                </span>
              )}
              </th>
            ))}
                </tr>
              </thead>

              <tbody className={styles.tbody}>
                {sortedData.length === 0 ? (
                    <tr>
                      <td colSpan={columns.length}  className={styles.emptyRow}>
                        No results found
                      </td>
                    </tr>
                  ) :(
                  sortedData.map((row, rowIndex) => (
                    <tr key={rowIndex} className={`${styles.tr} ${
                  selected === row ? styles.selected : ""
                } ${rowIndex % 2 === 0 ? styles.evenRow : ""}`}
                onClick={() => handleRowClick(row)}>
               {columns.map((col,colIndex) => {
                  const raw = String(row[col.key]);
                  return (
                    <td
                      key={String(col.key)}
                      className={`${styles.td} ${colIndex !== 0 ? styles.colBorder : ""}` }
                      dangerouslySetInnerHTML={{
                        __html: highlight(raw, query),
                      }}
                    />
                  );
                })}
                    </tr>
                   ))
                  )}
              </tbody>
          </table>
        </div>

      </div>
    )
}

export default QcDataTable;
