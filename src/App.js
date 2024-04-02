import useFetch from "./customHooks/useFetch";
import "./App.css"

function App() {
  const {error, loading, data} = useFetch("http://localhost:7000/getjobs")

  const getBackground = (created, deadline) => {
    let days = findDeadlineDays(created, deadline)
    console.log(days)
    if(days >= 21) return 'green'

    if(days <= 3) return 'red'

    return 'yellow'
  }


  const findDeadlineDays = (created, deadline) => {
    let givenDate =new Date(deadline);
    let date2 = new Date(created);
    let diffDays =(givenDate -   date2)/ (1000 * 60 * 60 * 24); 
    return diffDays
  }

  if(loading) return <div className="loader">loading...</div>

  if(error) return <div className="error">Communcations error!</div>
  return (
    <div className="container">
      <h1>Jobs Dashboard</h1>
      <div className="cardContainer">
      {data.map((ele, index) => {
        return(
          <div key={index+ele.title} className="card" style={{background: getBackground(ele.createdAt,ele.deadline)}}>
              <h4>{ele.title}</h4>
              <p>{ele.description}</p>
              <p>{ele.location}</p>
          </div>
        )
      })}
      </div>
    </div>
  );
}

export default App;
