export type PaginateItemsArgs = {
  data: any[];
  limit: number;
  page: number;
};

export type PPagination = {
  pages: number;
  page: number;
};

export type PaginateItemsReturn = {
  items: any[];
  pagination: PPagination;
};
