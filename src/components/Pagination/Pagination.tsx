import { useContext, useState, type ChangeEvent } from "react";
import { Icon } from "../Icon/Icon";
import type { PaginationProps } from "./types";
import { AppContext } from "../App/App";
import type { AppContextType } from "../../types/appTypes";

export function Pagination({ pagination }: PaginationProps) {
  const context = useContext(AppContext) as AppContextType | undefined;
  if (!context) {
    alert(
      "problem with React and Astro.js incompatibility, so a server restart is needed",
    );
    return <></>;
  }

  const { setPage, setLoading } = context;
  const { pages, page } = pagination;
  const [value, setValue] = useState(page);

  return (
    <div className="pagination flex justify-center text-xs">
      <button
        onClick={() => {
          if (page > 1) {
            setLoading(true);
            setPage(page - 1);
          }
        }}
        type="button"
        className="pg-btn bg-red-600 w-10 rounded-l"
      >
        <Icon icon="fa-solid fa-arrow-left" />
      </button>
      <span className="pg-inp-con">
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const val = e.target.valueAsNumber;
            if (val >= 1 && val <= pages) {
              setValue(val);
            }
          }}
          className="bg-gray-900 w-10 py-2 text-center"
          type="number"
          value={page}
        />
        <button
          onClick={() => {
            if (value >= 1 && value <= pages) {
              setLoading(true);
              setPage(value);
            }
          }}
          type="button"
          className="pg-btn bg-gray-800 w-10 h-full"
        >
          GO
        </button>
      </span>
      <button
        onClick={() => {
          if (page < pages) {
            setLoading(true);
            setPage(page + 1);
          }
        }}
        type="button"
        className="pg-btn bg-red-600 w-10 rounded-r"
      >
        <Icon icon="fa-solid fa-arrow-right" />
      </button>
    </div>
  );
}
