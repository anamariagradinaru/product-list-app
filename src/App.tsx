import '../src/global.css';
import Cart from './components/cart';
import Layout from './common/layout';
import CardList from './components/card-list';

function App() {
    return (
        <Layout>
            <CardList />
            <Cart />
        </Layout>
    );
}

export default App;
