import Image from "./Image"
import Button from "./ui/Button"
import type { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/function";
import CircleColor from "./CircleColor";

interface IProps
{
    product:IProduct;
    setProductToEdit:(product:IProduct)=>void;
    openEditModal:()=>void;
}
const ProductCard = ({product,setProductToEdit,openEditModal}:IProps) => {
    const{title,description,imageURL,price,colors,category}=product;
    const renderProductColors=colors.map(
  color=>(<CircleColor key={color} color={color}
   />
));
const onEdit=()=>{
  setProductToEdit(product);
  openEditModal();
}
  return( 
  <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col">
  <Image
   imageURL={imageURL} 
   alt={"Product Name"} 
   className="round-md h-52 w-full lg:object-cover"
   />
   <h3 className="text-lg font-semibold">
  {txtSlicer(title, 25)}
</h3>
<p className="text-xs text-gray-500 wrap-break-words">
  {txtSlicer(description)}
</p>
<div className="flex items-center flex-wrap space-x-1">{renderProductColors}</div>

   <div className="flex items-center justify-between">
    <span>${price}</span>
     <Image imageURL={category.imageURL}
   alt={category.name} 
   className="m-10 h-10 rounded-full object-bottom"/>
   </div>
   <div className="flex items-center justify-between space-x-2 mt-5">
      <Button className="bg-indigo-700 hover:bg-indigo-800"onClick={onEdit}>Edit</Button>
      <Button className="bg-red-700 hover:bg-red-800">Delete</Button>
   </div>
  </div>
   
)
}

export default ProductCard