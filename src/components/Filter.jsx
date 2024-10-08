import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FilterIcon } from "./FilterIcon.jsx";
import useTableFilter from "../context/TableFilter.js";

export default function Filter() {
  const { regNo, name, switchRegNo, switchName } = useTableFilter();
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <FilterIcon />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <div className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
              <div>
                <input
                  type="checkbox"
                  id="regNo"
                  name="regNo"
                  checked={regNo}
                  className="mr-2"
                  onChange={switchRegNo}
                />
                <label htmlFor="regNo">Reg No</label>
              </div>
            </div>
          </MenuItem>
          <MenuItem>
            <div className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
              <div>
                <input
                  type="checkbox"
                  id="name"
                  name="name"
                  checked={name}
                  className="mr-2"
                  onChange={switchName}
                />
                <label htmlFor="name">Name</label>
              </div>
            </div>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
