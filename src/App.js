import logo from './logo.svg';
import './App.css';

function App() {
  (async ()=> {
    await fetch('https://api.gismeteo.net/v2/weather/current/?latitude=54.35&longitude=52.52',{
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      // mode: 'no-cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json',
        'X-Gismeteo-Token': '56b30cb255.3443075',
        'Accept-Encoding': 'deflate',
        'Access-Control-Allow-Origin': 'http://localhost:3000'
      },
    }).then(res => console.log(res))
  })()


  return (
    <div className="App">

    </div>
  );
}

export default App;
