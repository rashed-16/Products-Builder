import ProductCard from "./components/ProductCard";
import { categories, colors, formInputList, productInformation } from "./data";
import type { IProduct } from "./interfaces";
import "./App.css";
import Modal from "./components/ui/Modal";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Button } from "@headlessui/react";
import Input from "./components/ui/Input";
import { productValidation } from "./validation/productValid";
import ErrorMessage from "./components/ErrorMessage";
import CircleColor from "./components/CircleColor";
import { v4 as uuid } from "uuid";
import Example from "./components/ui/Select";

const App = () => {
  const [product, setProduct] = useState<IProduct>({
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  });
  const [products, setProducts] = useState<IProduct[]>(productInformation);
  const[productToEdit,setProductToEdit]=useState<IProduct>({
      title: "",
      description: "",
      imageURL: "",
      price: "",
      colors: [],
      category: {
        name: "",
        imageURL: "",
      },
    });
  const [errors, setErrors] = useState({
  title: "",
  description: "",
  imageURL: "",
  price: "",
  colors: "",
});

  const [isOpen, setIsOpen] = useState(false);
  const [tempColors, setTempColor] = useState<string[]>([]);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const[selectedCategory,setSelectedCategory]=useState(categories[0]);
  console.log(productToEdit)

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  function openEditModal() {
    setIsOpenEditModal(true);
  }

  function closeEditModal() {
   setIsOpenEditModal(false);
  }
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };
  const onCancel = () => {
    setProduct({
      title: "",
      description: "",
      imageURL: "",
      price: "",
      colors: [],
      category: {
        name: "",
        imageURL: "",
      },
    });
    close();
  };
  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const { title, description, price, imageURL } = product;

    const error = productValidation({
      title,
      description,
      imageURL,
      price,
      colors:tempColors
    });

    const hasErrorMsg = Object.values(error).some((value) => value !== "");

    if (hasErrorMsg) {
      setErrors(error);
      return;
    }

    setProducts((prev) => [
      { ...product, id: uuid(), colors: tempColors,category:selectedCategory },
      ...prev,
    ]);

    setProduct({
      title: "",
      description: "",
      imageURL: "",
      price: "",
      colors: [],
      category: {
        name: "",
        imageURL: "",
      },
    });

    setTempColor([]);
    close();
  };

  const renderProductList = products.map((pro: IProduct) => (
    <ProductCard key={pro.id} product={pro} setProductToEdit={setProductToEdit} openEditModal={openEditModal}/>
  ));
  const renderFormInputList = formInputList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label
        htmlFor={input.id}
        className="mb[1px] text-sm font-medium text-gray-700"
      >
        {input.label}
      </label>
      <Input
        type="text"
        name={input.name}
        id={input.id}
        className="border-2 border-gray-300"
        value={product[input.name]}
        onChange={onChangeHandler}
      />
      {errors[input.name] && <ErrorMessage msg={errors[input.name]} />}
    </div>
  ));
  const renderProductColors = colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        if (tempColors.includes(color)) {
          setTempColor((prev) => prev.filter((item) => item !== color));
          return;
        }
        setTempColor((prev) => [...prev, color]);
      }}
    />
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
          <Example selected={selectedCategory} setSelected={setSelectedCategory}/>
          <div className="flex items-center flex-wrap space-x-1">
            {renderProductColors}
          </div>
          <div className="flex items-center flex-wrap space-x-1">
            {tempColors.map((color) => (
              <span
                key={color}
                className="p-1 mr-1 mb-1 text-xs rounded-md text-white"
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
          </div>
          
          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-800">
              Submit
            </Button>
            <Button
              className="bg-gray-400 hover:bg-gray-700"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
      {/* Edit */}
      <Modal isOpen={isOpenEditModal} closeModal={closeEditModal} title="Add A New Product">
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderFormInputList}
          <Example selected={selectedCategory} setSelected={setSelectedCategory}/>
          <div className="flex items-center flex-wrap space-x-1">
            {renderProductColors}
          </div>
          <div className="flex items-center flex-wrap space-x-1">
            {tempColors.map((color) => (
              <span
                key={color}
                className="p-1 mr-1 mb-1 text-xs rounded-md text-white"
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
          </div>
          
          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-800">
              Submit
            </Button>
            <Button
              className="bg-gray-400 hover:bg-gray-700"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </main>
  );
};

export default App;
