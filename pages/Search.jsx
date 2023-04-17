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
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const validationSchema = Yup.object().shape({
  origin: Yup.string().required("Choose an origin"),
  destination: Yup.string().required("Choose a destination"),
  flightDate: Yup.string().required("Choose a date"),
  flightClass: Yup.string().required("Economy or Business?"),
  numOfPassengers: Yup.object().shape({
    adults: Yup.number().required(),
    children: Yup.number().required(),
    infants: Yup.number().required(),
  }),
});

const initialValues = {
  origin: "",
  destination: "",
  flightDate: "",
  flightClass: "",
  numOfPassengers: { adults: 1, children: 0, infants: 0 },
};

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
  const [adultsCount, setAdultsCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infantsCount, setInfantsCount] = useState(0);

  const handleAdultsIncrease = () => {
    setAdultsCount(adultsCount + 1);
  };

  const handleAdultsDecrease = () => {
    if (adultsCount > 0) {
      setAdultsCount(adultsCount - 1);
    }
  };

  const handleChildrenIncrease = () => {
    setChildrenCount(childrenCount + 1);
  };

  const handleChildrenDecrease = () => {
    if (childrenCount > 0) {
      setChildrenCount(childrenCount - 1);
    }
  };
  const handleInfantsIncrease = () => {
    setInfantsCount(infantsCount + 1);
  };

  const handleInfantsDecrease = () => {
    if (infantsCount > 0) {
      setInfantsCount(infantsCount - 1);
    }
  };
  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 200);
  };

  // const passengerCountString = `${adultsCount} <FormattedMessage id="page.home.adults" />, ${childrenCount} Children, ${infantsCount} Infants`;

  function ReportOfWantedTicket() {
    return (
      <div>
        <div className="div">
          <div className="flex">
            <div className="">
              <FormattedMessage id="page.home.numOfPassengers" /> :
            </div>
            <div className="flex">
              <div className="flex">
                <div className="">{adultsCount}</div>
                <div className="">
                  &nbsp;
                  <FormattedMessage id="page.home.adults" />
                  &#44; &nbsp;
                </div>
              </div>
              <div className="flex">
                <div className="">{childrenCount}</div>
                <div className="">
                  &nbsp;
                  <FormattedMessage id="page.home.children" />
                  &#44; &nbsp;
                </div>
              </div>
              <div className="flex">
                <div className="">{infantsCount}</div>
                &nbsp;
                <div className="">
                  <FormattedMessage id="page.home.infants" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                className="grid grid-cols-1 gap-6 md:grid-cols-2"
              >
                {({
                  values,
                  handleChange,
                  handleBlur,
                  setFieldValue,
                  isSubmitting,
                }) => (
                  <Form>
                    {/* <form className="grid grid-cols-1 gap-6 md:grid-cols-2"> */}
                    <div className="form-control w-full max-w-xs">
                      <label className="label" htmlFor="origin">
                        <label className="label-text">
                          <FormattedMessage id="page.home.origin" />
                        </label>
                      </label>
                      <Field
                        as="select"
                        name="origin"
                        id="origin"
                        className="select select-bordered "
                        value={values.origin}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option>Select origin</option>
                        <option value="Tehran">
                          <FormattedMessage id="page.home.originOptionTehran" />
                        </option>
                        <option value="Mashhad">
                          <FormattedMessage id="page.home.originOptionMashhad" />
                        </option>
                      </Field>
                      <ErrorMessage name="origin" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                      <label className="label" htmlFor="destination">
                        <label className="label-text">
                          <FormattedMessage id="page.home.destination" />
                        </label>
                      </label>
                      <Field
                        as="select"
                        name="destination"
                        id="destination"
                        className="select select-bordered "
                        value={values.destination}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option>Select destination</option>

                        <option value="Mashhad">
                          <FormattedMessage id="page.home.destinationOptionMashhad" />
                        </option>
                        <option value="Tehran">
                          <FormattedMessage id="page.home.destinationOptionTehran" />
                        </option>
                      </Field>
                      <ErrorMessage name="destination" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                      <label className="label" htmlFor="flightDate">
                        <label className="label-text">
                          <FormattedMessage id="page.home.date" />
                        </label>
                      </label>
                      <DatePicker
                        name="flightDate"
                        id="flightDate"
                        selected={values.flightDate}
                        onChange={(date) => setFieldValue("flightDate", date)}
                        onBlur={handleBlur}
                        dateFormat="MM/dd/yyyy"
                        placeholderText="MM/DD/YYYY"
                        showYearDropdown
                        yearDropdownItemNumber={100}
                        scrollableYearDropdown
                        showMonthDropdown
                        dropdownMode="select"
                        className="input input-bordered  w-full max-w-xs border-grey rounded-sm ${currentTheme === 'corporate' ? 'bg-red-500 text-white' : 'bg-gray-600 text-gray-200' }"
                      />
                      <ErrorMessage name="flightDate" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                      <label className="label" htmlFor="flightClass">
                        <label className="label-text">
                          <FormattedMessage id="page.home.class" />
                        </label>
                      </label>
                      <Field
                        as="select"
                        name="flightClass"
                        id="destination"
                        value={values.flightClass}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="select select-bordered "
                      >
                        <option>Select flight class</option>

                        <option value="Economy">
                          <FormattedMessage id="page.home.classOptionEconomy" />
                        </option>
                        <option value="Business">
                          <FormattedMessage id="page.home.classOptionBusiness" />
                        </option>
                      </Field>
                    </div>
                    <div className="grid grid-cols-1">
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <label className="label-text">
                            <FormattedMessage id="page.home.numOfPassengers" />
                          </label>
                        </label>
                        <Field
                          className="input input-bordered"
                          type="text"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseExample1"
                          aria-expanded="true"
                          aria-controls="collapseExample1"
                          value={values.numOfPassengers.adults}
                          name="numOfPassengers"
                          id="numOfPassengers"
                        />
                      </div>

                      <div className="collapse" id="collapseExample1">
                        <div className="form-control w-full max-w-xs mb-10">
                          <div className="flex justify-between my-4 h-4">
                            <label
                              htmlFor="adults-count"
                              className="text-sm font-bold label space-x-2"
                            >
                              <div>
                                <BsFillPersonFill />
                              </div>
                              <div>
                                <FormattedMessage id="page.home.adults" />
                              </div>
                            </label>
                            <div className="flex space-x-2 items-center">
                              <button
                                type="button"
                                onClick={handleAdultsDecrease}
                              >
                                <HiMinusCircle />
                              </button>
                              <span
                                id="adults-count"
                                className="text-lg font-medium"
                              >
                                {adultsCount}
                              </span>
                              <button
                                type="button"
                                onClick={handleAdultsIncrease}
                              >
                                <HiPlusCircle />
                              </button>
                            </div>
                          </div>
                          <div className="flex justify-between my-4 h-4">
                            <label
                              htmlFor="children-count"
                              className="text-sm font-bold label space-x-2"
                            >
                              <div>
                                <FaChild />
                              </div>
                              <div>
                                <FormattedMessage id="page.home.children" />
                              </div>
                            </label>
                            <div className="flex space-x-2 items-center">
                              <button
                                type="button"
                                onClick={handleChildrenDecrease}
                              >
                                <HiMinusCircle />
                              </button>
                              <span
                                id="children-count"
                                className="text-lg font-medium"
                              >
                                {childrenCount}
                              </span>
                              <button
                                type="button"
                                onClick={handleChildrenIncrease}
                              >
                                <HiPlusCircle />
                              </button>
                            </div>
                          </div>
                          <div className="flex justify-between my-4 h-4">
                            <label
                              htmlFor="infants-count"
                              className="text-sm font-bold label space-x-2"
                            >
                              <div>
                                <MdChildFriendly />
                              </div>
                              <div>
                                <FormattedMessage id="page.home.infants" />
                              </div>
                            </label>
                            <div className="flex space-x-2 items-center">
                              <button
                                type="button"
                                onClick={handleInfantsDecrease}
                              >
                                <HiMinusCircle />
                              </button>
                              <span
                                id="infants-count"
                                className="text-lg font-medium"
                              >
                                {infantsCount}
                              </span>
                              <button
                                type="button"
                                onClick={handleInfantsIncrease}
                              >
                                <HiPlusCircle />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ReportOfWantedTicket />
                    {/* <Link href="/SearchResults"> */}
                    <button
                      type="submit"
                      className="btn btn-warning btn-block text-sm tracking-wide mt-9 "
                      disabled={isSubmitting}
                    >
                      <span>
                        <FormattedMessage id="page.home.search" />
                      </span>
                    </button>
                    {/* </Link> */}
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Search;
