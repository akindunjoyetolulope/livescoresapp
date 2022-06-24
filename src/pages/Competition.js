import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react'
import useHttp from "../hooks/use-http";
import Section from "../layouts/Section";
import Navbar from "../components/navbar";
import Standing from "../components/Standing";
import Matches from "../components/Matches";

const Competition = (props) => {
  const { id } = useParams();
  // const location = useLocation();

  const [allData, setAllData] = useState([]);
  const [checkTable, setcheckTable] = useState(false);
  const { isError, isLoading, sendRequest } = useHttp();

  useEffect(() => {
    const apiKey = "ec144945fa844a478747716a258703be";
    const url = `http://api.football-data.org/v2/competitions/${id}/standings?standingType=TOTAL`;

    const applyData = (data) => {
      if (data.standings[0].table.length > 0) {
        setAllData(data.standings[0].table);
      } else {
        setcheckTable(true);
      }
      console.log(data.standings[0].table);
    };

    const responseConfig = {
      url: url,
      headers: {
        "X-Auth-Token": apiKey,
      },
    };

    sendRequest(responseConfig, applyData);
  }, [sendRequest, id]);

  return (
    <Section>
      <Navbar />
      <Standing
        id={id}
        allData={allData}
        checkTable={checkTable}
        isLoading={isLoading}
        isError={isError}
      />
      <Matches />
    </Section>
  );
};

export default Competition;
