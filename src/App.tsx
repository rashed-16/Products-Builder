import  { type ChangeEvent, type FormEvent, useState } from "react";
import {
  categories,
  colors,
  formInputsList,
  productList,
} from "./components/data";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import Input from "./components/ui/Input";
import Button from "./components/ui/Button";
import type { IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMessage from "./components/ErrorMessage";
import CircleColor from "./components/ui/CircleColor";
import { v4 as uuid } from "uuid";
import Select from "./components/ui/Select";
import type { TProductNames } from "./Types";

const App = () => {
  const defaultProductObj = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };
  /* ـــــــــــ STATE ـــــــــــ */
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [productToEdit, setProductToEdit] =
    useState<IProduct>(defaultProductObj);
  const [productToEditIdx, setProductToEditIdx] = useState<number>(0);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: "",
  });
  const [tempColors, setTempColors] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  /* ـــــــــــ HANDLER ـــــــــــ */
  const closeModal = () => setIsOpen(false);
  const openModal = () => {
    setTempColors([]);
    setIsOpen(true);
  };
  const closeEditModal = () => {
    setIsOpenEditModal(false);
  };
  const openEditModal = () => setIsOpenEditModal(true);
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

  const onChangeEditHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setProductToEdit({
      ...productToEdit,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const onCancel = () => {
    setProduct(defaultProductObj);
    setErrors({
      title: "",
      description: "",
      imageURL: "",
      price: "",
      colors: "",
    });
    setTempColors([]);
    closeModal();
  };

  const onCancelEdit = () => {
    // setProductToEdit(defaultProductObj);
    setErrors({
      title: "",
      description: "",
      imageURL: "",
      price: "",
      colors: "",
    });
    // setTempColors([]);
    closeEditModal();
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, imageURL, price } = product;

    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
      tempColors,
    });

    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");

    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }

    setProducts((prev) => [
      {
        ...product,
        id: uuid(),
        colors: tempColors,
        category: selectedCategory,
      },
      ...prev,
    ]);
    setProduct(defaultProductObj);
    setTempColors([]);
    closeModal();
  };

  const submitEditHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, imageURL, price } = productToEdit;

    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
      tempColors,
    });

    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");

    if (!hasErrorMsg) {
      setErrors(errors);
      console.log("ERRORSSS", errors);
      return;
    }

    const updatedProducts = [...products];

    updatedProducts[productToEditIdx] = {
      ...productToEdit,
      colors: tempColors,
    };

    setProducts(updatedProducts);

    setProductToEdit(defaultProductObj);
    setTempColors([]);
    closeEditModal();

    console.log("EDITED!");
  };

  /* ـــــــــــ RENDER ـــــــــــ */
  const renderProductList = products.map((product, idx) => (
    <ProductCard
      key={product.id}
      product={product}
      setProductToEdit={setProductToEdit}
      openEditModal={openEditModal}
      idx={idx}
      setProductToEditIndex={setProductToEditIdx}
      setTempColors={setTempColors}
    />
  ));

  const renderFormInputList = formInputsList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label
        htmlFor={input.id}
        className="mb-2px text-sm font-medium text-gray-700"
      >
        {input.label}
      </label>
      <Input
        type="text"
        id={input.id}
        name={input.name}
        value={product[input.name]}
        onChange={onChangeHandler}
      />

      <ErrorMessage msg={errors[input.name]} />
    </div>
  ));

  const renderProductColors = colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        if (tempColors.includes(color)) {
          setTempColors((prev) => prev.filter((item) => item !== color));
          return;
        }
        setTempColors((prev) => [...prev, color]);
        setErrors({
          ...errors,
          colors: "",
        });
      }}
    />
  ));

  const renderProductEditWithErrorMsg = (
    id: string,
    label: string,
    name: TProductNames,
  ) => {
    return (
      <div className="flex flex-col">
        <label
          htmlFor={id}
          className="mb-2px text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        <Input
          type="text"
          id={id}
          name={name}
          value={productToEdit[name]}
          onChange={onChangeEditHandler}
        />

        <ErrorMessage msg={errors[name]} />
      </div>
    );
  };

  return (
    <main className="center container">
      <Button
        className="mx-auto my-10 block bg-indigo-700 px-10 font-medium hover:bg-indigo-800"
        onClick={openModal}
        width="w-fit"
      >
        Build Product
      </Button>

      <div className="m-5 grid grid-cols-1 gap-2 rounded-md p-2 md:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {renderProductList}
      </div>

      {/* ADD PRODUCT MODAL */}
      <Modal isOpen={isOpen} closeModal={closeModal} title="ADD A NEW PRODUCT">
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderFormInputList}
          <Select
            selected={selectedCategory}
            setSelected={setSelectedCategory}
          />
          <div className="flex flex-wrap items-center space-x-1">
            {renderProductColors}
          </div>
          <div className="flex flex-wrap items-center space-x-1">
            {tempColors.map((color) => (
              <span
                key={color}
                className="mb-1 mr-1 rounded-md p-1 text-xs text-white"
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
            {errors.colors ? (
              <span className="block text-sm font-semibold text-red-700">
                {errors.colors}
              </span>
            ) : null}
          </div>

          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-800">
              Submit
            </Button>
            <Button
              className="bg-gray-400 hover:bg-gray-500"
              onClick={onCancel}
              type="button"
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>

      {/* EDIT PRODUCT MODAL */}
      <Modal
        isOpen={isOpenEditModal}
        closeModal={closeEditModal}
        title="EDIT THIS PRODUCT"
      >
        <form className="space-y-3" onSubmit={submitEditHandler}>
          {renderProductEditWithErrorMsg("title", "Product Title", "title")}
          {renderProductEditWithErrorMsg(
            "description",
            "Product Description",
            "description",
          )}
          {renderProductEditWithErrorMsg(
            "imageURL",
            "Product Image URL",
            "imageURL",
          )}
          {renderProductEditWithErrorMsg("price", "Product Price", "price")}

          <Select
            selected={productToEdit.category}
            setSelected={(value) =>
              setProductToEdit({ ...productToEdit, category: value })
            }
          />
          <div className="flex flex-wrap items-center space-x-1">
            {renderProductColors}
          </div>
          <div className="flex flex-wrap items-center space-x-1">
            {tempColors.map((color) => (
              <span
                key={color}
                className="mb-1 mr-1 rounded-md p-1 text-xs text-white"
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
            {errors.colors ? (
              <span className="block text-sm font-semibold text-red-700">
                {errors.colors}
              </span>
            ) : null}
          </div>

          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-800">
              Submit
            </Button>
            <Button
              className="bg-gray-400 hover:bg-gray-500"
              onClick={onCancelEdit}
              type="button"
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