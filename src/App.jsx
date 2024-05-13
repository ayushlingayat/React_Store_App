// 2 hour 29 min 8 sec
import { Routes , Route ,Link, useLocation } from "react-router-dom"
import Create from './components/Create'
import Home from './components/Home'
import Details from "./components/Details"
import Edit from "./components/Edit"

const App = () => {

  const {search , pathname } =  useLocation();
  console.log(search , pathname);
  return (
    
    <div className='h-screen w-screen flex'>


    {(pathname != "/" || search.length > 0) && (<Link to="/" className="text-red-600 absolute left-[17%] top-[3%] text-xl">Home</Link>)}
       
       
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/create" element={<Create />}  />
          <Route path="/details/:id" element={<Details />}  />
          <Route path="/edit/:id" element={<Edit />}  />
        </Routes>

        
    </div>
  )
}

export default App
