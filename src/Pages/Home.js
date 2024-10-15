import Header from '../Components/Header/Header';
import SearchBar from '../Components/SearchBar/SearchBar';
import ItemsContainer from "../Components/ItemsContainer/ItemsContainer";
import CategoryContainer from '../Components/CategoryContainer/CategoryContainer';


function Home() {
  return (
    <div className="wrapper">
        <Header />
        <SearchBar />
        <CategoryContainer />
        <ItemsContainer />
    </div>
  );
}

export default Home;
