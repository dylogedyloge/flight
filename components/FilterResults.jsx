import Image from "next/image";
import { useEffect } from "react";

const FilterResults = ({ dir }) => {
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);
  return (
    <div className="m-6 " dir={dir}>
      <p className="md:space-x-1 space-y-1 md:space-y-0 mb-4">
        <button
          className="btn btn-block btn-outline"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample1"
          aria-expanded="true"
          aria-controls="collapseExample1"
        >
          based On Flight Number
        </button>
      </p>
      <div className="collapse" id="collapseExample1">
        <div className="form-control w-full max-w-xs mb-10">
          <input
            type="text"
            placeholder="Flight Number.."
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </div>
      <p className="md:space-x-1 space-y-1 md:space-y-0 mb-4">
        <button
          className="btn btn-block btn-outline "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample2"
          aria-expanded="true"
          aria-controls="collapseExample2"
        >
          Based on Airline
        </button>
      </p>
      <div className="collapse" id="collapseExample2">
        {/* <div className="block p-6 rounded-lg shadow-lg card"> */}
        <div className="form-control w-full max-w-xs mb-10">
          <label className="cursor-pointer label ">
            <div className="flex items-center">
              <Image src="/asemanairline.png" width="80" height="50" />
              <span className="label-text font-bold ml-2">Aseman Airline</span>
            </div>
            <input type="checkbox" className="checkbox " />
          </label>
          <label className="cursor-pointer label ">
            <div className="flex items-center">
              <Image src="/mahanair.png" width="80" height="50" />
              <span className="label-text font-bold ml-2">Mahan Airline</span>
            </div>

            <input type="checkbox" className="checkbox " />
          </label>
          <label className="cursor-pointer label ">
            <div className="flex items-center">
              <Image src="/asemanairline.png" width="80" height="50" />
              <span className="label-text font-bold ml-2">Aseman Airline</span>
            </div>
            <input type="checkbox" className="checkbox " />
          </label>
          <label className="cursor-pointer label ">
            <div className="flex items-center">
              <Image src="/mahanair.png" width="80" height="50" />
              <span className="label-text font-bold ml-2">Mahan Airline</span>
            </div>

            <input type="checkbox" className="checkbox " />
          </label>
        </div>
        {/* </div> */}
      </div>
      <p className="md:space-x-1 space-y-1 md:space-y-0 mb-4">
        <button
          className="btn btn-block btn-outline  "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample3"
          aria-expanded="true"
          aria-controls="collapseExample3"
        >
          Based on Flight Type
        </button>
      </p>
      <div className="collapse" id="collapseExample3">
        {/* <div className="block p-6 rounded-lg shadow-lg card"> */}
        <div className="form-control w-full max-w-xs mb-10">
          <label className="cursor-pointer label">
            <span className="label-text font-bold">Charter</span>
            <input type="checkbox" className="checkbox " />
          </label>
          <label className="cursor-pointer label">
            <span className="label-text font-bold">System</span>
            <input type="checkbox" className="checkbox " />
          </label>
          {/* </div> */}
        </div>
      </div>
      <p className="md:space-x-1 space-y-1 md:space-y-0 mb-4">
        <button
          className="btn btn-block btn-outline  "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample4"
          aria-expanded="true"
          aria-controls="collapseExample4"
        >
          Based on Stops
        </button>
      </p>
      <div className="collapse" id="collapseExample4">
        {/* <div className="block p-6 rounded-lg shadow-lg card"> */}
        <div className="form-control w-full max-w-xs mb-10">
          <select className="select select-bordered  w-full max-w-xs">
            <option>One stop</option>
            <option>Two stops</option>
            <option>More than two stops</option>
          </select>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default FilterResults;
