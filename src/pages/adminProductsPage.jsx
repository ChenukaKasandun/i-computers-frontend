
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";


export default function AdminProductsPage(){


    return(
    <div className="w-full h-full flex justify-center items-center text-6xl relative">
        Products

        <Link to="/admin/addproducts" className="w-[50px] h-[50px] flex justify-center items-center text-6xl border-[2px] absolute right-[2px] bottom-[2px] hover:text-white hover:bg-black rounded-full"><BiPlus/></Link>

    </div>
    );
  
}