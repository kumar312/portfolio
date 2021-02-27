import React from "react";
import "./Works.css";

function Works() {
  return (
    <>
      <div className="work">
        <div className="work-heading">
          <h4>Facebook Clone | REACT BASED PROJECT</h4>
          <p className="work-paragraph">
            <li>
              In year – 2021 <br />
              <strong>Description – </strong>I have built a Facebook clone web
              application. I used React.js in front-end and firebase in backend
              to store the data.
            </li>
          </p>
        </div>

        <div className="work-heading">
          <h4>TikTok Clone | REACT BASED PROJECT</h4>
          <p className="work-paragraph">
            <li>
              In year – 2021 <br />
              <strong>Description – </strong> It is a web application which is
              look like tiktok app. I used react.js in front-end and firebase in
              backend.
            </li>
          </p>
        </div>

        <div className="work-heading">
          <h4>WEATHER-INFO | React based Project</h4>
          <p className="work-paragraph">
            <li>
              In year – 2020 <br />
              <strong>Description – </strong> It is a web application which
              gives the weather information of the cities. I used react.js in
              front-end and Node.js to create the API and fetch the data. I used
              openWeathermap API to fetch the data.
            </li>
          </p>
        </div>

        <div className="work-heading">
          <h4>HELPRING 24*7 with points | Major Project</h4>
          <p className="work-paragraph">
            <li>
              In year – 2019 <br />
              <strong>Description – </strong> It’s a website based online
              platform with point system for many local workers and technicians
              and this project based on HTML, CSS and PHP technology.
            </li>
          </p>
        </div>

        <div className="work-heading">
          <h4>HELPRING 24*7 | Minor Project</h4>
          <p className="work-paragraph">
            <li>
              In year – 2018 <br />
              <strong>Description – </strong> It’s a website based online
              platform for many local workers and technicians this project based
              on HTML, CSS and PHP technology.
            </li>
          </p>
        </div>
      </div>
    </>
  );
}

export default Works;
