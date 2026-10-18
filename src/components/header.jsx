import { Link } from "react-router-dom";


export default function Header(){
    return(
        <header className="w-full h-[100px] bg-accent flex">
            <div className="w-full h-full flex justify-center items-center gap-2 text-white">
                <Link to="/home">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/about">About</Link>
                <Link to="/contacts">Contacts</Link>
            </div>
           
        </header>
    )
}