import ProductCard from './components/productCard'
import {productInformation} from "./data"
import type { IProduct } from './interfaces'
import './App.css'

const App = ()=> {
 const renderProductList = productInformation.map((pro: IProduct) => (
  <ProductCard key={pro.id} product={pro} />
));

  return (
    <div>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 rounded-md">
      {renderProductList}
      </div>
    </div>
       
  )
};

export default App
