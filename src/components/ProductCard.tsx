import Image from "./Image"
import Button from "./ui/Button"
import type { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/function";

interface IProps
{
    product:IProduct;
}
const ProductCard = ({product}:IProps) => {
    const{title,description,imageURL}=product;
  return( 
  <div className="border rounded-md flex flex-col">
  <Image
   imageURL={imageURL} 
   alt={"Product Name"} 
   className="round-md mb-2"
   />
   <h3>{title}</h3>
   <p>
    {txtSlicer(description)}
   </p>
   <div className="flex items-center justify-between">
    <span>$500000</span>
    //**https://i.pinimg.com/1200x/01/9d/8a/019d8a995560ba157254330f83f56259.jpg
     <Image imageURL={imageURL}
   alt={"Product Name"} 
   className="m-10 h-10 rounded-full object-bottom"/>
   </div>
   <div className="flex items-center justify-between space-x-2 mt-5">
      <Button className="bg-indigo-700">Edit</Button>
      <Button className="bg-red-700">Delete</Button>
   </div>
  </div>
   
)
}

export default ProductCard