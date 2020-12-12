import './App.css';
import ProductList from './ProductList'
import Filters from '../components/Filters'

function App() {

  return (
    <div className="App">
      <Filters />
      <ProductList />
    </div>
  );
}

export default App;
