import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  let navigate = useNavigate();
  return (
    <div>
      <button
        className="px-5 py-2 m-3 bg-emerald-950 rounded cursor-pointer hover:bg-emerald-900 active:scale-95 duration-300"
        onClick={() => {
          navigate("/");
        }}
      >
        Return to HomePage
      </button>
      <button
        className="px-5 py-2 m-3 bg-emerald-950 rounded cursor-pointer hover:bg-emerald-900 active:scale-95 duration-300"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      <button
        className="px-5 py-2 m-3 bg-emerald-950 rounded cursor-pointer hover:bg-emerald-900 active:scale-95 duration-300"
        onClick={() => {
          navigate(+1);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Navbar2;
