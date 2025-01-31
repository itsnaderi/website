/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../../Split";
import Link from "next/link";
import appData from "../../../data/app.json";
import handleFullScreenNavbar from "../../../common/handleFullScreenNavbar";
import CurrencyWidget from "../../Currency-widget";

const NavbarFullMenu = ({ theme, lr }) => {
  React.useEffect(() => {
    handleFullScreenNavbar();
  }, []);
  return (
    <>
      <div
        id="navi"
        className={`topnav ${theme ? (theme === "light" ? "light" : "") : ""}`}
      >
        <div className="container-fluid">
          <div className="logo">
            <Link href="/">
              <a>
                {theme ? (
                  theme === "light" ? (
                    <img src={`${appData.darkLogo}`} alt="logo" />
                  ) : (
                    <img src={`${appData.lightLogo}`} alt="logo" />
                  )
                ) : (
                  <img src={`${appData.lightLogo}`} alt="logo" />
                )}
              </a>
            </Link>
          </div>
          <div className="menu-icon">
            <span className="icon">
              <i></i>
              <i></i>
            </span>
            <Split>
              <span className="text" data-splitting style={{ paddingTop: '4px' }}>
                <span className="menu-text">Menu</span>
              </span>
            </Split>
          </div>
        </div>
      </div>

      <div className="hamenu">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-6">
              <div className="menu-links">
                <ul className="main-menu">
                  <li>
                    <div className="o-hidden">
                      <Link href="/">
                        <a className="link">
                          <span className="nm">01.</span>Home
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <Link href="/#about">
                        <a className="link">
                          <span className="nm">02.</span>What is LTO Network?
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <Link href="https://docs.ltonetwork.com">
                        <a className="link">
                          <span className="nm">03.</span>HowTo &amp; Docs
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <Link href="/news">
                        <a className="link">
                          <span className="nm">04.</span>News
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <Link href="/partnerships">
                        <a className="link">
                          <span className="nm">05.</span>Partnerships & Projects
                        </a>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="cont-info">
                <div className="item">
                  <CurrencyWidget />
                </div>
                <div className="item">
                  <h6>Telegram</h6>
                  <p><a href="https://t.me/ltonetwork">@ltonetwork</a></p>
                </div>
                <div className="item">
                  <h6>Twitter</h6>
                  <p><a href="https://twitter.com/theltonetwork">@TheLTONetwork</a></p>
                </div>
                <div className="item social-icon">
                  <a className="icon" href="https://www.linkedin.com/company/ltonetwork/">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a className="icon" href="https://github.com/ltonetwork">
                    <i className="fab fa-github"></i>
                  </a>
                  <a className="icon" href="https://www.youtube.com/channel/UCaHcF-xterKYTKSpY4xgKiw">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a className="icon" href="https://reddit.com/r/LTONetwork">
                    <i className="fab fa-reddit"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarFullMenu;
