import './App.css';
import Header from './Components/Header/Header';
import SearchBar from './Components/SearchBar/SearchBar';
import ItemsContainer from "./Components/ItemsContainer/ItemsContainer";


function App() {
  return (
    <div className="wrapper">
        <Header />
        <SearchBar />
        <ItemsContainer />
    </div>
  );
}

export default App;
