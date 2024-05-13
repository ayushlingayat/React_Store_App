import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [products, setProducts] = useContext(ProductContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const [product, setProduct] = useState({
    id: "",
    title: "",
    image: "",
    category: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [products, id]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const updateProductHandler = (e) => {
    e.preventDefault();

    const { title, image, category, price, description } = product;

    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 5
    ) {
      alert("Each input must have at least 5 characters");
      return;
    }

    const updatedProducts = products.map((p) =>
      p.id === product.id ? { ...product } : p
    );

    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={updateProductHandler} className="flex flex-col items-center p-[5%] w-screen h-screen">
        <h1 className="mb-5 text-3xl w-1/2 font-semibold">Edit Product</h1>
        <input
          type="url"
          placeholder="Image Link"
          className="text-1xl bg-blue-100 rounded p-3 w-1/2 mb-3"
          onChange={changeHandler}
          value={product.image}
          name="image"
        />

        <input
          type="text"
          placeholder="Title"
          className="text-1xl bg-red-100 rounded p-3 w-1/2 mb-3"
          onChange={changeHandler}
          value={product.title}
          name="title"
        />

        <div className="w-1/2 flex justify-between">
          <input
            type="text"
            placeholder="Category"
            className="text-1xl bg-green-100 rounded p-3 w-[48%] mb-3"
            onChange={changeHandler}
            value={product.category}
            name="category"
          />

          <input
            type="number"
            placeholder="Price"
            className="text-1xl bg-yellow-100 rounded p-3 w-[48%] mb-3"
            onChange={changeHandler}
            value={product.price}
            name="price"
          />
        </div>

        <textarea
          className="text-1xl bg-pink-100 rounded p-3 w-1/2 mb-3"
          rows="10"
          placeholder="Enter product description here"
          onChange={changeHandler}
          value={product.description}
          name="description"
        ></textarea>

        <div className="w-1/2">
          <button className="py-2 px-5 border rounded border-red-200 text-red-500 font-semibold">
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
