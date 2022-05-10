export type TableConfig = {
  order_by?: string;
  isAsc?: boolean;
  page?: number;
};

export type ConfigurableTableType = {
  tableConfig?: TableConfig;
};
