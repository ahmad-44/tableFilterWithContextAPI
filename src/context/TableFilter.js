import { createContext, useContext } from "react";

//create a context
export const TableFilterContext = createContext({
  regNo: false,
  name: false,
  switchRegNo: () => {},
  switchName: () => {},
});

// create a provider for the given context
export const TableFilterProvider = TableFilterContext.Provider;

// create hook for using context as a separate function
export default function useTableFilter() {
  return useContext(TableFilterContext);
}
