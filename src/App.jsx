import { useState } from "react";
import "./App.css";
import Table from "./components/Table";
import { TableFilterProvider } from "./context/TableFilter.js";

function App() {
  return <Table />;
}

export default App;
