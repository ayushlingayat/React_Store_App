import { Link, useLocation } from 'react-router-dom';
import Nav from './Nav';
import { useContext, useEffect, useState} from 'react';
import { ProductContext } from '../utils/Context'
import Loading from './Loading';
// import axios from '../utils/Axios';

const Home = () => {

    const [products] = useContext(ProductContext);

    const {search} = useLocation();

    const category = decodeURIComponent(search.split("=")[1]);


    // let filterProducts = products && products;

    const [filterProducts , setfilterProducts] = useState(null)
    // console.log(category);
    // console.log(products);
    // const getproductscategory = async () =>{
    //     try {
    //         const {data} = await axios.get(`/products/category/${category}`)
    //         // filterProducts = data;
    //         // console.log(data);
    //         setfilterProducts(data);
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    useEffect(() =>{
        if(!filterProducts || category == "undefined") setfilterProducts(products)
        if (category != "undefined"){


            // getproductscategory()
            setfilterProducts(products.filter(p =>p.category == category));


        }
    } ,[category ,products])

    console.log(filterProducts);
    return products ? (
        <>

            <Nav />
            {/* Main Div */}
            <div className=" w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">

                {/* Card Section */}



                {filterProducts && filterProducts.map((p, i) => ( 
                    <Link  key={i} to={`/details/${p.id}`} className='mr-3 mb-3 card p-5 border shadow rounded w-[18%] h-[30vh] flex flex-col justify-center'>

                        <div className='cursor-pointer hover:scale-110 w-100 h-[80%] bg-contain bg-no-repeat bg-center mb-3'
                            style={{ backgroundImage: `url(${p.image})` }}>

                        </div>

                        <h1 className='hover:text-blue-600'>{p.title}</h1>
                    </Link>
                ))}







            </div>
        </>
    ) : (
        <Loading />
    )
}

export default Home
