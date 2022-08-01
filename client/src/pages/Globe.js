import React, { useState, useEffect } from "react";
import ReactGlobe from "react-globe";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import defaultMarkers from "../../src/markers";
import Info from "../components/Info";
import News from "../components/News";
import Search from "../components/Search";
import CDC from "../components/CDC";
import API from "../utils/API";
import { SolarSystemLoading } from "react-loadingg";
import AnimateOnChange from 'react-animate-on-change'

function markerTooltipRenderer(marker) {
  return `Country: ${marker.country}`;
}

function Globe() {
  const markersData = [];

  const options = {
    markerTooltipRenderer,
    ambientLightColor: "red",
    globeGlowColor: "blue",
    cameraDistanceRadiusScale: 4,
    markerRadiusScaleRange: [0.01, 0.03],
  };

  const [loading, setLoading] = useState(false);

  const [markers, setMarkers] = useState([]);

  const [info, setInfo] = useState({
    country: "",
    infected: 0,
    deaths: 0,
    recoveries: 0,
    updated: "",
  });

  const [animationSequence, setAnimationSequence] = useState();
  let animations = [];
  useEffect(() => {
    loadData()
    getNews()
    getMongoDB()
  }, [])

  function formatCountryValues(covidCountryValue, countryName, covidColor) {
    if (countryName) {
      for (var i = 0; i < defaultMarkers.length; i++) {
        if (defaultMarkers[i].country === countryName) {
          const updatedMarkerObj = {
            id: defaultMarkers[i].id,
            country: defaultMarkers[i].country,
            coordinates: defaultMarkers[i].coordinates,
            color: covidColor,
            value: covidCountryValue,
          };
          markersData.push(updatedMarkerObj);
        }
      }
    }
  }

  function loadData() {
    API.getData()
      .then(function (response) {
        const covidData = response.data;
        for (var i = 0; i < covidData.length; i++) {
          if (covidData[i]["Total Cases_text"]) {
            const covidSize = parseFloat(
              covidData[i]["Total Cases_text"].replace(/,/g, "")
            );
            // console.log(covidData[i]["Total Cases_text"])
            if (covidSize > 0 && covidSize < 1000) {
              // console.log("Between 0 and 100")
              const covidCountryValue = 10;
              const covidColor = "#ffffff";
              const countryName = covidData[i].Country_text;
              formatCountryValues(covidCountryValue, countryName, covidColor);
            } else if (covidSize > 1000 && covidSize < 100000) {
              // console.log("Between 100 and 1,000")
              const covidCountryValue = 15;
              const covidColor = "#60bcc4";
              const countryName = covidData[i].Country_text;
              formatCountryValues(covidCountryValue, countryName, covidColor);
            } else if (covidSize > 100000 && covidSize < 1000000) {
              // console.log("Between 1,000 and 10,000")
              const covidCountryValue = 20;
              const covidColor = "#005666";
              const countryName = covidData[i].Country_text;
              formatCountryValues(covidCountryValue, countryName, covidColor);
            } else if (covidSize > 1000000 && covidSize < 10000000) {
              // console.log("Between 10,000 and 100,000")
              const covidCountryValue = 25;
              const covidColor = "#181f4c";
              const countryName = covidData[i].Country_text;
              formatCountryValues(covidCountryValue, countryName, covidColor);
            } else if (covidSize > 10000000) {
              // console.log("Between 100,000 and 100,000")
              const covidCountryValue = 50;
              const covidColor = "#8e0000";
              const countryName = covidData[i].Country_text;
              formatCountryValues(covidCountryValue, countryName, covidColor);
            }
          }
          setInfo({
            country: covidData[0].Country_text,
            infected: covidData[0]["Total Cases_text"],
            deaths: covidData[0]["Total Deaths_text"],
            recoveries: covidData[0]["Total Recovered_text"],
            updated: covidData[0]["Last Update"],
          });
        }
        setMarkers(markersData);
        setLoading(true);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function onClickMarker(markerObj) {
    API.getData()
      .then(function (response) {
        const covidData = response.data;

        setAnimationSequence("onclickMarker");

        for (var i = 0; i < covidData.length; i++) {
          if (covidData[i].Country_text === markerObj.country) {
            setInfo({
              country: covidData[i].Country_text,
              infected: covidData[i]["Total Cases_text"],
              deaths: covidData[i]["Total Deaths_text"],
              recoveries: covidData[i]["Total Recovered_text"],
              updated: covidData[i]["Last Update"],
            });
          }
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  const [getCovidNews, setGetCovidNews] = useState([]);
  function getNews() {
    API.getNews()
      .then((response) => {
        const newsData = response.data;
        setGetCovidNews(newsData.articles);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function getMongoDB() {
    API.getMarker()
      .then((response) => {
        const data = response.data;
        // console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  switch (animationSequence) {
    case "northAmerica":
      animations = [
        {
          coordinates: [38, -97],
          focusAnimationDuration: 3000,
          focusDistanceRadiusScale: 3,
          focusEasingFunction: ["Linear", "None"],
        },
      ];
      break;
    case "southAmerica":
      animations = [
        {
          coordinates: [-24, -47],
          focusAnimationDuration: 3000,
          focusDistanceRadiusScale: 3,
          focusEasingFunction: ["Linear", "None"],
        },
      ];
      break;
    case "europe":
      animations = [
        {
          coordinates: [54, -2],
          focusAnimationDuration: 3000,
          focusDistanceRadiusScale: 3,
          focusEasingFunction: ["Linear", "None"],
        },
      ];
      break;
    case "africa":
      animations = [
        {
          coordinates: [-1, 15],
          focusAnimationDuration: 3000,
          focusDistanceRadiusScale: 3,
          focusEasingFunction: ["Linear", "None"],
        },
      ];
      break;
    case "asia":
      animations = [
        {
          coordinates: [35, 105],
          focusAnimationDuration: 3000,
          focusDistanceRadiusScale: 3,
          focusEasingFunction: ["Linear", "None"],
        },
      ];
      break;
    case "australia":
      animations = [
        {
          coordinates: [-27, 133],
          focusAnimationDuration: 3000,
          focusDistanceRadiusScale: 3,
          focusEasingFunction: ["Linear", "None"],
        },
      ];
      break;
    case "antartica":
      animations = [
        {
          coordinates: [-70, 0],
          focusAnimationDuration: 3000,
          focusDistanceRadiusScale: 3,
          focusEasingFunction: ["Linear", "None"],
        },
      ];
      break;
    case "onclickMarker":
      animations = [];
      break;
    default:
      // console.log("hello");
  }
  return (
    <div className="container-fluid col-12">
      {loading ? (
        <>
          {markers.length > 0 && (
            <div className="globe globe-container">
              <div className="continents-container">
                <h2
                  className="continent"
                  onClick={() => setAnimationSequence("northAmerica")}
                >
                  North America
                </h2>
                <h2
                  className="continent"
                  onClick={() => setAnimationSequence("southAmerica")}
                >
                  South America
                </h2>
                <h2
                  className="continent"
                  onClick={() => setAnimationSequence("europe")}
                >
                  Europe
                </h2>
                <h2
                  className="continent"
                  onClick={() => setAnimationSequence("africa")}
                >
                  Africa
                </h2>
                <h2
                  className="continent"
                  onClick={() => setAnimationSequence("asia")}
                >
                  Asia
                </h2>
                <h2
                  className="continent"
                  onClick={() => setAnimationSequence("australia")}
                >
                  Australia
                </h2>
                <h2
                  className="continent"
                  onClick={() => setAnimationSequence("antartica")}
                >
                  Antarctica
                </h2>
              </div>

              <ReactGlobe
                markers={markers}
                options={options}
                onClickMarker={onClickMarker}
                animations={animations}
                height="120vh"
                className="react-globe"
              />
              <Info
                country={info.country}
                infected={<AnimateOnChange animationClassName="info-fade" animate={info.infected}>{info.infected}</AnimateOnChange>}
                deaths={<AnimateOnChange animationClassName="info-fade" animate={info.deaths}>{info.deaths}</AnimateOnChange>}
                recoveries={<AnimateOnChange animationClassName="info-fade" animate={info.recoveries}>{info.recoveries}</AnimateOnChange>}
                updated={<AnimateOnChange animationClassName="info-fade" animate={info.updated}>{info.updated}</AnimateOnChange>}
              />

              <Search />

              <div className="news-container col-12">
                <div className="row">
                  {getCovidNews.map((article) => (
                    <News {...article} key={article.title} />
                  ))}
                </div>
              </div>

              <CDC />
            </div>
          )}
        </>
      ) : (
          <div className="loader">
            {" "}
          (
            <SolarSystemLoading color="#8e0000" className="background" />)
          </div>
        )}
    </div>
  );
}
export default Globe;
