import React, { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import Link from "next/link";
import { FaQrcode } from "react-icons/fa";
import { FormattedMessage } from "react-intl";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const Navbar = () => {
  const { locales } = useRouter();

  const intl = useIntl();

  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);

  const [theme, setTheme] = useLocalStorage("theme", "business");
  const toggleTheme = () => {
    setTheme(theme === "business" ? "corporate" : "business");
  };
  useEffect(() => {
    const body = document.body;
    body.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a href="#" className="btn btn-ghost normal-case text-xl ">
          <img
            className="w-auto h-8 sm:h-10 md:h-12 "
            src="./newcashlogo.svg"
            alt=""
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li tabIndex={0}>
            <a>
              Parent
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="avatar flex items-center">
          <p className="text-sm sm:text-lg mr-2">ابوذر خفاجی</p>
          <div className="w-6 sm:w-10 mask mask-squircle">
            <img src="/profile.jpeg" />
          </div>
        </div>
      </div>
      {/* <div className="navbar-end">
        <label htmlFor="my-modal-4" className="btn">
          <a className="btn btn-success w-auto h-8 sm:h-10 md:h-12">
            <FaQrcode />
            <p className="ml-2">
              <FormattedMessage id="page.home.login" />
            </p>
          </a>
        </label>
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label
          htmlFor="my-modal-4"
          className="modal cursor-pointer backdrop-blur-lg"
        >
          <label className="modal-box relative">
            <form>
              <div className="form-control m-10">
                <label className="input-group">
                  <span>Phone</span>
                  <input
                    type="number"
                    placeholder="09123456789"
                    className="input input-bordered input-success w-full"
                  />
                </label>
              </div>
              <button
                type="submit"
                className="btn-success h-14 btn-block font-bold"
              >
                login
              </button>
            </form>
          </label>
        </label>
      </div> */}
      <div className="dropdown dropdown-end ">
        <label tabIndex={0} className="btn btn-ghost rounded-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4 text-stone-400"
        >
          <li>
            <Link href="/" locale="en" className="rounded-sm ">
              <span className="fi fi-gb "></span>
              English
            </Link>
          </li>
          <li>
            <Link href="/" locale="ar">
              <span className="fi fi-sa"></span>
              العربیه
            </Link>
          </li>
          <li>
            <Link href="/" locale="fa">
              <span className="fi fi-ir"></span>
              فارسی
            </Link>
          </li>
        </ul>
      </div>

      <label className="swap swap-rotate">
        <input type="checkbox" onChange={toggleTheme} />

        <svg
          className="swap-on fill-current w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
        </svg>

        <svg
          className="swap-off fill-current w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
        </svg>
      </label>
    </div>
  );
};

export default Navbar;
