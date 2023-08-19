import { useQuery } from "react-query";
import { FetchDataFunction } from "../types";

export default function useQueryFetch(
  queryKeyTitle: string,
  fetchData: FetchDataFunction
) {
  const queryKey = [queryKeyTitle];

  const { data, isError, isLoading } = useQuery(queryKey, fetchData);
  const loadingMessage = isLoading ? "Loading" : "";
  const errorMessage = isError ? `Error: ${isError}` : "";

  return { data, loadingMessage, errorMessage };
}
