import { FormattedMessage } from "react-intl";
import Image from "next/image";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { useState } from "react";
import Link from "next/link";
const FinalReport = () => {
  const [isAgreedToTerms, setIsAgreedToTerms] = useState(false);
  const handleAgreedToTerm = () => {
    setIsAgreedToTerms(!isAgreedToTerms);
  };

  return (
    <div className="grid grid-cols-1 gap-6 p-1 sm:px-32">
      <div className="card w-full bg-base-100 shadow-xl mx-2">
        <div className="card-body">
          <h2 className="card-title">Price Details</h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Age Range</th>
                  <th>Base Price</th>
                  <th>Tax</th>
                  <th>Discount</th>
                  <th>Number</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Adult</td>
                  <td>48,000,000 IRR</td>
                  <td>2,300 IRR</td>
                  <td>
                    <span className="text-red-600">(-15%)</span> 3,240,000
                  </td>
                  <td>3</td>
                  <td>97,500,000 IRR</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Contact Details</h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Phone</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover">
                  <td>09123456789</td>
                  <td>newcash@gmail.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Flight Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 ">
            <div className=" h-full w-full p-10">
              <div className="flex  justify-between">
                <div className="text-sm font-bold">
                  Departure Time: 11:35 PM
                </div>
                <div className="text-sm opacity-70">
                  Friday,November 10(Farvardin 12)
                </div>
              </div>

              <div className="flex items-center ">
                <div className="my-10">
                  <div className="flex items-baseline  ">
                    <div className="font-bold">TEHRAN(THR)</div>
                    <GiAirplaneDeparture className="text-4xl text-blue-600" />
                  </div>

                  <div class=" border-l-2 border-stone-500 border-dotted h-52 "></div>
                  <div className="flex items-baseline ">
                    <GiAirplaneArrival className="text-4xl text-red-600" />
                    <div className="font-bold">MASHHAD(MHD)</div>
                  </div>
                </div>
                <div>
                  <Image
                    src="/asemanairline.png"
                    width="400"
                    height="20"
                    className="my-2 -mx-24 "
                  />
                </div>
              </div>
              <div className="flex  justify-between">
                <div className="text-sm font-bold">Arrival Time: 01:35 AM</div>
                <div className="text-sm opacity-70">
                  Saturday,November 11(Farvardin 13)
                </div>
              </div>
            </div>
            <div className="grid place-content-center  h-full w-full">
              <div className="stats stats-vertical shadow">
                <div className="stat">
                  <div className="stat-title">Airline</div>
                  <div className="stat-value text-sm">Sepehran Airlines</div>
                </div>

                <div className="stat">
                  <div className="stat-title">Airplane Model</div>
                  <div className="stat-value text-sm">Boeing 324</div>
                </div>

                <div className="stat">
                  <div className="stat-title">Allowed Cargo</div>
                  <div className="stat-value text-sm">15 kg</div>
                </div>
              </div>
            </div>
            <div className="grid place-content-center h-full w-full">
              <div className="stats stats-vertical shadow">
                <div className="stat">
                  <div className="stat-title">Flight Number</div>
                  <div className="stat-value text-sm">IS 324</div>
                </div>

                <div className="stat">
                  <div className="stat-title">Flight Duration</div>
                  <div className="stat-value text-sm">1 hr, 35 min</div>
                </div>

                <div className="stat">
                  <div className="stat-title">Rate Class</div>
                  <div className="stat-value text-sm">Economy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Regulations</h2>
          <p>
            <FormattedMessage id="page.ChoosedFlight.carriageRulesValue" />
          </p>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Passengers List</h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Age Range</th>
                  <th>Sex</th>
                  <th>Nationality</th>
                  <th>Birth Date</th>
                  <th>Passport Number</th>
                  <th>Passport Expiry Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Abouzar Ghaffari</td>
                  <td>Adult</td>
                  <td>Man</td>
                  <td>Iraq</td>
                  <td>1982-01-26</td>
                  <td>41413232</td>
                  <td>2022-02-02</td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>Salman Farsi</td>
                  <td>Adult</td>
                  <td>Man</td>
                  <td>Iraq</td>
                  <td>1982-12-06</td>
                  <td>4678232</td>
                  <td>2022-02-02</td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>Balal Habashi</td>
                  <td>Adult</td>
                  <td>Man</td>
                  <td>Iraq</td>
                  <td>1884-12-06</td>
                  <td>46786232</td>
                  <td>2021-02-02</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="form-control">
            <label className="cursor-pointer label  ">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="checkbox checkbox-warning "
                  onChange={handleAgreedToTerm}
                />
                <span className="label-text inline-block mx-4">
                  I agree to the terms & conditions
                </span>
              </div>
              <Link href="/Checkout">
                <button
                  className={
                    isAgreedToTerms
                      ? `btn btn-warning btn-wide`
                      : `btn btn-disabled btn-wide`
                  }
                >
                  checkout
                </button>
              </Link>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FinalReport;
