import Link from "next/link";
import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";

const DetailedPriceCard = ({ dir }) => {
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);
  return (
    <div className="card bg-base-100 " dir={dir}>
      <div className="card-body">
        <button
          className="btn btn-block btn-outline"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample1"
          aria-expanded="true"
          aria-controls="collapseExample1"
        >
          <p className="text-sm">Price details</p>
        </button>
        <div className="collapse" id="collapseExample1">
          <div className="stats stats-vertical lg:stats-horizontal shadow bg-base-300 text-bg-base-content">
            <div className="stat flex">
              <div className=" text-sm">USD</div>
              <div className="stat-value text-lg">
                <FormattedMessage id="page.SearchResults.priceValueUSD" />
              </div>
            </div>

            <div className="stat flex">
              <div className=" text-sm">IRR</div>
              <div className="stat-value text-lg">
                {" "}
                <FormattedMessage id="page.SearchResults.priceValueIRR" />
              </div>
            </div>

            <div className="stat flex">
              <div className=" text-xs">IQD</div>

              <div className="stat-value text-lg">
                {" "}
                <FormattedMessage id="page.SearchResults.priceValueIQD" />
              </div>
            </div>
          </div>
        </div>

        <Link href="/FinalReport">
          <div className="card-actions justify-end">
            <button className="btn btn-warning btn-block">continue</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DetailedPriceCard;
