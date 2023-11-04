import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import palms from "./leaves.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMartiniGlass } from "@fortawesome/free-solid-svg-icons";
import Timer from "./Timer";
import flower from "./flower.png";
import hula from "./hula.png";

function App() {
  return (
    <div
      className="App container-fluid center"
      style={{
        backgroundImage: `url(${palms}) `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        maxWidth: "100%",
        height: "120vh",
        backgroundPosition: "center",
        display: "flex",
      }}
    >
      <div className="container-fluid center">
        <div className="App-header container-md">
          <div className="aloha">Aloha!</div>
          <div className="bodytitle">
            hula on down to celebrate the bride-to-be
            <br /> in all things Hawaiian at
          </div>
          <div className="row pt-3">
            <div className="col-6">
              <img
                className="img-fluid"
                src={`${hula}`}
                style={{
                  alignItems: "stretch",
                  display: "inline-block",
                  position: "relative",
                  top: "-15px",
                  left: "20px",
                  height: "auto",
                }}
              />{" "}
            </div>
            <div className="col-6">
              <header className="title">
                Lisa's <br />
                Last <br />
                Luao
              </header>
            </div>
          </div>
          <div className="details">
            <div className="time">2:00PM Saturday the 2nd of December</div>
            <div className="address" style={{ fontStyle: "normal" }}>
              <a
                target="_blank"
                href="https://maps.app.goo.gl/1dxh8P9i56nQAYHb9"
                rel="noreferrer noopener"
              >
                <FontAwesomeIcon icon={faLocationDot} /> 9 Centaur Street,
                Kallaroo WA 6025
              </a>
            </div>

            <div style={{ marginTop: "10px" }}>
              in line with the honeymoon destination, come dressed in the theme:
              <div className="theme">
                Tropical Hawaiian{" "}
                <span className="flower">
                  <img
                    src={`${flower}`}
                    style={{
                      display: "inline-block",
                      position: "relative",
                      top: "-5px",
                    }}
                    width="30px"
                  />
                </span>
              </div>
            </div>
            <div style={{ fontSize: "12px", marginBottom: "14px" }}>
              {" "}
              BYO alcohol, limited drinks provided
            </div>

            <>
              <Timer deadline="December, 02, 2023" />
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
