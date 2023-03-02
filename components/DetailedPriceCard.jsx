import React, { useEffect } from "react";

const DetailedPriceCard = () => {
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);
  return (
    <div className="card bg-base-100 ">
      <div className="card-body">
        <button
          className="btn btn-block btn-outline"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample1"
          aria-expanded="false"
          aria-controls="collapseExample1"
        >
          <p className="text-sm">Price details</p>
        </button>
        <div className="collapse" id="collapseExample1">
          <div className="block p-6 rounded-lg shadow-lg card">
            <div className="flex flex-col justify-between items-center w-full ">
              <div className="flex flex-col  items-center w-full lg:flex-row ">
                <div className="flex">
                  <div className="badge">1</div>
                  <div className="font-bold ">&nbsp;adults</div>
                </div>

                <div className="divider lg:divider-horizontal"></div>
                <div className="flex">
                  <div className="badge ">2</div>
                  <div className="font-bold ">&nbsp;children</div>
                </div>

                <div className="divider lg:divider-horizontal"></div>
                <div className="badge badge-warning badge-lg">
                  243<div className="font-bold ">&nbsp;$</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-actions justify-end">
          <button className="btn btn-success btn-block">continue</button>
        </div>
      </div>
    </div>
  );
};

export default DetailedPriceCard;
