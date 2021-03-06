import React from "react";
// React Router DOM
import { Link } from "react-router-dom";
// Sweetalert 2
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const AppNavbar = ({ account }) => {
  const Alert = withReactContent(Swal);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    Alert.fire({
      icon: "success",
      title: "copied to clipboard",
    });
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        aria-label="Fifth navbar example"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#"></a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample05"
            aria-controls="navbarsExample05"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample05">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/create"}>
                  Create
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to={"/purchases"}>
                  Purchases
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/items-list"}>
                  Lists
                </Link>
              </li>
            </ul>
            <span
              onClick={() => copyToClipboard(account)}
              className="text-white"
            >
              {account}
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AppNavbar;
