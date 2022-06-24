import { useEffect, useState } from "react";
import LoaderState from "./LoaderState";
import useHttp from "../hooks/use-http";
import { Circles } from "react-loader-spinner";
import classes from "./cards.module.css";

const Matches = (props) => {
    const [allData, setAllData] = useState([]);
    const [checkMatches, setcheckMatches] = useState(false);
    const { isError, isLoading, sendRequest } = useHttp();

    useEffect(() => {
        const apiKey = "ec144945fa844a478747716a258703be";
        const url = `http://api.football-data.org/v2/competitions/${props.id}`;
        
        const applyData = (data) => {
            return data;
        };
        
        const responseConfig = {
            url: url,
            headers: {
                "X-Auth-Token": apiKey,
            },
        };
        
        sendRequest(responseConfig, applyData);
        
        const {newData} = applyData()

        const currentMatchday = newData?.currentSeason?.currentMatchday;
        const startDate = newData?.currentSeason?.startDate.split("-")[0];

        const responseConfig2 = {
            url: `https://api.football-data.org/v2/competitions/${props.id}/matches?season=${startDate}&matchday=${currentMatchday}`,
            headers: {
              "X-Auth-Token": "ec144945fa844a478747716a258703be",
            },
          };

          const applyData2 = (data) => {
            setAllData(data.matches)
        };

        sendRequest(responseConfig2, applyData2);

      }, [sendRequest]);

  return (
    <div className={classes.cardBody}>
      <div className={classes.column}>
        <div className={classes.card}>

        </div>
      </div>
    </div>
  );
};

export default Matches;
