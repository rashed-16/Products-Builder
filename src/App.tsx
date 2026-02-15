import ProductCard from './components/ProductCard'
import {formInputList, productInformation} from "./data"
import type { IProduct } from './interfaces'
import './App.css'
import Modal from './components/ui/Modal'
import{ useState} from 'react'
import type {ChangeEvent, FormEvent} from 'react'
import { Button} from '@headlessui/react'
import Input from './components/ui/Input'
import { productValidation } from './validation/productValid'
import ErrorMessage from './components/ErrorMessage'

const App = ()=> {
  const [product,setProduct]=useState<IProduct>({
      title:'',
      description:'',
      imageURL: '',
       price:'',
       colors:[],
       category:{
        name:'',
        imageURL:'',
       }
    }
  )
  const[errors,setErrors]=useState({title:"",description:"",imageURL:"",price:""});

const [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }
  const onChangeHandler=(event:ChangeEvent<HTMLInputElement>)=>
  {
    const {value,name}=event.target
    setProduct({
      ...product,
      [name]:value
    })
    setErrors({
      ...errors,
      [name]:"",
    })
  };
  const onCancel =()=>{
    setProduct({
      title:'',
      description:'',
      imageURL: '',
       price:'',
       colors:[],
       category:{
        name:'',
        imageURL:'',
       }
    })
    close();
  }
   const submitHandler=(event:FormEvent<HTMLFormElement>):void=>{
    event.preventDefault();
   const error = productValidation({
  title: product.title,
  description: product.description,
  imageURL: product.imageURL,
  price: product.price,
});
    const hasErrorMsg=Object.values(error).some(value=>value==="")&&Object.values(error).every(value=>value==="");
    if(!hasErrorMsg)
    {
      setErrors(errors)
      return;
    }
    console.log("OK");
  }

 const renderProductList = productInformation.map((pro: IProduct) => (
  <ProductCard key={pro.id} product={pro} />
));
const renderFormInputList=formInputList.map(input=>(
  <div className="flex flex-col" key={input.id}>
    <label htmlFor={input.id} className="mb[1px] text-sm font-medium text-gray-700">{input.label}</label>
    <Input type="text" name={input.name} id={input.id}
     className='border-2 border-gray-300' value={product[input.name]} onChange={onChangeHandler}/>
     {errors[input.name]&& <ErrorMessage msg={errors[input.name]}/>}
     
     
  </div>
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
         <form className="space-y-3" onSubmit={submitHandler}>
          {renderFormInputList}
          <div className='flex items-center space-x-3'>
           <Button className="bg-indigo-700 hover:bg-indigo-800">Submit</Button>
           <Button className="bg-gray-400 hover:bg-gray-700" onClick={onCancel}>Cancel</Button>
          </div>
         </form> 
        
      </Modal>
    </main>
       
  )
};

export default App
