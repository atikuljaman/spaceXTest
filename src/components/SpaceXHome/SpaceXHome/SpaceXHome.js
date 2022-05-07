import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./SpaceXHome.css";

const SpaceXHome = ({ setYear }) => {
  return (
    <>
      <h2 className="title">SpaceX Launch Programs</h2>
      <div className="container">
        <div className="filter-container">
          <h3 className="filter-heading">Filters</h3>
          <h4 className="filter-title">Launch Year</h4>
          <hr className="title-hr" />
          <div className="btns-container">
            <div className="btn-container">
              <NavLink to="launch-year" onClick={() => setYear("2006")}>
                <button className="launch-year-btn">2006</button>
              </NavLink>
              <NavLink to="launch-year" onClick={() => setYear("2007")}>
                <button className="launch-year-btn">2007</button>
              </NavLink>
            </div>
            <div className="btn-container">
              <NavLink to="launch-year" onClick={() => setYear("2008")}>
                <button className="launch-year-btn">2008</button>
              </NavLink>
              <NavLink to="launch-year" onClick={() => setYear("2009")}>
                <button className="launch-year-btn">2009</button>
              </NavLink>
            </div>
            <div className="btn-container">
              <NavLink to="launch-year" onClick={() => setYear("2010")}>
                <button className="launch-year-btn">2010</button>
              </NavLink>
              <NavLink to="launch-year" onClick={() => setYear("2011")}>
                <button className="launch-year-btn">2011</button>
              </NavLink>
            </div>
            <div className="btn-container">
              <NavLink to="launch-year" onClick={() => setYear("2012")}>
                <button className="launch-year-btn">2012</button>
              </NavLink>
              <NavLink to="launch-year" onClick={() => setYear("2013")}>
                <button className="launch-year-btn">2013</button>
              </NavLink>
            </div>
            <div className="btn-container">
              <NavLink to="launch-year" onClick={() => setYear("2014")}>
                <button className="launch-year-btn">2014</button>
              </NavLink>
              <NavLink to="launch-year" onClick={() => setYear("2015")}>
                <button className="launch-year-btn">2015</button>
              </NavLink>
            </div>
            <div className="btn-container">
              <NavLink to="launch-year" onClick={() => setYear("2016")}>
                <button className="launch-year-btn">2016</button>
              </NavLink>
              <NavLink to="launch-year" onClick={() => setYear("2017")}>
                <button className="launch-year-btn">2017</button>
              </NavLink>
            </div>
            <div className="btn-container">
              <NavLink to="launch-year" onClick={() => setYear("2018")}>
                <button className="launch-year-btn">2018</button>
              </NavLink>
              <NavLink to="launch-year" onClick={() => setYear("2019")}>
                <button className="launch-year-btn">2019</button>
              </NavLink>
            </div>
            <div className="btn-container">
              <NavLink to="launch-year" onClick={() => setYear("2020")}>
                <button className="launch-year-btn">2020</button>
              </NavLink>
            </div>
          </div>

          <h4 className="filter-title">Successful Launch</h4>
          <hr className="title-hr" />
          <div className="btn-container">
            <NavLink to="successful-launch">
              <button className="launch-year-btn">True</button>
            </NavLink>
            <NavLink to="unsuccessful-launch">
              <button className="launch-year-btn">False</button>
            </NavLink>
          </div>
          <h4 className="filter-title">Successful Landing</h4>
          <hr className="title-hr" />
          <div className="btn-container">
            <NavLink to="successful-land">
              <button className="launch-year-btn">True</button>
            </NavLink>
            <NavLink to="unsuccessful-land">
              <button className="launch-year-btn">False</button>
            </NavLink>
          </div>
        </div>
        <div className="cards-container">
          <Outlet />
        </div>
      </div>
      <footer>
        <h3>Developed by: Atikul Jaman</h3>
      </footer>
    </>
  );
};

export default SpaceXHome;
