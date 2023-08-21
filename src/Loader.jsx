import { Rings } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="flex justify-center  items-center fixed left-0 top-0 bg-black bg-opacity-50 w-[100%] h-[100vh] z-10 ">
      <Rings
        height="80"
        width="80"
        color="green"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
    </div>
  );
}
