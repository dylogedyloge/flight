import { FormattedMessage } from "react-intl";
import { FaSearch } from "react-icons/fa";
import React, { useState } from "react";
// import Datepicker from "react-tailwindcss-datepicker";
import Link from "next/link";
import { HiMinusCircle } from "react-icons/hi";
import { HiPlusCircle } from "react-icons/hi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaChild } from "react-icons/fa";
import { MdChildFriendly } from "react-icons/md";
import * as yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFormik } from "formik";

// Dummy Data
// const dataList = [
//   {
//     id: 1,
//     name: "cerulean",
//     year: 2000,
//     color: "#98B2D1",
//     pantone_value: "15-4020",
//   },
//   {
//     id: 2,
//     name: "fuchsia rose",
//     year: 2001,
//     color: "#C74375",
//     pantone_value: "17-2031",
//   },
//   {
//     id: 3,
//     name: "true red",
//     year: 2002,
//     color: "#BF1932",
//     pantone_value: "19-1664",
//   },
//   {
//     id: 4,
//     name: "aqua sky",
//     year: 2003,
//     color: "#7BC4C4",
//     pantone_value: "14-4811",
//   },
//   {
//     id: 5,
//     name: "tigerlily",
//     year: 2004,
//     color: "#E2583E",
//     pantone_value: "17-1456",
//   },
//   {
//     id: 6,
//     name: "blue turquoise",
//     year: 2005,
//     color: "#53B0AE",
//     pantone_value: "15-5217",
//   },
//   {
//     id: 7,
//     name: "sand dollar",
//     year: 2006,
//     color: "#DECDBE",
//     pantone_value: "13-1106",
//   },
//   {
//     id: 8,
//     name: "chili pepper",
//     year: 2007,
//     color: "#9B1B30",
//     pantone_value: "19-1557",
//   },
//   {
//     id: 9,
//     name: "blue iris",
//     year: 2008,
//     color: "#5A5B9F",
//     pantone_value: "18-3943",
//   },
//   {
//     id: 10,
//     name: "mimosa",
//     year: 2009,
//     color: "#F0C05A",
//     pantone_value: "14-0848",
//   },
//   {
//     id: 11,
//     name: "turquoise",
//     year: 2010,
//     color: "#45B5AA",
//     pantone_value: "15-5519",
//   },
//   {
//     id: 12,
//     name: "honeysuckle",
//     year: 2011,
//     color: "#D94F70",
//     pantone_value: "18-2120",
//   },
//   {
//     id: 13,
//     name: "cerulean",
//     year: 2000,
//     color: "#98B2D1",
//     pantone_value: "15-4020",
//   },
//   {
//     id: 14,
//     name: "fuchsia rose",
//     year: 2001,
//     color: "#C74375",
//     pantone_value: "17-2031",
//   },
//   {
//     id: 15,
//     name: "true red",
//     year: 2002,
//     color: "#BF1932",
//     pantone_value: "19-1664",
//   },
//   {
//     id: 16,
//     name: "aqua sky",
//     year: 2003,
//     color: "#7BC4C4",
//     pantone_value: "14-4811",
//   },
//   {
//     id: 17,
//     name: "tigerlily",
//     year: 2004,
//     color: "#E2583E",
//     pantone_value: "17-1456",
//   },
//   {
//     id: 18,
//     name: "blue turquoise",
//     year: 2005,
//     color: "#53B0AE",
//     pantone_value: "15-5217",
//   },
//   {
//     id: 19,
//     name: "sand dollar",
//     year: 2006,
//     color: "#DECDBE",
//     pantone_value: "13-1106",
//   },
//   {
//     id: 20,
//     name: "chili pepper",
//     year: 2007,
//     color: "#9B1B30",
//     pantone_value: "19-1557",
//   },
//   {
//     id: 21,
//     name: "blue iris",
//     year: 2008,
//     color: "#5A5B9F",
//     pantone_value: "18-3943",
//   },
//   {
//     id: 22,
//     name: "mimosa",
//     year: 2009,
//     color: "#F0C05A",
//     pantone_value: "14-0848",
//   },
//   {
//     id: 23,
//     name: "turquoise",
//     year: 2010,
//     color: "#45B5AA",
//     pantone_value: "15-5519",
//   },
//   {
//     id: 24,
//     name: "honeysuckle",
//     year: 2011,
//     color: "#D94F70",
//     pantone_value: "18-2120",
//   },
// ];

