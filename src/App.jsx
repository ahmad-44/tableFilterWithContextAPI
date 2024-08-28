import { useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Table from "./components/Table";
import { TableFilterProvider } from "./context/TableFilter.js";

function App() {
  const [regNo, setRegNo] = useState(false);
  const [name, setName] = useState(false);

  const switchRegNo = () => {
    setRegNo(!regNo);
  };
  const switchName = () => {
    setName(!name);
  };
  return (
    <TableFilterProvider value={{ regNo, name, switchName, switchRegNo }}>
      <Filter />
      <Table />
    </TableFilterProvider>
  );
}

export default App;
