import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState(null)

  useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/tools')
      .then(resp => setData(resp.data))

  }, [])

  return (
    <div className="App">
    Data : 
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {
            data && data.map(
              resp => 
              <tr>
                <td>{resp.id}</td>
                <td>{resp.name}</td>
              </tr>
            )
          }
          
          
        </tbody>
      </table>
    </div>
  );
}

export default App;
