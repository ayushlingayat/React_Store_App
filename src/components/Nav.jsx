import { useContext } from "react";
import { ProductContext } from '../utils/Context'
import { Link } from "react-router-dom";
const Nav = () => {

  const [products] = useContext(ProductContext);

  let distinct_category = products && products.reduce((acc , cv)=>[...acc ,cv.category],[])

  distinct_category = [...new Set(distinct_category)];
  // console.log(distinct_category);


  const color = () =>{
    return `rgba(${(Math.random() * 255).toFixed()},
    ${(Math.random() * 255).toFixed()},
    ${(Math.random() * 255).toFixed()},0.4)`
  }

  // console.log(color());
  return (
    <>
      <nav className='w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5'>
       <a className='py-2 px-5 border rounded border-blue-200 text-blue-500' href="/create">Add new Product</a>
       <hr className='w-[80%] my-3' />
       <h1 className='text-2xl font-semibold w-[80%] mb-3'>Category Filter</h1>


       <div className=' w-[80%]'>


       {distinct_category.map((c, i) => (
  <Link key={i} to={`/?category=${c}`} className='mb-3 flex items-center'>
    <span style={{backgroundColor : color()}} className='rounded-full mr-2 w-3 h-3 bg-blue-300'></span> {c}
  </Link>
))}


        
        
        
       </div>
    </nav>
    </>
  )
}

export default Nav
