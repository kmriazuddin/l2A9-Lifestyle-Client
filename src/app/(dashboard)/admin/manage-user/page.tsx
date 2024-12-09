"use client";

import React, { useState } from "react";
import FilterSortSelect from "@/src/components/ui_component/common/searchSortFilter/FilterSortSelect";
import { useGetAllUser } from "@/src/hooks/user.hook";
import UserTable from "./userTable";
import useDebounce from "@/src/lib/utils/useDebounce";
import { DynamicPagination } from "@/src/components/ui_component/common/Pagination/DynamicPagination";
import SearchInput from "@/src/components/ui_component/common/searchSortFilter/searchInput";

const ManageUser = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [isBlocked, setIsblock] = useState("");

  const searchTermText = useDebounce(searchTerm, 500);

  const { data } = useGetAllUser(searchTermText, isBlocked, currentPage);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <div className="flex flex-wrap justify-between">
        <SearchInput
          placeholder="Search by Email"
          value={searchTerm}
          onChange={setSearchTerm}
        ></SearchInput>
        <div className="flex items-center gap-2">
          <p>Filter By Status</p>
          <FilterSortSelect
            onChange={setIsblock}
            value={isBlocked}
            options={[
              { label: "Blocked User", value: "true" },
              { label: "Active User", value: "false" },
            ]}
          ></FilterSortSelect>
        </div>
      </div>
      <div className=" min-h-[78vh] lg:min-h-[80vh] mt-3">
        {data?.data && <UserTable users={data?.data}></UserTable>}
      </div>
      <div className="flex justify-center mt-5">
        {data?.meta && data && (
          <DynamicPagination
            meta={data.meta}
            onPageChange={handlePageChange}
          ></DynamicPagination>
        )}
      </div>
    </div>
  );
};

export default ManageUser;
