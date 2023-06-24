"use client";
import React from "react";
import {
  TableEmptyRows,
  TableHeadCustom,
  TableNoData,
  TableResponsiveWrap,
} from "@/components/table";
import { useRouter } from "next/navigation";
import OffersTableRow from "./OffersTableRow";
import { useDeleteOffer, useGetOffers } from "@/app/actions/GetOffers";
import Link from "next/link";
import Image from "next/image";

const TABLE_HEAD = [
  { id: "id", label: "ID", align: "left" },
  { id: "customerName", label: "Customer name", align: "left" },
  { id: "date", label: "Create Date", align: "left" },
  { id: "address", label: "Address", align: "left" },
  { id: "status", label: "Status", align: "left" },
  { id: "price", label: "Price", align: "left" },
  { id: "", label: "Options", align: "right" },
];

export default function OffersTable({ limit }) {
  const { push } = useRouter();

  const { data: offers, isLoading } = useGetOffers();

  const { mutate: deleteOffer } = useDeleteOffer();

  const handleDeleteRow = (id) => {
    deleteOffer(id);
  };

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
            {!isLoading && !limit
              ? offers?.map((row) => (
                  <OffersTableRow
                    key={row.id}
                    row={row}
                    onDeleteRow={() => handleDeleteRow(row.id)}
                    onEditRow={() => handleEditRow(row.id)}
                    onViewRow={() => handleViewRow(row.id)}
                  />
                ))
              : offers
                  ?.slice(0, limit)
                  ?.map((row) => (
                    <OffersTableRow
                      key={row.id}
                      row={row}
                      onDeleteRow={() => handleDeleteRow(row.id)}
                      onEditRow={() => handleEditRow(row.id)}
                      onViewRow={() => handleViewRow(row.id)}
                    />
                  ))}
            <TableEmptyRows
              emptyRows={!isLoading ? 5 - offers?.length : 0}
              height={!isLoading && offers?.length < 5 ? 60 : 0}
            />
            <TableNoData
              isNotFound={offers?.length < 1 || offers === undefined}
              title={isLoading ? "Table is loading..." : "No data in table"}
            />
          </tbody>
        </table>
      </TableResponsiveWrap>
      {limit && (
        <div className="p-4 flex justify-end">
          <div className="flex gap-2">
            <Link href={"/dashboard/offers"} className="text-sm">
              View all
            </Link>
            <Image
              src={"/assets/icons/ico_arrow.svg"}
              alt="arrow"
              width={12}
              height={12}
            />
          </div>
        </div>
      )}
    </div>
  );
}
