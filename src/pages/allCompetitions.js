import { useEffect, useState } from "react";
import Section from "../layouts/Section";
import Card from "../components/cards";
import useHttp from "../hooks/use-http";
import { Circles } from "react-loader-spinner";
import LoaderState from "../components/LoaderState";
import Navbar from "../components/navbar";

const AllCompetitions = (props) => {
  const [allCompetitions, setAllCompetition] = useState([]);
  const { isError, isLoading, sendRequest } = useHttp();

  useEffect(() => {
    const apiKey = "ec144945fa844a478747716a258703be";
    const url =
      "http://api.football-data.org/v2/competitions?areas=2077&plan=TIER_ONE";

    const applyData = (data) => {
      setAllCompetition(data.competitions);
      console.log(data.competitions);
    };

    const responseConfig = {
      url: url,
      headers: {
        "X-Auth-Token": apiKey,
      },
    };

    sendRequest(responseConfig, applyData);
  }, [sendRequest]);

  return (
    <Section>
      <Navbar />
      <div>
        {isLoading && (
          <LoaderState>
            <Circles
              height="100"
              width="100"
              color="grey"
              ariaLabel="loading"
            />
          </LoaderState>
        )}
        {isError && <LoaderState>{isError}</LoaderState>}

        {allCompetitions.length > 0 && <Card allData={allCompetitions} />}
      </div>
    </Section>
  );
};

export default AllCompetitions;
