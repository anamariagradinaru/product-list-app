import '../src/global.css';
import Cart from './components/cart';
import Layout from './common/layout';
import CardList from './components/card-list';
import { useState } from 'react';

function App() {
    const [productList, setProductList] = useState<
        Array<{ image: string; heading: string; text: string }>
    >([]);
    console.log(productList);
    return (
        <Layout>
            <CardList
                setProductList={setProductList}
                productList={productList}
            />
            <Cart productList={productList} setProductList={setProductList} />
        </Layout>
    );
}

export default App;
