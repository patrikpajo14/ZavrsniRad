export default function TableNoData({ isNotFound, title }) {
  return (
    <tr>
      {isNotFound ? (
        <td colSpan={12}>
          <p className="h-[160px]">{title ? title : "No Data"}</p>
        </td>
      ) : (
        <td colSpan={12} style={{ padding: 0 }} />
      )}
    </tr>
  );
}
