import { useEffect, useState } from "react";
import LoaderState from "./LoaderState";
import useHttp from "../hooks/use-http";
import { Circles } from "react-loader-spinner";
import classes from "./cards.module.css";
import home from "../assets/home-team.png";
import away from "../assets/visitor-team.png";

const Matches = (props) => {
  const [allData, setAllData] = useState([]);
  const { isError, isLoading, sendRequest } = useHttp();

  useEffect(() => {
    const apiKey = "ec144945fa844a478747716a258703be";
    const url = `http://api.football-data.org/v2/competitions/${props.id}`;

    const applyData = (data) => {
      const currentMatchday = data?.currentSeason?.currentMatchday;
      const startDate = data?.currentSeason?.startDate.split("-")[0];

      const responseConfig2 = {
        url: `https://api.football-data.org/v2/competitions/${props.id}/matches?season=${startDate}&matchday=${currentMatchday}`,
        headers: {
          "X-Auth-Token": "ec144945fa844a478747716a258703be",
        },
      };

      const applyData2 = (data) => {
        console.log(data.matches);
        setAllData(data.matches);
      };

      sendRequest(responseConfig2, applyData2);
    };

    const responseConfig = {
      url: url,
      headers: {
        "X-Auth-Token": apiKey,
      },
    };

    sendRequest(responseConfig, applyData);
  }, [sendRequest, props.id]);

  const getDate = (utctime) => {
    const date_arr = utctime.split("T")[0].split("-");
    return `${date_arr[1]}/${date_arr[2]}`;
  };

  const getTime = (utctime) => {
    const date_arr = utctime.split("T")[1].split(":");
    return `${date_arr[0]}:${date_arr[1]}`;
  };

  const card = `${classes.card} ${classes.card2}`;
  const text = `${classes.matchimg} "text-sm"`;

  return (
    <div className={classes.cardBody}>
      {allData.map((fixture) => (
        <div className={classes.column} key={fixture.id}>
          <div className={card}>
            <div>
              <div className={classes.innercard}>
                <div className={classes.matchimg}>
                  <img src={home} width="20px" height="20px" />
                </div>
                <div className={text}>{fixture.homeTeam.name}</div>
              </div>
              <div className={classes.innercard}>
                <div className={classes.matchimg}>
                  <img src={away} width="20px" height="20px" />
                </div>
                <div className={text}>{fixture.awayTeam.name}</div>
              </div>
            </div>

            <div className={classes.innercardscore}>
              <div>
                <div
                  className={`${
                    fixture.score.fullTime.homeTeam >
                    fixture.score.fullTime.awayTeam
                      ? classes.textw
                      : classes.textl
                  } ${classes.matchimg}`}
                >
                  {fixture.score.fullTime.homeTeam}
                </div>
              </div>
              <div>
                <div
                  className={`${
                    fixture.score.fullTime.awayTeam >
                    fixture.score.fullTime.homeTeam
                      ? classes.textw
                      : classes.textl
                  } ${classes.matchimg}`}
                >
                  {fixture.score.fullTime.awayTeam}
                </div>
              </div>
            </div>

            <div className="mr-5 text-gray-600 text-center pl-2 border-l-2 border-gray-600">
              <h6>FT</h6>
              <p>{getDate(fixture.utcDate)}</p>
              <p>{getTime(fixture.utcDate)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Matches;
