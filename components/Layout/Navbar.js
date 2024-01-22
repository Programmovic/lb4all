"use client";

import React, { useState } from "react";
import TopPanel from "./TopPanel";
import TopHeader from "./TopHeader";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

const Navbar = () => {
  const currentRoute = usePathname();
  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  // Search Modal
  const [isActiveSearchModal, setActiveSearchModal] = useState("false");
  const handleToggleSearchModal = () => {
    setActiveSearchModal(!isActiveSearchModal);
  };

  // Cart Modal
  const [isActiveCartModal, setActiveCartModal] = useState("false");
  const handleToggleCartModal = () => {
    setActiveCartModal(!isActiveCartModal);
  };
  const { theme, setTheme } = useTheme();
  return (
    <>
      <TopPanel />

      <TopHeader />

      <div id="navbar" className="navbar-area">
        <div id="navbar" className="novine-nav">
          <div className="container position-relative">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link href="/" className="navbar-brand">
                <img src={theme === 'light' ? `/images/LB4ALL LOGO-04 (1).png` : `/images/white-logo.png`} alt="logo" className="lb_logo" />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item relative">
                    <Link
                      href="#"
                      className="nav-link active"
                      onClick={(e) => e.preventDefault()}
                    >
                      Home <i className="fas fa-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/"
                          className={`nav-link ${currentRoute === "/" ? "active" : "non-active"
                            }`}
                        >
                          Home One
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/shop-style-two/"
                          className={`nav-link ${currentRoute === "/shop-style-two/"
                            ? "active"
                            : "non-active"
                            }`}
                        >
                          Home Two
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/shop-style-three/"
                          className={`nav-link ${currentRoute === "/shop-style-three/"
                            ? "active"
                            : "non-active"
                            }`}
                        >
                          Home Three
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/shop-style-four/"
                          className={`nav-link ${currentRoute === "/shop-style-four/"
                            ? "active"
                            : "non-active"
                            }`}
                        >
                          Home Four
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/shop-style-five/"
                          className={`nav-link ${currentRoute === "/shop-style-five/"
                            ? "active"
                            : "non-active"
                            }`}
                        >
                          Home Five
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/shop-style-six/"
                          className={`nav-link ${currentRoute === "/shop-style-six/"
                            ? "active"
                            : "non-active"
                            }`}
                        >
                          Home Six
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/shop-style-seven/"
                          className={`nav-link ${currentRoute === "/shop-style-seven/"
                            ? "active"
                            : "non-active"
                            }`}
                        >
                          Home Seven
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/shop-style-eight/"
                          className={`nav-link ${currentRoute === "/shop-style-eight/"
                            ? "active"
                            : "non-active"
                            }`}
                        >
                          Home Eight
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/shop-style-nine/"
                          className={`nav-link ${currentRoute === "/shop-style-nine/"
                            ? "active"
                            : "non-active"
                            }`}
                        >
                          Home Nine
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/shop-style-ten/"
                          className={`nav-link ${currentRoute === "/shop-style-ten/"
                            ? "active"
                            : "non-active"
                            }`}
                        >
                          Home Ten
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/shop-style-eleven"
                          className={`nav-link ${currentRoute === "/shop-style-eleven/"
                            ? "active"
                            : "non-active"
                            }`}
                        >
                          Home Eleven
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/covid-19/"
                          className={`nav-link ${currentRoute === "/covid-19/"
                            ? "active"
                            : "non-active"
                            }`}
                        >
                          Covid-19
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/grocery/"
                          className={`nav-link ${currentRoute === "/grocery/"
                            ? "active"
                            : "non-active"
                            }`}
                        >
                          Grocery
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/electronics/"
                          className={`nav-link ${currentRoute === "/electronics/"
                            ? "active"
                            : "non-active"
                            }`}
                        >
                          Electronics
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/furniture/"
                          className={`nav-link ${currentRoute === "/furniture/"
                            ? "active"
                            : "non-active"
                            }`}
                        >
                          Furniture
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item megamenu">
                    <Link
                      href="#"
                      className="nav-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Shop <i className="fas fa-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <div className="container">
                          <div className="row">
                            <div className="col">
                              <h6 className="submenu-title">
                                Collection Layouts
                              </h6>

                              <ul className="megamenu-submenu">
                                <li>
                                  <Link
                                    href="/collections-style-one/"
                                    className={`nav-link ${currentRoute === "/collections-style-one/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Collections Type 1
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/collections-style-two/"
                                    className={`nav-link ${currentRoute === "/collections-style-two/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Collections Type 2
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/"
                                    className={`nav-link ${currentRoute === "/products/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Products
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/three-grid/"
                                    className={`nav-link ${currentRoute === "/products/three-grid/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Products Three Grid
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/four-grid/"
                                    className={`nav-link ${currentRoute === "/products/four-grid/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Products Four Grid
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/list-view/"
                                    className={`nav-link ${currentRoute === "/products/list-view/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Products List View
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/full-width/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/full-width/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    With Sidebar Full Width
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="col">
                              <h6 className="submenu-title">Other Pages</h6>

                              <ul className="megamenu-submenu">
                                <li>
                                  <Link
                                    href="/cart/"
                                    className={`nav-link ${currentRoute === "/cart/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Cart
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/checkout/"
                                    className={`nav-link ${currentRoute === "/checkout/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Checkout
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/compare/"
                                    className={`nav-link ${currentRoute === "/compare/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Compare
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/login/"
                                    className={`nav-link ${currentRoute === "/login/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Login
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/signup/"
                                    className={`nav-link ${currentRoute === "/signup/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Signup
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/customer-service/"
                                    className={`nav-link ${currentRoute === "/customer-service/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Customer Service
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="col">
                              <h6 className="submenu-title">Top Brands</h6>

                              <ul className="megamenu-submenu top-brands">
                                <li>
                                  <Link href="#">
                                    <img
                                      src="/images/partner1.png"
                                      alt="image"
                                    />
                                  </Link>
                                </li>

                                <li>
                                  <Link href="#">
                                    <img
                                      src="/images/partner2.png"
                                      alt="image"
                                    />
                                  </Link>
                                </li>

                                <li>
                                  <Link href="#">
                                    <img
                                      src="/images/partner3.png"
                                      alt="image"
                                    />
                                  </Link>
                                </li>

                                <li>
                                  <Link href="#">
                                    <img
                                      src="/images/partner4.png"
                                      alt="image"
                                    />
                                  </Link>
                                </li>

                                <li>
                                  <Link href="#">
                                    <img
                                      src="/images/partner5.png"
                                      alt="image"
                                    />
                                  </Link>
                                </li>

                                <li>
                                  <Link href="#">
                                    <img
                                      src="/images/partner6.png"
                                      alt="image"
                                    />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item megamenu">
                    <Link
                      href="#"
                      className="nav-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Women's <i className="fas fa-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <div className="container">
                          <div className="row">
                            <div className="col">
                              <h6 className="submenu-title">Clothing</h6>

                              <ul className="megamenu-submenu">
                                <li>
                                  <Link
                                    href="/products/three-grid/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/three-grid/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Coats
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/full-width/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/full-width/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Jackets
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/"
                                    className={`nav-link ${currentRoute === "/products/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Blazers
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Dresses
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/three-grid/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/three-grid/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Trousers
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Jeans
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Sweatshirts
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/full-width/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/full-width/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    T-Shirts
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="col">
                              <h6 className="submenu-title">Shoes</h6>

                              <ul className="megamenu-submenu">
                                <li>
                                  <Link
                                    href="/products/three-grid/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/three-grid/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Trainers
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/"
                                    className={`nav-link ${currentRoute === "/products/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Boots
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Heels
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/three-grid/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/three-grid/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Flats
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Heeled Sandals
                                  </Link>
                                </li>

                                <li>
                                  <Link href="/products">
                                    Platforms
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="col">
                              <h6 className="submenu-title">Accessories</h6>

                              <ul className="megamenu-submenu">
                                <li>
                                  <Link
                                    href="/products/"
                                    className={`nav-link ${currentRoute === "/products/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Bags
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/three-grid/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/three-grid/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Glasses
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Jewellery
                                  </Link>
                                </li>

                                <li>
                                  <Link href="/products">
                                    iPhone Cases
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/full-width/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/full-width/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Gadgets
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/full-width/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/full-width/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Hats & Beanie
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/three-grid/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/three-grid/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Purses
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="col">
                              <ul className="megamenu-submenu">
                                <li>
                                  <div className="aside-trending-products">
                                    <img
                                      src="/images/category-products-img2.jpg"
                                      alt="image"
                                    />

                                    <div className="category">
                                      <h4>Top Trending</h4>
                                    </div>

                                    <Link href="#"></Link>
                                  </div>

                                  <div className="aside-trending-products">
                                    <img
                                      src="/images/category-products-img3.jpg"
                                      alt="image"
                                    />

                                    <div className="category">
                                      <h4>Popular Products</h4>
                                    </div>

                                    <Link href="#"></Link>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item megamenu">
                    <Link
                      href="#"
                      className="nav-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Men's <i className="fas fa-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <div className="container">
                          <div className="row">
                            <div className="col">
                              <h6 className="submenu-title">Clothing</h6>

                              <ul className="megamenu-submenu">
                                <li>
                                  <Link
                                    href="/products/"
                                    className={`nav-link ${currentRoute === "/products/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Coats
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Jackets
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/three-grid/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/three-grid/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Jeans
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    T-Shirts
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/full-width/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/full-width/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Sweatshirts
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Knitwear
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/full-width/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/full-width/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Shirts
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="col">
                              <h6 className="submenu-title">Shoes</h6>

                              <ul className="megamenu-submenu">
                                <li>
                                  <Link
                                    href="/products/three-grid/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/three-grid/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Trainers
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/full-width/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/full-width/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Boots
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/"
                                    className={`nav-link ${currentRoute === "/products/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Heels
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Flats
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/three-grid/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/three-grid/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Heeled Sandals
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Sandals
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Platforms
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Heeled Sandals
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="col">
                              <h6 className="submenu-title">Accessories</h6>

                              <ul className="megamenu-submenu">
                                <li>
                                  <Link
                                    href="/products/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Bags
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/"
                                    className={`nav-link ${currentRoute === "/products/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Backpacks
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/three-grid/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/three-grid/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Glasses
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/"
                                    className={`nav-link ${currentRoute === "/products/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Earrings
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/full-width/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/full-width/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    iPhone Cases
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/three-grid/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/three-grid/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Mobile Accessories
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/three-grid/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/three-grid/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Socks
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="col">
                              <ul className="megamenu-submenu">
                                <li>
                                  <div className="aside-trending-products">
                                    <img
                                      src="/images/category-products-img2.jpg"
                                      alt="image"
                                    />

                                    <div className="category">
                                      <h4>Top Trending</h4>
                                    </div>
                                    <Link href="#"></Link>
                                  </div>

                                  <div className="aside-trending-products">
                                    <img
                                      src="/images/category-products-img3.jpg"
                                      alt="image"
                                    />

                                    <div className="category">
                                      <h4>Popular Products</h4>
                                    </div>

                                    <Link href="#"></Link>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item megamenu">
                    <Link
                      href="#"
                      className="nav-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Today's Deals <i className="fas fa-chevron-down"></i>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <div className="container">
                          <div className="row">
                            <div className="col">
                              <h6 className="submenu-title">Clothing</h6>

                              <ul className="megamenu-submenu">
                                <li>
                                  <Link
                                    href="/products/"
                                    className={`nav-link ${currentRoute === "/products/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Coats
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Jackets
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/three-grid/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/three-grid/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Jeans
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    T-Shirts
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/full-width/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/full-width/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Sweatshirts
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Knitwear
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/full-width/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/full-width/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Shirts
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="col">
                              <h6 className="submenu-title">Shoes</h6>

                              <ul className="megamenu-submenu">
                                <li>
                                  <Link
                                    href="/products/three-grid/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/three-grid/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Trainers
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/full-width/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/full-width/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Boots
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/"
                                    className={`nav-link ${currentRoute === "/products/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Heels
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Flats
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/three-grid/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/three-grid/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Heeled Sandals
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Sandals
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Platforms
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Heeled Sandals
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="col">
                              <h6 className="submenu-title">Accessories</h6>

                              <ul className="megamenu-submenu">
                                <li>
                                  <Link
                                    href="/products/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Bags
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/"
                                    className={`nav-link ${currentRoute === "/products/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Backpacks
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/three-grid/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/three-grid/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Glasses
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/"
                                    className={`nav-link ${currentRoute === "/products/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Earrings
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/full-width/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/full-width/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    iPhone Cases
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/three-grid/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/three-grid/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Mobile Accessories
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products/three-grid/"
                                    className={`nav-link ${currentRoute ===
                                      "/products/three-grid/"
                                      ? "active"
                                      : "non-active"
                                      }`}
                                  >
                                    Socks
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="col">
                              <ul className="megamenu-submenu">
                                <li>
                                  <div className="aside-trending-products">
                                    <img
                                      src="/images/category-products-img2.jpg"
                                      alt="image"
                                    />

                                    <div className="category">
                                      <h4>Top Trending</h4>
                                    </div>
                                    <Link href="#"></Link>
                                  </div>

                                  <div className="aside-trending-products">
                                    <img
                                      src="/images/category-products-img3.jpg"
                                      alt="image"
                                    />

                                    <div className="category">
                                      <h4>Popular Products</h4>
                                    </div>

                                    <Link href="#"></Link>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item p-relative">
                    <Link
                      href="#"
                      className="nav-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Pages <i className="fas fa-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/about/"
                          className={`nav-link ${currentRoute === "/about/" ? "active" : "non-active"
                            }`}
                        >
                          About Us
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/sizing-guide/"
                          className={`nav-link ${currentRoute === "/sizing-guide/"
                            ? "active"
                            : "non-active"
                            }`}
                        >
                          Sizing Guide
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/gallery/"
                          className={`nav-link ${currentRoute === "/gallery/"
                            ? "active"
                            : "non-active"
                            }`}
                        >
                          Gallery
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="#"
                          className="nav-link"
                          onClick={(e) => e.preventDefault()}
                        >
                          Account
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/profile/"
                              className={`nav-link ${currentRoute === "/profile/"
                                ? "active"
                                : "non-active"
                                }`}
                            >
                              Profile
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/login/"
                              className={`nav-link ${currentRoute === "/login/"
                                ? "active"
                                : "non-active"
                                }`}
                            >
                              Login
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/signup/"
                              className={`nav-link ${currentRoute === "/signup/"
                                ? "active"
                                : "non-active"
                                }`}
                            >
                              Signup
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/cart/"
                              className={`nav-link ${currentRoute === "/cart/"
                                ? "active"
                                : "non-active"
                                }`}
                            >
                              Cart
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/cart"
                          className={`nav-link ${currentRoute === "/cart/" ? "active" : "non-active"
                            }`}
                        >
                          Cart
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/checkout/"
                          className={`nav-link ${currentRoute === "/checkout/"
                            ? "active"
                            : "non-active"
                            }`}
                        >
                          Checkout
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/compare/"
                          className={`nav-link ${currentRoute === "/compare/"
                            ? "active"
                            : "non-active"
                            }`}
                        >
                          Compare
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/customer-service/"
                          className={`nav-link ${currentRoute === "/customer-service/"
                            ? "active"
                            : "non-active"
                            }`}
                        >
                          Customer Service
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/login/"
                          className={`nav-link ${currentRoute === "/login/" ? "active" : "non-active"
                            }`}
                        >
                          Login
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/signup/"
                          className={`nav-link ${currentRoute === "/signup/"
                            ? "active"
                            : "non-active"
                            }`}
                        >
                          Signup
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/faq/"
                          className={`nav-link ${currentRoute === "/faq/" ? "active" : "non-active"
                            }`}
                        >
                          FAQs
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/404/"
                          className={`nav-link ${currentRoute === "/404/" ? "active" : "non-active"
                            }`}
                        >
                          Error 404
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/contact-us/"
                          className={`nav-link ${currentRoute === "/contact-us/"
                            ? "active"
                            : "non-active"
                            }`}
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item p-relative">
                    <Link
                      href="#"
                      className="nav-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Blog <i className="fas fa-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/blog/"
                          className={`nav-link ${currentRoute === "/blog/" ? "active" : "non-active"
                            }`}
                        >
                          Blog Grid (3 in Row)
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog2/"
                          className={`nav-link ${currentRoute === "/blog2/" ? "active" : "non-active"
                            }`}
                        >
                          Blog Grid (2 in Row)
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog3/"
                          className={`nav-link ${currentRoute === "/blog3/" ? "active" : "non-active"
                            }`}
                        >
                          Blog Grid (1 in Row)
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog-details/"
                          className={`nav-link ${currentRoute === "/blog-details/"
                            ? "active"
                            : "non-active"
                            }`}
                        >
                          Blog Details
                        </Link>

                        <Link
                          href="/blog-details-two/"
                          className={`nav-link ${currentRoute === "/blog-details-two/"
                            ? "active"
                            : "non-active"
                            }`}
                        >
                          Blog Details Two
                        </Link>

                        <Link
                          href="/blog-details-three/"
                          className={`nav-link ${currentRoute === "/blog-details-three/"
                            ? "active"
                            : "non-active"
                            }`}
                        >
                          Blog Details Three
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="others-option">
                <div className="option-item">
                  <i
                    className="search-btn fas fa-search"
                    onClick={handleToggleSearchModal}
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>

                <div className="option-item">
                  <Link href="/login">Login</Link>
                </div>

                <div className="option-item">
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleToggleCartModal();
                    }}
                  >
                    <i className="fas fa-shopping-bag mr-1"></i> Cart(3)
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Search Form Modal */}
      <div
        className={`search-overlay ${isActiveSearchModal ? "" : "search-overlay-active"
          }`}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>

            <div
              className="search-overlay-close"
              onClick={handleToggleSearchModal}
            >
              <span className="search-overlay-close-line"></span>
              <span className="search-overlay-close-line"></span>
            </div>

            <div className="search-overlay-form">
              <form>
                <input
                  type="text"
                  className="input-search"
                  placeholder="Search here..."
                />
                <button type="submit">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Search Form Modal */}

      {/* Cart Modal */}
      <div
        className={`modal shoppingCartModal fade ${isActiveCartModal ? "" : "show"
          }`}
        style={{}}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={handleToggleCartModal}
            >
              <span aria-hidden="true">&times;</span>
            </button>

            <div className="modal-body">
              <h3>MY CART (3)</h3>

              <div className="product-cart-content">
                <div className="product-cart">
                  <div className="product-image">
                    <img src="/images/img2.jpg" alt="image" />
                  </div>

                  <div className="product-content">
                    <h3>
                      <Link href="#">Belted chino trousers polo</Link>
                    </h3>
                    <span>Blue / XS</span>
                    <div className="product-price">
                      <span>1</span>
                      <span>x</span>
                      <span className="price">$191.00</span>
                    </div>
                  </div>
                </div>

                <div className="product-cart">
                  <div className="product-image">
                    <img src="/images/img3.jpg" alt="image" />
                  </div>

                  <div className="product-content">
                    <h3>
                      <Link href="#">Belted chino trousers polo</Link>
                    </h3>
                    <span>Blue / XS</span>
                    <div className="product-price">
                      <span>1</span>
                      <span>x</span>
                      <span className="price">$191.00</span>
                    </div>
                  </div>
                </div>

                <div className="product-cart">
                  <div className="product-image">
                    <img src="/images/img4.jpg" alt="image" />
                  </div>

                  <div className="product-content">
                    <h3>
                      <Link href="#">Belted chino trousers polo</Link>
                    </h3>
                    <span>Blue / XS</span>
                    <div className="product-price">
                      <span>1</span>
                      <span>x</span>
                      <span className="price">$191.00</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="product-cart-subtotal">
                <span>Subtotal</span>
                <span className="subtotal">$500.00</span>
              </div>

              <div className="product-cart-btn">
                <Link href="#" className="btn btn-primary">
                  Proceed to Checkout
                </Link>
                <Link href="#" className="btn btn-light">
                  View Shopping Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
        <span className="close-modal" onClick={handleToggleCartModal}>
          clone
        </span>
      </div>
      {/* End Cart Modal */}
    </>
  );
};

export default Navbar;
