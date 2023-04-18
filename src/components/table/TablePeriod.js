import { v4 as uuidv4 } from "uuid";
import tableStyles from "./Table.module.css";

function TablePeriod({ periodForecast, periodHeaders }) {
  return (
    <table className={tableStyles.table}>
      <thead>
        <tr>
          {periodHeaders.map((item) => {
              return <th>{item}</th>
            })}
        </tr>
      </thead>
      <tbody>
        {periodForecast &&
          periodForecast.map((periodForecast) => (
            <tr key={uuidv4()}>
              {Object.keys(periodForecast).map((item, i) => (
                <td key={i}>{periodForecast[item]}</td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default TablePeriod;
