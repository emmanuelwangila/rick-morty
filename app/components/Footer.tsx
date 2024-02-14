import Image from "next/image";

export function Footer() {
  return (
    <div className="bg-black rounded-md flex-row m-2 p-3  ">
      <div className="flex flex-row  gap-4 ">
        <h3 className=" flex text-blue-500 ">Emmanuel Wangila</h3>
        <h4 className="flex text-blue-500 font-sans text-sm">
          {" "}
          All rights reserved
        </h4>
      </div>
    </div>
  );
}

export default Footer();
