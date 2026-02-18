import { type ChangeEvent, type FormEvent, useState } from "react";
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
    colors: [] as string[],
    category: { name: "", imageURL: "" },
  };

  /* ـــــــــــ STATE ـــــــــــ */
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [productToEdit, setProductToEdit] =
    useState<IProduct>(defaultProductObj);
  const [productToEditIdx, setProductToEditIdx] = useState<number>(0);
  const [productToRemoveIdx, setProductToRemoveIdx] = useState<number>(0);

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: "",
  });

  const [tempColors, setTempColors] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenRemoveModal, setIsOpenRemoveModal] = useState(false);

  /* ـــــــــــ HANDLERS ـــــــــــ */
  const openModal = () => {
    setTempColors([]);
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);

  const openEditModal = () => setIsOpenEditModal(true);
  const closeEditModal = () => setIsOpenEditModal(false);

  const openRemoveModal = (idx: number) => {
    setProductToRemoveIdx(idx);
    setIsOpenRemoveModal(true);
  };
  const closeRemoveModal = () => setIsOpenRemoveModal(false);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setProduct({ ...product, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const onChangeEditHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setProductToEdit({ ...productToEdit, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const onCancel = () => {
    setProduct(defaultProductObj);
    setTempColors([]);
    setErrors({
      title: "",
      description: "",
      imageURL: "",
      price: "",
      colors: "",
    });
    closeModal();
  };

  const onCancelEdit = () => {
    setErrors({
      title: "",
      description: "",
      imageURL: "",
      price: "",
      colors: "",
    });
    setTempColors([]);
    closeEditModal();
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, description, imageURL, price } = product;

    const validationErrors = productValidation({
      title,
      description,
      imageURL,
      price,
      tempColors,
    });
    const hasErrors = Object.values(validationErrors).some((val) => val !== "");

    if (hasErrors) {
      setErrors(validationErrors);
      return;
    }

    setProducts([
      {
        ...product,
        id: uuid(),
        colors: tempColors,
        category: selectedCategory,
      },
      ...products,
    ]);

    setProduct(defaultProductObj);
    setTempColors([]);
    closeModal();
  };

  const submitEditHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, description, imageURL, price } = productToEdit;

    const validationErrors = productValidation({
      title,
      description,
      imageURL,
      price,
      tempColors,
    });
    const hasErrors = Object.values(validationErrors).some((val) => val !== "");

    if (hasErrors) {
      setErrors(validationErrors);
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
  };

  const onRemoveProduct = () => {
    const updatedProducts = [...products];
    updatedProducts.splice(productToRemoveIdx, 1);
    setProducts(updatedProducts);
    closeRemoveModal();
  };

  /* ـــــــــــ RENDER ـــــــــــ */
  const renderProductList = products.map((prod, idx) => (
    <ProductCard
      key={prod.id}
      product={prod}
      idx={idx}
      setProductToEdit={setProductToEdit}
      setProductToEditIndex={setProductToEditIdx}
      setTempColors={setTempColors}
      openEditModal={openEditModal}
      openRemoveModal={openRemoveModal}
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
          setTempColors(tempColors.filter((c) => c !== color));
          return;
        }
        setTempColors([...tempColors, color]);
        setErrors({ ...errors, colors: "" });
      }}
    />
  ));

  const renderProductEditWithErrorMsg = (
    id: string,
    label: string,
    name: TProductNames,
  ) => (
    <div className="flex flex-col" key={id}>
      <label htmlFor={id} className="mb-2px text-sm font-medium text-gray-700">
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
            {errors.colors && (
              <span className="block text-sm font-semibold text-red-700">
                {errors.colors}
              </span>
            )}
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
            setSelected={(val) =>
              setProductToEdit({ ...productToEdit, category: val })
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
            {errors.colors && (
              <span className="block text-sm font-semibold text-red-700">
                {errors.colors}
              </span>
            )}
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

      {/* REMOVE PRODUCT MODAL */}
      <Modal
        isOpen={isOpenRemoveModal}
        closeModal={closeRemoveModal}
        title="Remove Product"
      >
        <p className="mb-3">
          Are you sure you want to remove this product? This action cannot be
          undone.
        </p>
        <div className="flex items-center space-x-3">
          <Button
            className="bg-red-700 hover:bg-red-600"
            onClick={onRemoveProduct}
          >
            Remove
          </Button>
          <Button
            className="bg-gray-400 hover:bg-gray-500"
            onClick={closeRemoveModal}
            type="button"
          >
            Cancel
          </Button>
        </div>
      </Modal>
    </main>
  );
};

export default App;
