import { useEffect, useState } from "react";
import Button from "@/components/Button";
import ConfirmDialog from "../ConfirmDialog";
import IconButton from "../IconButton";
import Image from "next/image";
import { format, parseISO } from "date-fns";

export default function OffersTableRow({
  row,
  onDeleteRow,
  onEditRow,
  onViewRow,
}) {
  const [openConfirm, setOpenConfirm] = useState(false);

  console.log(row);

  const formatedDate = format(parseISO(row.create_date), "dd.MM.yyyy");

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  return (
    <>
      <tr>
        <td align="left">{row.id}</td>

        <td align="left" style={{ minWidth: "160px" }}>
          {row.customer_name}
        </td>

        <td align="left" style={{ minWidth: "110px" }}>
          {formatedDate}
        </td>

        <td align="left" style={{ minWidth: "140px" }}>
          {row.customer_address}
        </td>

        <td align="left" style={{ minWidth: "100px" }}>
          <label
            className={`px-3 py-1 rounded-lg bg-green-200 text-green-600 text-[12px] font-bold capitalize`}
          >
            {row.status}
          </label>
        </td>

        <td align="left">{row.total} €</td>

        <td align="right">
          <IconButton onClick={onEditRow}>
            <Image
              src="/assets/icons/ico_edit.svg"
              alt="edit"
              width={20}
              height={20}
            />
          </IconButton>
          <IconButton onClick={onViewRow}>
            <Image
              src="/assets/icons/ico_eye.svg"
              alt="view"
              width={20}
              height={20}
            />
          </IconButton>
          <IconButton
            onClick={() => {
              setOpenConfirm(true);
            }}
          >
            <Image
              src="/assets/icons/ico_delete.svg"
              alt="delete"
              width={20}
              height={20}
            />
          </IconButton>

          <ConfirmDialog
            open={openConfirm}
            onClose={handleCloseConfirm}
            title="Izbriši"
            content="Jeste li sigurni da želite obrisati?"
            action={
              <Button variant="contained" color="error" onClick={onDeleteRow}>
                Izbriši
              </Button>
            }
          />
        </td>
      </tr>
    </>
  );
}
