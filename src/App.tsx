import './App.css';

import RegularList from './components/RegularList';
import { people } from './data/people.data';
import SmallPersonList from './components/people/SmallPersonList';
import LargePersonList from './components/people/LargePersonList';
import SmallProductList from './components/products/SmallProductList';
import LargeProductList from './components/products/LargeProductList';
import { products } from './data/products.data';

function App() {
  return (
    <>
      <RegularList items={people} resourseName='person' itemComponent={SmallPersonList} />
      <RegularList items={people} resourseName='person' itemComponent={LargePersonList} />
      <br />
      <br />
      <RegularList items={products} resourseName='product' itemComponent={SmallProductList} />
      <RegularList items={products} resourseName='product' itemComponent={LargeProductList} />
      
    </>
  );
}

export default App;

