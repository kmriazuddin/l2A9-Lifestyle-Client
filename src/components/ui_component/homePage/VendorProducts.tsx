/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect } from "react";
import AllProduct from "../../../components/ui_component/common/AllProduct/AllProduct";
import { useAllProduct } from "@/hooks/product.hook";
import { useAllCategory } from "@/hooks/category.hook";
import { useFilterSortSearch } from "@/lib/utils/hook/useFilterSortSearch";
import SearchSortFilter from "@/components/ui_component/common/searchSortFilter/SearchSortFilter";
import { IProduct } from "@/interface/product.interface";

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

  const [page, setPage] = useState(1);
  const [allProducts, setAllProducts] = useState<IProduct[]>([]); // State to accumulate all loaded products
  const [hasMore, setHasMore] = useState(true); // Track if there are more products to load

  const { data: { data: category } = {} } = useAllCategory();
  const { data, isLoading } = useAllProduct(
    debouncedSearchTerm,
    categoryId,
    sortCriteria,
    page
  );

  useEffect(() => {
    if (data && data.data) {
      setAllProducts((prevProducts) => {
        const newProducts = data.data.filter(
          (newProduct) =>
            !prevProducts.some(
              (prevProduct) => prevProduct.productId === newProduct.productId
            )
        );
        return [...prevProducts, ...newProducts];
      });
      if ((data?.meta?.page as number) >= (data?.meta?.totalPage as number)) {
        setHasMore(false);
      }
    }
  }, [data]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading ||
      !hasMore
    ) {
      return;
    }
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, hasMore]);

  return (
    <div>
      <p className="text-2xl font-medium ms-2">Products For You</p>
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
      </div>

      <div className="mt-4">
        <AllProduct data={allProducts} />
        {isLoading && (
          <div className="loader">
            <div className="flex justify-center items-center m-auto">
              <span className="loading loading-spinner loading-lg text-info"></span>
            </div>
          </div>
        )}
        {!hasMore && <div className="flex justify-center">No More Products</div>}
      </div>
    </div>
  );
};

export default Products;
