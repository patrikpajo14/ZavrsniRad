"use client";
import React from "react";
import {
  TableHeadCustom,
  TableNoData,
  TableResponsiveWrap,
} from "@/components/table";
import { useRouter } from "next/navigation";
import OffersTableRow from "./OffersTableRow";
import { useGetOffers } from "@/app/actions/GetOffers";

const TABLE_HEAD = [
  { id: "id", label: "ID", align: "left" },
  { id: "customerName", label: "Customer name", align: "left" },
  { id: "date", label: "Create Date", align: "left" },
  { id: "address", label: "Address", align: "left" },
  { id: "status", label: "Status", align: "left" },
  { id: "price", label: "Price", align: "left" },
  { id: "", label: "Options", align: "right" },
];

export default function OffersTable() {
  const { push } = useRouter();

  const { data: offers, isLoading } = useGetOffers();

  console.log(!isLoading && offers);

  const handleDeleteRow = (id) => {};

  const handleEditRow = (id) => {
    push(`/dashboard/offers/${id}`);
  };

  const handleViewRow = (id) => {
    push(`/dashboard/offers/${id}/view`);
  };

  return (
    <div className="card">
      <div className="p-4">
        <h2 className="text-[18px] font-bold">Offers list</h2>
      </div>
      <TableResponsiveWrap>
        <table className="min-w-[800px]">
          <TableHeadCustom headLabel={TABLE_HEAD} rowCount={offers?.length} />

          <tbody>
            {!isLoading &&
              offers?.map((row) => (
                <OffersTableRow
                  key={row.id}
                  row={row}
                  onDeleteRow={() => handleDeleteRow(row.id)}
                  onEditRow={() => handleEditRow(row.id)}
                  onViewRow={() => handleViewRow(row.id)}
                />
              ))}
            <TableNoData
              isNotFound={offers?.length < 1 || offers === undefined}
            />
          </tbody>
        </table>
      </TableResponsiveWrap>
    </div>
  );
}
