import { Link, useNavigate, useParams } from "react-router-dom";
// import axios from "../utils/Axios";
import { useContext, useEffect, useState } from "react";
import Loading from "./Loading";
import { ProductContext } from "../utils/Context";

const Details = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  console.log(setProducts);
  const { id } = useParams(); 

  // const getSingleProduct = async () => {
  //   try {
  //     const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
  //     setProduct(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    if(!product){
      setProduct(products.filter(p => p.id == id)[0])
    }
    // getSingleProduct();
  }, [id]); 

  const ProductDeleteHandler = (id) =>{
    const FilteredProducts = products.filter(p => p.id !== id);
    setProducts(FilteredProducts);
    localStorage.setItem("products" ,JSON.stringify(FilteredProducts));
    navigate("/");

  }

  return product ? (
    <div className="w-[70%] h-full m-auto p-[10%] flex justify-between items-center">
      <img className="object-contain w-[45%] h-[80%]" src={product.image} alt={product.title} />
      <div className="content w-[50%]">
        <h1 className="text-4xl">{product.title}</h1>
        <h3 className="text-zinc-400 my-5 font-semibold">{product.category}</h3>
        <h2 className="text-red-400 font-semibold mb-3">{product.price} ₹</h2>
        <p className="text-lg text-bold mb-[8%]">{product.description}</p>
        <Link to={`/edit/${product.id}`} className="mr-3 py-2 px-5 border rounded border-blue-200 text-blue-500">
          Edit
        </Link>
        <button onClick={() =>ProductDeleteHandler(product.id)} to="#" className="py-2 px-5 border rounded border-red-200 text-red-500">
          Delete
        </button>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
