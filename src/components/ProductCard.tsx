import {type IProduct } from "../interfaces";
import {textSlicer} from "../utils/function";
import Image from "./Image";
import Button from "./ui/Button";
import CircleColor from "./ui/CircleColor";

interface IProps {
  product: IProduct;
  setProductToEdit: (product: IProduct) => void;
  openEditModal: () => void;
  idx: number;
  setProductToEditIndex: (value: number) => void;
  setTempColors: (value: string[]) => void;
    openRemoveModal: (idx: number) => void;

}

const ProductCard = ({
  product,
  setProductToEdit,
  openEditModal,
  idx,
  setProductToEditIndex,
  setTempColors,
  openRemoveModal
}: IProps) => {
  const { title, description, imageURL, price, colors, category } = product;

  /* ـــــــــــ RENDER ـــــــــــ */
  const renderProductColors = colors.map((color) => (
    <CircleColor key={color} color={color} />
  ));

  /* ـــــــــــ HANDLER ـــــــــــ */
  const onEdit = () => {
    setProductToEdit(product);
    setProductToEditIndex(idx);
    setTempColors(product.colors);
    openEditModal();
  };

  return (
    <div className="mx-auto flex max-w-sm flex-col space-y-3 rounded-md border p-2 md:mx-0 md:max-w-lg lg:justify-between">
      <Image
        imageURL={imageURL}
        alt={title}
        className="mb-2 h-52 w-full rounded-md object-cover"
      />

      <h3 className="text-lg font-semibold">{textSlicer(title, 25)}</h3>
      <p className="wrap-break-word text-xs text-gray-500">
        {textSlicer(description)}
      </p>

      <div className="flex flex-wrap items-center space-x-1">
        {renderProductColors}
      </div>

      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold text-indigo-600">${price}</span>
        <Image
          imageURL={category.imageURL}
          alt={category.name}
          className="h-10 w-10 rounded-full object-cover"
        />
      </div>

      <div className="mt-5 flex items-center justify-between space-x-2">
        <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={onEdit}>
          EDIT
        </Button>
       <Button className="bg-red-700 hover:bg-red-800" onClick={() => openRemoveModal(idx)}>
         DELETE
       </Button>
      </div>
    </div>
  );
};

export default ProductCard;