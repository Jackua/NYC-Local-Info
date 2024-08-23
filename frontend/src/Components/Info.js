import Events from "./Events";

function Info({ result, frequency, name }) {
  let datesObject = { result }[Object.keys({ result })[0]];
  let datesList = Object.keys(datesObject);

  console.log(frequency);
  return (
    <div className={`${frequency}Info`}>
      {datesList.map((date, key) => {
        let fieldNames = Object.keys(datesObject[date]);
        return (
          <div className="Day" key={key}>
            <h3>{date}</h3>
            <p>
              {fieldNames[0]} : {datesObject[date][fieldNames[0]][{ name }]}
            </p>
            <p>
              {fieldNames[1]} : {datesObject[date][fieldNames[1]][{ name }]}
            </p>
            <p>
              {fieldNames[2]} : {datesObject[date][fieldNames[2]][{ name }]}
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

export default Info;
