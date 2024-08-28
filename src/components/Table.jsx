import useTableFilter from "../context/TableFilter";

function Table() {
  const { regNo, name } = useTableFilter();

  const data = [
    { regNo: 1, name: "Khan 1" },
    { regNo: 2, name: "Khan 2" },
    { regNo: 3, name: "Khan 3" },
  ];
  return (
    <div className="flex justify-center mt-4">
      <table className="border-collapse border border-slate-500 ">
        <tbody>
          <tr>
            {regNo ? (
              <th className="border border-slate-600 px-5 py-3">Reg No</th>
            ) : (
              ""
            )}
            {name ? (
              <th className="border border-slate-600 px-5 py-3">Name</th>
            ) : (
              ""
            )}
          </tr>
        </tbody>
        <tbody>
          {data.map((row) => {
            return (
              <tr key={row.regNo}>
                {regNo ? (
                  <td className="border border-slate-600 px-5 py-3">
                    {row.regNo}
                  </td>
                ) : (
                  ""
                )}
                {name ? (
                  <td className="border border-slate-600 px-5 py-3">
                    {row.name}
                  </td>
                ) : (
                  ""
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
