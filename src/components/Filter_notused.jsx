import useTableFilter from "../context/TableFilter.js";
function Filter() {
  const { regNo, name, switchRegNo, switchName } = useTableFilter();

  return (
    <>
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
    </>
  );
}

export default Filter;
