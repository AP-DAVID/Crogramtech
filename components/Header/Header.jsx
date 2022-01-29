import React from "react";
import Link from "next/link";
import PagesDropdown from "../Dropdowns/PagesDropdown";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBullhorn, faBars } from "@fortawesome/free-solid-svg-icons";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";
export default function Header(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 absolute z-50 w-full bg-gray-900 sm:bg-transparent flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="flex space-x-2">
              <Link href="#">
                <a
                  className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                  href="#pablo"
                >
                  Crogam
                </a>
              </Link>

              <Link href="#gamex">
                <a
                  className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                  href="#pablo"
                >
                 Gamex
                </a>
              </Link>

              <Link href="#musco">
                <a
                  className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                  href="#musco"
                >
                 Musco
                </a>
              </Link>

              <Link href="#code">
                <a
                  className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                  href="#musco"
                >
                 Code2hero
                </a>
              </Link>

            </div>

            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon icon={faBars} className="text-white "/>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-slate-900 lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                {/* <PagesDropdown /> */}
              </li>
              <li className="flex items-center">
                <FacebookShareButton
                  url={"https://umisexample.vercel.app/"}
                  quote={"Crogam, the world awaits you"}
                  hashtag={"#technology"}
                  description={"Crogam"}
                  className="Demo__some-network__share-button ml-4 mt-2 mb-2"
                >
                  <FacebookIcon size={32} round /> 
                
                </FacebookShareButton>
              </li>

              <li className="flex items-center">
                <div className="mr-4 mt-2">
                  <TwitterShareButton
                    title={"Crogam"}
                    url={"https://umisexample.vercel.app/"}
                    hashtags={["crogam", "technology", "programming"]}
                    className="ml-4 mb-2"
                  >
                    <TwitterIcon size={32} round />
               
                  </TwitterShareButton>
                </div>
              </li>


              <li className="flex items-center px-5">
                 <Link href="#sws">
                  <a
                    className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                    href="#sws"
                  >
                    SMS
                  </a>
                </Link>
              </li>

              <li className="flex items-center px-5">
                 <Link href="#contact">
                  <a
                    className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                    href="#contact"
                  >
                    Contact us
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
