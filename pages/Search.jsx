import { FormattedMessage } from "react-intl";
import { FaSearch } from "react-icons/fa";
import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import Link from "next/link";

// Dummy Data
const dataList = [
  {
    id: 1,
    name: "cerulean",
    year: 2000,
    color: "#98B2D1",
    pantone_value: "15-4020",
  },
  {
    id: 2,
    name: "fuchsia rose",
    year: 2001,
    color: "#C74375",
    pantone_value: "17-2031",
  },
  {
    id: 3,
    name: "true red",
    year: 2002,
    color: "#BF1932",
    pantone_value: "19-1664",
  },
  {
    id: 4,
    name: "aqua sky",
    year: 2003,
    color: "#7BC4C4",
    pantone_value: "14-4811",
  },
  {
    id: 5,
    name: "tigerlily",
    year: 2004,
    color: "#E2583E",
    pantone_value: "17-1456",
  },
  {
    id: 6,
    name: "blue turquoise",
    year: 2005,
    color: "#53B0AE",
    pantone_value: "15-5217",
  },
  {
    id: 7,
    name: "sand dollar",
    year: 2006,
    color: "#DECDBE",
    pantone_value: "13-1106",
  },
  {
    id: 8,
    name: "chili pepper",
    year: 2007,
    color: "#9B1B30",
    pantone_value: "19-1557",
  },
  {
    id: 9,
    name: "blue iris",
    year: 2008,
    color: "#5A5B9F",
    pantone_value: "18-3943",
  },
  {
    id: 10,
    name: "mimosa",
    year: 2009,
    color: "#F0C05A",
    pantone_value: "14-0848",
  },
  {
    id: 11,
    name: "turquoise",
    year: 2010,
    color: "#45B5AA",
    pantone_value: "15-5519",
  },
  {
    id: 12,
    name: "honeysuckle",
    year: 2011,
    color: "#D94F70",
    pantone_value: "18-2120",
  },
  {
    id: 13,
    name: "cerulean",
    year: 2000,
    color: "#98B2D1",
    pantone_value: "15-4020",
  },
  {
    id: 14,
    name: "fuchsia rose",
    year: 2001,
    color: "#C74375",
    pantone_value: "17-2031",
  },
  {
    id: 15,
    name: "true red",
    year: 2002,
    color: "#BF1932",
    pantone_value: "19-1664",
  },
  {
    id: 16,
    name: "aqua sky",
    year: 2003,
    color: "#7BC4C4",
    pantone_value: "14-4811",
  },
  {
    id: 17,
    name: "tigerlily",
    year: 2004,
    color: "#E2583E",
    pantone_value: "17-1456",
  },
  {
    id: 18,
    name: "blue turquoise",
    year: 2005,
    color: "#53B0AE",
    pantone_value: "15-5217",
  },
  {
    id: 19,
    name: "sand dollar",
    year: 2006,
    color: "#DECDBE",
    pantone_value: "13-1106",
  },
  {
    id: 20,
    name: "chili pepper",
    year: 2007,
    color: "#9B1B30",
    pantone_value: "19-1557",
  },
  {
    id: 21,
    name: "blue iris",
    year: 2008,
    color: "#5A5B9F",
    pantone_value: "18-3943",
  },
  {
    id: 22,
    name: "mimosa",
    year: 2009,
    color: "#F0C05A",
    pantone_value: "14-0848",
  },
  {
    id: 23,
    name: "turquoise",
    year: 2010,
    color: "#45B5AA",
    pantone_value: "15-5519",
  },
  {
    id: 24,
    name: "honeysuckle",
    year: 2011,
    color: "#D94F70",
    pantone_value: "18-2120",
  },
];

const Search = ({ dir }) => {
  // Search
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(dataList);
  // exclude column list from filter
  const excludeColumns = ["id", "color"];
  // handle change event of search input
  const handleChange = (value) => {
    setSearchText(value);
    filterData(value);
  };
  // filter records by search text
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(dataList);
    else {
      const filteredData = dataList.filter((item) => {
        return Object.keys(item).some((key) =>
          excludeColumns.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  };
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
          <div className="hidden bg-cover lg:block lg:w-2/5"></div>

          <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full h-full bg-base-100 card-body rounded-sm">
              <h1 className=" tracking-wider card-title content-center">
                <FormattedMessage id="page.home.chooseYourFlight" />
              </h1>
              <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">
                      <FormattedMessage id="page.home.origin" />
                    </span>
                  </label>
                  <select className="select select-bordered ">
                    <option>
                      <FormattedMessage id="page.home.originOptionTehran" />
                    </option>
                    <option>
                      <FormattedMessage id="page.home.originOptionMashhad" />
                    </option>
                  </select>
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">
                      <FormattedMessage id="page.home.destination" />
                    </span>
                  </label>
                  <select className="select select-bordered ">
                    <option>
                      <FormattedMessage id="page.home.destinationOptionMashhad" />
                    </option>
                    <option>
                      <FormattedMessage id="page.home.destinationOptionTehran" />
                    </option>
                  </select>
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <FormattedMessage id="page.home.date" />
                  </label>
                  <Datepicker
                    primaryColor="emerald"
                    useRange={false}
                    asSingle={true}
                    value={value}
                    onChange={handleValueChange}
                    inputClassName="input input-bordered  w-full max-w-xs border-grey rounded-sm"
                  />
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <FormattedMessage id="page.home.numOfPassengers" />
                  </label>
                  <input
                    type="number"
                    className="input input-bordered  w-full max-w-xs"
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">
                      <FormattedMessage id="page.home.class" />
                    </span>
                  </label>
                  <select className="select select-bordered ">
                    <option>
                      <FormattedMessage id="page.home.classOptionEconomy" />
                    </option>
                    <option>
                      <FormattedMessage id="page.home.classOptionBusiness" />
                    </option>
                  </select>
                </div>
                <Link href="/SearchResults">
                  <button className="btn btn-warning w-full mt-9 text-sm tracking-wide ">
                    <span>
                      <FormattedMessage id="page.home.search" />
                    </span>
                    {/* <FaSearch /> */}
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
    // <div className="App">
    //   <a href="https://www.cluemediator.com">Clue Mediator</a>
    //   <br />
    //   <br />
    //   Search:{" "}
    //   <input
    //     style={{ marginLeft: 5 }}
    //     type="text"
    //     placeholder="Type to search..."
    //     value={searchText}
    //     onChange={(e) => handleChange(e.target.value)}
    //   />
    //   <button onClick={() => alert("search")}>Search</button>
    //   <div className="box-container">
    //     {data.map((d, i) => {
    //       return (
    //         <div key={i} className="box" style={{ backgroundColor: d.color }}>
    //           <b>Name: </b>
    //           {d.name}
    //           <br />
    //           <b>Year: </b>
    //           {d.year}
    //           <br />
    //           <b>Color: </b>
    //           {d.color}
    //           <br />
    //           <b>Pantone value: </b>
    //           {d.pantone_value}
    //         </div>
    //       );
    //     })}
    //     <div className="clearboth"></div>
    //     {data.length === 0 && <span>No records found to display!</span>}
    //   </div>
    // </div>
  );
};

export default Search;
