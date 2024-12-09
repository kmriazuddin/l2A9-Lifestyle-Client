import { useState } from "react";
import useDebounce from "../useDebounce";

export const useFilterSortSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortCriteria, setSortCriteria] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  return {
    searchTerm,
    setSearchTerm,
    sortCriteria,
    setSortCriteria,
    categoryId,
    setCategoryId,
    debouncedSearchTerm,
  };
};
