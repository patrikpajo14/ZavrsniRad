"use client";
import React from "react";
import {
  TableEmptyRows,
  TableHeadCustom,
  TableNoData,
  TableResponsiveWrap,
} from "@/components/table";
import { useState } from "react";
import { useRouter } from "next/navigation";
import OffersTableRow from "./OffersTableRow";

const TABLE_HEAD = [
  { id: "id", label: "ID", align: "left" },
  { id: "customerName", label: "Customer name", align: "left" },
  { id: "date", label: "Date", align: "left" },
  { id: "address", label: "Address", align: "left" },
  { id: "status", label: "Status", align: "left" },
  { id: "price", label: "Price", align: "left" },
  { id: "", label: "Options", align: "right" },
];

export default function OffersTable() {
  const { push } = useRouter();

  const _offersList = [
    {
      id: "1",
      customerName: "Jayvion Simon",
      date: "03.05.2023",
      address: "some address, 13",
      status: "paid",
      price: 2000,
    },
    {
      id: "2",
      customerName: "Lucian Obrien",
      date: "03.05.2023",
      address: "some address, 13",
      status: "un paid",
      price: 2000,
    },
    {
      id: "3",
      customerName: "Deja Brady",
      date: "03.05.2023",
      address: "some address, 13",
      status: "un paid",
      price: 2000,
    },
    {
      id: "4",
      customerName: "Harrison Stein",
      date: "03.05.2023",
      address: "some address, 13",
      status: "paid",
      price: 2000,
    },
    {
      id: "5",
      customerName: "Harrison Ford",
      date: "03.05.2023",
      address: "some address, 13",
      status: "paid",
      price: 2000,
    },
  ];

  const [tableData, setTableData] = useState(_offersList);

  const handleDeleteRow = (id) => {
    const deleteRow = tableData.filter((row) => row.id !== id);
    setTableData(deleteRow);
  };

  const handleEditRow = (id) => {
    push(`/dashboard/offers/${id}`);
  };

  return (
    <div className="card">
      <div className="p-4">
        <h2 className="text-[18px] font-bold">Offers list</h2>
      </div>
      <TableResponsiveWrap>
        <table className="min-w-[800px]">
          <TableHeadCustom headLabel={TABLE_HEAD} rowCount={tableData.length} />

          <tbody>
            {tableData.map((row) => (
              <OffersTableRow
                key={row.id}
                row={row}
                onDeleteRow={() => handleDeleteRow(row.id)}
                onEditRow={() => handleEditRow(row.id)}
              />
            ))}
            {/* 
            <TableEmptyRows height={60} emptyRows={tableData.length} /> */}

            <TableNoData isNotFound={tableData.length < 1} />
          </tbody>
        </table>
      </TableResponsiveWrap>
    </div>
  );
}
