import office from "./images/office.jpg";

function App() {

  const officeSpaces = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai",
      Image: office
    },
    {
      Name: "Regus",
      Rent: 75000,
      Address: "Bangalore",
      Image: office
    },
    {
      Name: "WeWork",
      Rent: 90000,
      Address: "Hyderabad",
      Image: office
    }
  ];

  return (
    <div style={{ marginLeft: "40px" }}>

      <h1>Office Space, at Affordable Range</h1>

      {
        officeSpaces.map((item, index) => {

          const rentStyle = {
            color: item.Rent <= 60000 ? "red" : "green",
            fontWeight: "bold"
          };

          return (

            <div key={index} style={{ marginBottom: "30px" }}>

              <img
                src={item.Image}
                alt="Office Space"
                width="25%"
                height="25%"
              />

              <h2>Name: {item.Name}</h2>

              <h3 style={rentStyle}>
                Rent: Rs. {item.Rent}
              </h3>

              <h3>
                Address: {item.Address}
              </h3>

            </div>

          );

        })
      }

    </div>
  );
}

export default App;