import { useState } from 'react';
import Button from "@/components/Button";

export default function RodendaonicaTableRow({ row, onDeleteRow, onEditRow }) {
    const { id, customerName, date, address, price, status} = row;
    const [openConfirm, setOpenConfirm] = useState(false);

    const handleCloseConfirm = () => {
        setOpenConfirm(false);
    };


    return (
        <>
            <tr>
                <td align="left">
                    {id}
                </td>

                <td align="left" style={{minWidth: "160px"}}>
                    {customerName}
                </td>

                <td style={}>
                    {customerName}
                </td>

                <td align="left" style={{minWidth: "110px"}}>
                    {date}
                </td>

                <td align="left" style={{minWidth: "140px"}}>
                    {address}
                </td>

                <td align="left" style={{minWidth: "100px"}}>
                    {status}
                </td>

                <td align="left">
                    {price}
                </td>

                <td align="right">
                    edit delete
                </td>
            </>

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
        </>
    );
}
