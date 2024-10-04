import type { LoaderProps } from "./types";

export function Loader({ loading }: LoaderProps) {
  if (!loading) {
    return <></>;
  }
  return (
    <div className="loader w-full h-full bg-gray-800 fixed top-0 left-0 flex justify-center items-center">
      loading....
    </div>
  );
}
