import React from "react";
import { useState, useEffect } from "react";
import Spinner from "../../Spinner/Spinner";

const UnsuccessfulLand = () => {
  const [unsuccessfulLand, setUnsuccessfulLand] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=false"
    )
      .then((res) => res.json())
      .then((data) => setUnsuccessfulLand(data));
  }, []);

  return (
    <div className="card-container">
      {unsuccessfulLand.length === 0 ? (
        <div className="spinner-container">
          <Spinner />
        </div>
      ) : (
        unsuccessfulLand?.map((data) => (
          <div key={data?.flight_number} className="card">
            <div className="card-img-container">
              <img
                className="card-img"
                src={data?.links?.mission_patch_small}
                alt=""
              />
            </div>
            <h4 className="mission-name">
              {data?.mission_name} #{data?.flight_number}
            </h4>
            <h4 className="mission-id">
              Mission Ids:{" "}
              {data?.mission_id.length === 0 ? (
                <ul>
                  <li>No ID Found</li>
                </ul>
              ) : (
                data?.mission_id.map((id) => (
                  <ul>
                    <li key={id}>{id}</li>
                  </ul>
                ))
              )}
            </h4>
            <p className="launch-year">
              Launch Year: <span>{data?.launch_year}</span>
            </p>
            <p className="successful-launch">
              Successful Launch:{" "}
              <span>{(data?.launch_success).toString()}</span>
            </p>
            <p className="successful-landing">
              {/* COULDN'T FIND THE launch_landing DATA */}
              Successful Landing: <span>Null</span>
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default UnsuccessfulLand;