const Search = ({ dir }) => {
  const validationScheme = yup.object().shape({
    origin: yup.string().required("Origin is required"),
    destination: yup.string().required("Destination is required"),
    flightDate: yup.date().required("Flight date is required"),
    flightClass: yup.string().required("Flight class is required"),
    numOfPassengers: yup.object().shape({
      adults: yup.number().min(1),
      children: yup.number().min(0),
      infants: yup.number().min(0),
    }),
    // .test(
    //   "totalPassengers",
    //   "Total number of passengers cannot exceed 9",
    //   (values) => {
    //     const { adults = 1, children = 0, infants = 0 } = values;
    //     return adults + children + infants <= 9;
    //   }
    // ),
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      origin: "",
      destination: "",
      flightDate: "",
      flightClass: "",
      numOfPassengers: { adults: 1, children: 0, infants: 0 },
    },
    validationSchema: validationScheme,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handlePassengersChange = (type, operation) => {
    const newValues = { ...formik.numOfPassengers.values };
    if (operation === "add") {
      newValues[type]++;
    } else if (operation === "subtract" && newValues[type] > 0) {
      newValues[type]--;
    }
    formik.numOfPassengers.setValues(newValues);
  };

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 200);
  };

  // Search
  // const [searchText, setSearchText] = useState("");
  // const [data, setData] = useState(dataList);
  // exclude column list from filter
  const excludeColumns = ["id", "color"];
  // handle change event of search input
  // const handleChange = (value) => {
  //   setSearchText(value);
  //   filterData(value);
  // };
  // filter records by search text
  // const filterData = (value) => {
  //   const lowercasedValue = value.toLowerCase().trim();
  //   if (lowercasedValue === "") setData(dataList);
  //   else {
  //     const filteredData = dataList.filter((item) => {
  //       return Object.keys(item).some((key) =>
  //         excludeColumns.includes(key)
  //           ? false
  //           : item[key].toString().toLowerCase().includes(lowercasedValue)
  //       );
  //     });
  //     setData(filteredData);
  //   }
  // };
  // Search

  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });
  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <main
      dir={dir}
      className=" w-screen bg-[url('/airplane.jpg')] bg-cover bg-no-repeat h-full"
    >
      <section>
        <div className="card shadow-xl flex justify-center min-h-screen">
          <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full h-full bg-base-100 card-body rounded-sm">
              <h1 className="tracking-wider card-title content-center">
                <FormattedMessage id="page.home.chooseYourFlight" />
              </h1>

              <form onSubmit={formik.handleSubmit}>
                <div className="form-control w-full max-w-xs">
                  <label className="label" htmlFor="origin">
                    <label className="label-text">
                      <FormattedMessage id="page.home.origin" />
                    </label>
                  </label>
                  <select
                    name="origin"
                    id="origin"
                    className="select select-bordered "
                    value={{ ...formik.getFieldProps("origin") }}
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                  >
                    <option>Select origin</option>
                    <option value="Tehran">
                      <FormattedMessage id="page.home.originOptionTehran" />
                    </option>
                    <option value="Mashhad">
                      <FormattedMessage id="page.home.originOptionMashhad" />
                    </option>
                  </select>
                  {/* <ErrorMessage name="origin" /> */}
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label" htmlFor="destination">
                    <label className="label-text">
                      <FormattedMessage id="page.home.destination" />
                    </label>
                  </label>
                  <select
                    name="destination"
                    id="destination"
                    className="select select-bordered "
                    value={{ ...formik.getFieldProps("origin") }}
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                  >
                    <option>Select destination</option>

                    <option value="Mashhad">
                      <FormattedMessage id="page.home.destinationOptionMashhad" />
                    </option>
                    <option value="Tehran">
                      <FormattedMessage id="page.home.destinationOptionTehran" />
                    </option>
                  </select>
                  {/* <ErrorMessage name="destination" /> */}
                </div>
                {/* <div className="form-control w-full max-w-xs">
                  <label className="label" htmlFor="flightDate">
                    <label className="label-text">
                      <FormattedMessage id="page.home.date" />
                    </label>
                  </label>
                  <DatePicker
                    name="flightDate"
                    id="flightDate"
                    selected={{ ...formik.getFieldProps("flightDate") }}
                    onChange={(date) => setFieldValue("flightDate", date)}
                    // onBlur={handleBlur}
                    dateFormat="MM/dd/yyyy"
                    placeholderText="MM/DD/YYYY"
                    showYearDropdown
                    yearDropdownItemNumber={100}
                    scrollableYearDropdown
                    showMonthDropdown
                    dropdownMode="select"
                    className="input input-bordered  w-full max-w-xs border-grey rounded-sm ${currentTheme === 'corporate' ? 'bg-red-500 text-white' : 'bg-gray-600 text-gray-200' }"
                  />
                  
                </div> */}
                <div className="form-control w-full max-w-xs">
                  <label className="label" htmlFor="flightClass">
                    <label className="label-text">
                      <FormattedMessage id="page.home.class" />
                    </label>
                  </label>
                  <select
                    name="flightClass"
                    id="destination"
                    value={{ ...formik.getFieldProps("flightClass") }}
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    className="select select-bordered "
                  >
                    <option>Select flight class</option>

                    <option value="Economy">
                      <FormattedMessage id="page.home.classOptionEconomy" />
                    </option>
                    <option value="Business">
                      <FormattedMessage id="page.home.classOptionBusiness" />
                    </option>
                  </select>
                </div>
                <div>
                  <label htmlFor="passengers">Number of Passengers</label>
                  <div
                    className="input input-bordered"
                    onClick={handleDropdownToggle}
                  >
                    <span>{`${formik.values.numOfPassengers.adults} Adults, ${formik.values.numOfPassengers.children} Children, ${formik.values.numOfPassengers.infants} Infants`}</span>
                  </div>
                  {isDropdownOpen && (
                    <div className="dropdown">
                      <div className="flex">
                        <span>Adults</span>
                        <div className="flex items-center">
                          <HiMinusCircle
                            onClick={() =>
                              handlePassengersChange("adults", "subtract")
                            }
                          />
                          <span>{formik.values.numOfPassengers.adults}</span>
                          <HiPlusCircle
                            onClick={() =>
                              handlePassengersChange("adults", "add")
                            }
                          />
                        </div>
                        {formik.touched.numOfPassengers.adults &&
                          formik.errors.numOfPassengers.adults && (
                            <div className="alert alert-error shadow-lg">
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="stroke-current flex-shrink-0 h-6 w-6"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                <span>
                                  {formik.errors.numOfPassengers.adults}
                                </span>
                              </div>
                            </div>
                          )}
                      </div>
                      <div className="flex">
                        <span>Children</span>
                        <div className="flex items-center">
                          <HiMinusCircle
                            onClick={() =>
                              handlePassengersChange("children", "subtract")
                            }
                          />
                          <span>{formik.values.numOfPassengers.children}</span>
                          <HiPlusCircle
                            onClick={() =>
                              handlePassengersChange("children", "add")
                            }
                          />
                        </div>
                      </div>
                      <div className="flex">
                        <span>Infants</span>
                        <div className="flex items-center">
                          <HiMinusCircle
                            onClick={() =>
                              handlePassengersChange("infants", "subtract")
                            }
                          />
                          <span>{formik.values.numOfPassengers.infants}</span>
                          <HiPlusCircle
                            onClick={() =>
                              handlePassengersChange("infants", "add")
                            }
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  <button type="submit" className="btn">
                    Submit
                  </button>
                </div>
                {/* <ReportOfWantedTicket /> */}
                {/* <Link href="/SearchResults"> */}
                <button
                  type="submit"
                  className="btn btn-warning btn-block text-sm tracking-wide mt-9 "
                  // disabled={isSubmitting}
                >
                  <span>
                    <FormattedMessage id="page.home.search" />
                  </span>
                </button>
                {/* </Link> */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Search;
