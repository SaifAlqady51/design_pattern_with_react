import './App.css';

import RegularList from './components/RegularList';
import { people } from './data/people.data';
import SmallPersonList from './components/people/SmallPersonList';
import LargePersonList from './components/people/LargePersonList';
import SmallProductList from './components/products/SmallProductList';
import LargeProductList from './components/products/LargeProductList';
import { products } from './data/products.data';
import { Modals } from './components/Modals';

function App() {
  return (
    <>
      <Modals>
          <LargeProductList product={products[0]} />
      </Modals>
    </>
  );
}

export default App;

