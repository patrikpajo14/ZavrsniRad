import { useEffect, useState } from "react";
import Button from "@/components/Button";

export default function OffersTableRow({ row, onDeleteRow, onEditRow }) {
  const { id, customerName, date, address, price, status } = row;
  const [openConfirm, setOpenConfirm] = useState(false);
  const [color, setColor] = useState("green");

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  useEffect(() => {
    status == "un paid" ? setColor("red") : setColor("green");
  }, [row]);

  return (
    <>
      <tr>
        <td align="left">{id}</td>

        <td align="left" style={{ minWidth: "160px" }}>
          {customerName}
        </td>

        <td align="left" style={{ minWidth: "110px" }}>
          {date}
        </td>

        <td align="left" style={{ minWidth: "140px" }}>
          {address}
        </td>

        <td align="left" style={{ minWidth: "100px" }}>
          <label
            className={`px-3 py-1 rounded-lg bg-${color}-200 text-${color}-600 text-[12px] font-bold capitalize`}
          >
            {status}
          </label>
        </td>

        <td align="left">{price}</td>

        <td align="right">edit delete</td>
      </tr>
      {/*       <ConfirmDialog
        open={openConfirm}
        onClose={handleCloseConfirm}
        title="Izbriši"
        content="Jeste li sigurni da želite obrisati?"
        action={
          <Button variant="contained" color="error" onClick={onDeleteRow}>
            Izbriši
          </Button>
        }
      /> */}
    </>
  );
}
