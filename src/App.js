import logo from './logo.svg';
import './App.css';

function App() {

  // method 1
  const createDummyRows = () =>{
    let users = [];
    for(let i = 1; i < 11; i++)
    {
      let user = {
        id: "id "+i,
        firstName: `firstName ${i}`,
        lastName: `lastName ${i}`,
        dob: '2000-10-10',
      }
      users.push(user);
    }
    return users;
  }

const DummyRows2 = () => {
  let rows = [];
  for(let i = 0; i < 10; i++)
  {
    let element = `<tr>
    <td>id${i}</td>
    <td>firstName ${i}</td>
    <td>lastName ${i}</td>
    <td>dob${i}</td>
    </tr>
    `;
    rows.push(element);
    console.log(rows);
  }  
  return rows;
}

  return (
    <div className="App">
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>User id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          {
            createDummyRows().map((value, index)=>{
              return(
                <tr key={index}>
                  <td>{value.id}</td>
                  <td>{value.firstName}</td>
                  <td>{value.lastName}</td>
                  <td>{value.dob}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
