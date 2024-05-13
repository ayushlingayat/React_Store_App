// import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext();

const Context = (props) => {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")) ||null);

//   const [products, setProducts] = useState(() => {
//     const storedProducts = localStorage.getItem("products");
//     try {
//         return storedProducts ? JSON.parse(storedProducts) : [];
//     } catch (error) {
//         console.error("Error parsing stored products:", error);
//         return [];
//     }
// });



  // const getProducts = async () => {
  //   try {
  //     const { data } = await axios.get('https://fakestoreapi.com/products');
  //     setProducts(data);
     
  //   } catch (error) {
  //     console.log("Error fetching products:", error);
  //   }
  // };

  // console.log(products);
  useEffect(() => {
    // getProducts(); 
  }, []); 

  


  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default Context;
