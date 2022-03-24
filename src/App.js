import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AllProducts from './Components/AllProducts/AllProducts';
import Menubar from './Components/Menubar/Menubar';


function App() {

  return (
    <div className="App">
      <Menubar></Menubar>
      <AllProducts></AllProducts>
    </div>
  );
}

export default App;
