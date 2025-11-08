export type Column<T> = {
  key: keyof T;   
  label: string;
  width?: number;
};

export type SortOrder = "asc" | "desc" | null;

export interface QcDataTableProps<T> {
  rowdata: T[];
  columns: Column<T>[];
  onRowSelect?: (row: T | null) => void;
}
