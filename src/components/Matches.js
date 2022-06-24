import { useEffect, useState } from "react";
import LoaderState from "./LoaderState";
import useHttp from "../hooks/use-http";
import { Circles } from "react-loader-spinner";
import classes from "./cards.module.css";

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
              console.log(data.matches)
              setAllData(data.matches)
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
      
  return (
    <div className={classes.cardBody}>
    {allData.map((fixture)=>
      <div className={classes.column}>
        <div className={classes.card}>
        <div className={classes.card2}>
          <div>{fixture.homeTeam.name}</div>
          <div>VS</div>
          <div>{fixture.awayTeam.name}</div>
        </div>
          <div>
            time
          </div>
        </div>
      </div>
    )}
    </div>
  );
};

export default Matches;
