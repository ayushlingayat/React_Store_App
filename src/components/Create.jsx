import { useContext, useState } from "react"
import { ProductContext } from "../utils/Context"
import { nanoid } from "nanoid"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"


const Create = () => {

   const navigate =  useNavigate()
   const [products , setProducts] = useContext(ProductContext)

    const [title, settitle] = useState("")
    const [image, setimage] = useState("")
    const [category, setcategory] = useState("")
    const [price, setprice] = useState("")
    const [description, setdescription] = useState("")


    const AddProductHandler = (e) =>{
        e.preventDefault();

        if(title.trim().length < 5 || image.trim().length < 5 || category.trim().length <5  || price.trim().length <1 || description.trim().length <5){
            alert("Each and Every input must have atleast 4 characters");
            return;
        }


        const product = {
            id: nanoid(),
            title,
            image,
            category,
            price,
            description
        }
        setProducts([...products , product])
        // toast.success("New Product Added")
        localStorage.setItem("products" , JSON.stringify([...products , product]));
        toast.success("Product Added Successfully");
        navigate("/");

    }


    return (
        <form onSubmit={AddProductHandler} className="flex flex-col items-center p-[5%] w-screen h-screen">
            <h1 className="mb-5 text-3xl w-1/2 font-semibold">Add New Product</h1>
            <input type="url" placeholder="image Link" className="text-1xl bg-blue-100 rounded p-3 w-1/2 mb-3" onChange={(e) => setimage(e.target.value)} value={image} />

            <input type="text" placeholder="title" className="text-1xl bg-red-100 rounded p-3 w-1/2 mb-3" onChange={(e) => settitle(e.target.value)} value={title} />

            <div className="w-1/2 flex justify-between">
                <input type="text" placeholder="category" className="text-1xl bg-green-100 rounded p-3 w-[48%] mb-3" onChange={(e) => setcategory(e.target.value)} value={category} />

                <input type="number" placeholder="price" className="text-1xl bg-yellow-100 rounded p-3 w-[48%] mb-3" onChange={(e) => setprice(e.target.value)} value={price} />
            </div>


        <textarea className="text-1xl bg-pink-100 rounded p-3 w-1/2 mb-3" rows ="10" placeholder="Enter product description here" onChange={(e) => setdescription(e.target.value)} value={description}></textarea>




        <div className="w-1/2">
        <button className='py-2 px-5 border rounded border-red-200 text-red-500 font-semibold'>Add new Product</button>
        </div>
        
        </form>
    )
}

export default Create
