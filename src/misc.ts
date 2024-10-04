import type { PaginateItemsArgs, PaginateItemsReturn } from "./types/misc";

export function paginateItems({
  data,
  page,
  limit,
}: PaginateItemsArgs): PaginateItemsReturn {
  const start = (page - 1) * limit;
  const end = start + limit;
  const items = data.slice(start, end);
  const pagination = {
    pages: Math.ceil(data.length / limit),
    page,
  };

  return {
    items,
    pagination,
  };
}

export function truncate(text: string, length: number) {
  if (text.length > length) {
    return text.substring(0, length) + "...";
  }
  return text;
}
