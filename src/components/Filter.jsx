import { useEffect } from "react";
import useTableFilter from "../context/TableFilter";
function Filter() {
  const { regNo, name, switchRegNo, switchName } = useTableFilter();
  //   const [regNo, setRegNo] = useState(false);
  //   const [name, setName] = useState(false);

  //   const switchRegNo = () => {
  //     setRegNo(!regNo);
  //   };
  //   const switchName = () => {
  //     setName(!name);
  //   };

  //   useEffect(() => {
  //     console.log(regNo);
  //   }, [regNo]);
  useEffect(() => {
    console.log(regNo);
  });
  return (
    <>
      <form>
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
      </form>
    </>
  );
}

export default Filter;
