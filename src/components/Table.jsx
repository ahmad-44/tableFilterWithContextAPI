import Filter from "./Filter";
import { TableFilterProvider } from "../context/TableFilter.js";
import { useState } from "react";

function Table() {
  const [regNo, setRegNo] = useState(false);
  const [name, setName] = useState(false);

  const switchRegNo = () => {
    setRegNo(!regNo);
  };
  const switchName = () => {
    setName(!name);
  };
  const data = [
    { regNo: 1, name: "Khan 1" },
    { regNo: 2, name: "Khan 2" },
    { regNo: 3, name: "Khan 3" },
  ];
  return (
    <TableFilterProvider value={{ regNo, name, switchName, switchRegNo }}>
      <div className="flex justify-center mt-4">
        <table className="border-collapse border border-slate-500 ">
          <thead>
            <tr>
              <th className="border border-slate-600 px-5 py-3">
                <Filter />
              </th>

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
          </thead>
          <tbody>
            {data.map((row) => {
              return (
                <tr key={row.regNo}>
                  <td className="border border-slate-600 px-5 py-3"></td>
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
    </TableFilterProvider>
  );
}

export default Table;
