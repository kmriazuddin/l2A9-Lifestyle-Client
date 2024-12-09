"use client";

import React, { useContext, useEffect, useState } from "react";
import AllProduct from "../../../components/ui_component/common/AllProduct/AllProduct";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useFilterSortSearch } from "@/src/lib/utils/hook/useFilterSortSearch";
import { AuthContext } from "@/src/providers/AuthProvider";
import { useAllCategory } from "@/src/hooks/category.hook";
import { useAllProduct } from "@/src/hooks/product.hook";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { setCategoryId as setCId } from "@/src/redux/features/cartSlice/cartSlice";
import SearchSortFilter from "@/src/components/ui_component/common/searchSortFilter/SearchSortFilter";
import { DynamicPagination } from "@/src/components/ui_component/common/Pagination/DynamicPagination";

const Products = () => {
  const {
    searchTerm,
    setSearchTerm,
    sortCriteria,
    setSortCriteria,
    categoryId,
    setCategoryId,
    debouncedSearchTerm,
  } = useFilterSortSearch();
  const userData = useContext(AuthContext);
  const { data: { data: category } = {} } = useAllCategory();
  const [page, setPage] = useState(1);
  const { data } = useAllProduct(
    debouncedSearchTerm,
    categoryId,
    sortCriteria,
    page
  );
  const dispatch = useAppDispatch();
  const { categoryId: id } = useAppSelector((state) => state.cartSlice);
  const initialCategoryId = id;

  useEffect(() => {
    if (id) {
      dispatch(setCId(""));
    }
    if (initialCategoryId) {
      setCategoryId(initialCategoryId);
    }
  }, [initialCategoryId, setCategoryId, dispatch, id]);

  return (
    <div>
      <div className="sm:mt-0 px-2">
        <SearchSortFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          sortCriteria={sortCriteria}
          onSortChange={setSortCriteria}
          categoryId={categoryId}
          onCategoryChange={setCategoryId}
          categoryOptions={category || []}
        />
        {userData?.user?.role === "CUSTOMER" && (
          <div className="flex mb-5 justify-end me-4">
            <Link
              href={"/recent-products"}
              className="text-sm flex items-center gap-1 hover:underline underline-offset-2"
            >
              <span> Recently Viewed</span> <ArrowRight size={15} />
            </Link>
          </div>
        )}
      </div>

      <div className="min-h-[79vh]">
        {data?.data && <AllProduct data={data.data} />}
      </div>

      {data?.meta && (
        <DynamicPagination
          onPageChange={setPage}
          meta={data?.meta}
        ></DynamicPagination>
      )}
    </div>
  );
};

export default Products;
