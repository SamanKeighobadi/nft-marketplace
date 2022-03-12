import React from "react";
// React Router DOM
import { Link } from "react-router-dom";


const AppNavbar = () => {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-dark bg-dark"
        aria-label="Fifth navbar example"
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">

          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample05"
            aria-controls="navbarsExample05"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarsExample05">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link " to={"/"}>
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to={"/create"}>Create</Link>
              </li>
              <li class="nav-item">
                
                <Link class="nav-link " to={"/purchases"}>Purchases</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to={'/items-list'}>
                      Lists
                  </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AppNavbar;
