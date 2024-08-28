import { useState } from "react";
import { TableFilterProvider } from "../context/TableFilter.js";

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const [regNo, setRegNo] = useState(false);
  const [name, setName] = useState(false);

  const switchRegNo = () => setRegNo((prev) => !prev);
  const switchName = () => setName((prev) => !prev);

  return (
    <TableFilterProvider value={{ regNo, name, switchName, switchRegNo }}>
      {children}
    </TableFilterProvider>
  );
};

export default AppProvider;
