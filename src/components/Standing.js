import "./standing.css";
import { Circles } from "react-loader-spinner";
import LoaderState from "./LoaderState";

const Standing = (props) => {
//   const [allData, setAllData] = useState([]);
//   const [checkTable, setcheckTable] = useState(false);
//   const { isError, isLoading, sendRequest } = useHttp();

//   useEffect(() => {
//     const apiKey = "ec144945fa844a478747716a258703be";
//     const url = `http://api.football-data.org/v2/competitions/${props.id}/standings?standingType=TOTAL`;

//     const applyData = (data) => {
//       if(data.standings[0].table.length > 0){
//         setAllData(data.standings[0].table);
//       }else{
//         setcheckTable(true)
//       }
//       console.log(data.standings[0].table);
//     };

//     const responseConfig = {
//       url: url,
//       headers: {
//         "X-Auth-Token": apiKey,
//       },
//     };

//     sendRequest(responseConfig, applyData);
//   }, [sendRequest]);

  return (
    <div>
      {props.isLoading && (
        <LoaderState>
          <Circles height="100" width="100" color="grey" ariaLabel="loading" />
        </LoaderState>
      )}
      {props.isError && <LoaderState>{props.isError}</LoaderState>}
      {props.checkTable && <LoaderState>No Competition for now</LoaderState>}
      {props.allData.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Team</th>
              <th>MP</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>GF</th>
              <th>GA</th>
              <th>Pts</th>
            </tr>
          </thead>

          <tbody>
            {props.allData.map((data) => (
              <tr key={data.id}>
                <td>{data.team.name}</td>
                <td>{data.playedGames}</td>
                <td>{data.won}</td>
                <td>{data.draw}</td>
                <td>{data.lost}</td>
                <td>{data.goalsFor}</td>
                <td>{data.goalsAgainst}</td>
                <td>{data.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Standing;
