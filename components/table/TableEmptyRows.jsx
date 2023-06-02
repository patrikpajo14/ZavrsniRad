export default function TableEmptyRows({ emptyRows, height }) {
  if (!emptyRows) {
    return null;
  }

  return (
    <tr
      style={{
        ...(height && {
          height: height * emptyRows,
        }),
      }}
    >
      <td colSpan={9}/>
    </tr>
  );
}
