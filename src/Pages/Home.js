import Header from '../Components/Header/Header';
import ItemsContainer from "../Components/ItemsContainer/ItemsContainer";
import CategoryContainer from '../Components/CategoryContainer/CategoryContainer';

function Home({AddOrIncreaseProduct, RemoveOrDecreaseProduct, cart}) {

    return (
    <div className="wrapper">
        <Header />
        {/*<SearchBar />*/}
        {/*<CategoryContainer />*/}
        <ItemsContainer addToCart={AddOrIncreaseProduct} removeFromCart={RemoveOrDecreaseProduct} cart={cart}/>
    </div>
);
}

export default Home;
