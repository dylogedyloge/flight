import Link from "next/link";
import React from "react";
import { FormattedMessage } from "react-intl";

const Checkout = ({ dir }) => {
  return (
    <div
      className="h-screen flex flex-col items-center justify-center text-6xl font-bold "
      dir={dir}
    >
      <FormattedMessage id="page.Checkout.checkout" />
      <Link href="/AllBoughtTickets">
        <button className="btn my-10">
          <FormattedMessage id="page.Checkout.seeAllBoughtTickets" />
        </button>
      </Link>
    </div>
  );
};

export default Checkout;
