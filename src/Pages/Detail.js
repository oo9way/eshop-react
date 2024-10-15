import { useParams } from 'react-router-dom';

import Header from '../Components/Header/Header';
import ProductCover from '../Components/ProductCover/ProductCover';
import ProductBottom from '../Components/ProductBottom/ProductBottom';

function Detail() {
    const { productId } = useParams(); 
    const url = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Sport_balls.svg/400px-Sport_balls.svg.png"
    return (
        <div className="wrapper">
            <Header />
            <ProductCover url={url}/>
            <ProductBottom />
        </div>
    );
}

export default Detail;
