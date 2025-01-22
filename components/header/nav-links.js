import React, { useContext } from "react";
import Link from "next/link";
import { SearchContext } from "../../context/search-context";

const NavLinks = ({ extraClassName }) => {
  const styleObj = {
    backgroundColor: "#F26532",
  };

  const { searchStatus, updateSearchStatus } = useContext(SearchContext);
  const handleSearchClick = (e) => {
    e.preventDefault();
    updateSearchStatus(!searchStatus);
  };

  const handleDropdownStatus = (e) => {
    let clickedItem = e.currentTarget.parentNode;
    clickedItem.querySelector(".dropdown-list").classList.toggle("show");
  };
  return (
    <ul className={`main-menu__list ${extraClassName}`}>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>

      <li>
        <Link href="/what-we-do">
          <a>What We Do</a>
        </Link>
      </li>

      <li className="dropdown">
        <Link href="/#">
          <>
            <a>Who We Are</a>
            <button
              aria-label="dropdown toggler"
              onClick={handleDropdownStatus}
            >
              <i className="fa fa-angle-down"></i>
            </button>
          </>
        </Link>
        <ul className="dropdown-list">
          <li>
            <Link href="/meet-our-staff">
              <a style={styleObj}>Meet Our Staff</a>
            </Link>
          </li>
          <li>
            <Link href="/meet-our-committee">
              <a style={styleObj}>Meet Our Committee</a>
            </Link>
          </li>
        </ul>
      </li>

      <li>
        <Link href="/useful-links">
          <a>Useful Links</a>
        </Link>
      </li>

      <li>
        <Link href="/volunteers">
          <a>Volunteers</a>
        </Link>
      </li>

      <li>
        <Link href="/reports">
          <a>Reports</a>
        </Link>
      </li>

      <li>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
