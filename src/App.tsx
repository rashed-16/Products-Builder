import ProductCard from './components/ProductCard'
import {productInformation} from "./data"
import type { IProduct } from './interfaces'
import './App.css'
import Modal from './components/ui/Modal'
import { useState } from 'react'
import { Button } from '@headlessui/react'

const App = ()=> {

const [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

 const renderProductList = productInformation.map((pro: IProduct) => (
  <ProductCard key={pro.id} product={pro} />
));

  return (
    <main className="container">
       <Button className="bg-purple-700 hover:bg-purple-900" onClick={open}>
        Add
        </Button>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 rounded-md">
      {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={close} title="Add A New Product">
        <div className='flex items-center space-x-3'>
         <Button className="bg-indigo-700 hover:bg-indigo-800">Submit</Button>
        <Button className="bg-gray-400 hover:bg-gray-700">Cancel</Button>
        </div>
      </Modal>
    </main>
       
  )
};

export default App
