import Events from "./Events";

function WeeklyInfo(result) {
  let datesObject = result[Object.keys(result)[0]];
  let datesList = Object.keys(datesObject);
  return (
    <div className="WeeklyInfo">
      {datesList.map((date, key) => {
        let fieldNames = Object.keys(datesObject[date]);
        return (
          <div className="Day" key={key}>
            <h3>{date}</h3>
            <p>
              {fieldNames[0]} : {datesObject[date][fieldNames[0]]["status"]}
            </p>
            <p>
              {fieldNames[1]} : {datesObject[date][fieldNames[1]]["status"]}
            </p>
            <p>
              {fieldNames[2]} : {datesObject[date][fieldNames[2]]["status"]}
            </p>
            <hr></hr>
            <p>Events Near You:</p>
            {datesObject[date]["event"] !== undefined ? (
              <Events events={datesObject[date]["event"]} key={key} />
            ) : (
              <p className="Event">"No Events Happening"</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default WeeklyInfo;
