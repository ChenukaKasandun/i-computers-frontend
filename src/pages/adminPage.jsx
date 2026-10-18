import { Link, Route, Routes } from "react-router-dom";

export default function AdminPage(){
    return(

        <div className="w-full h-full max-h-full bg-accent flex">
            <div className="w-[300px] bg-accent h-full bg-primary">
                <div className="w-full h-[150px] border border-white text-white flex items-center justify-center">
                    <img src="/public/download.jpg" className="h-full" />
                <h1>Admin Panel</h1>
                </div>

                <div className="text-white flex flex-col w-full h-[400px]">
                    <Link to="/admin">Orders</Link>
                    <Link to="/admin/products">Products</Link>
                    <Link to="/admin/users">Users</Link>
                    <Link to="/admin/reviews">Reviews</Link>
                </div>
    
            </div>
            <div className="w-[calc(100%-300px)] h-full overflow-y-scroll border-[10px] rounded-2xl">
        <Routes path="/">
            <Route path="/" element={<h1>Orders</h1>}/>
            <Route path="/products" element={<h1>Products</h1>}/>
            <Route path="/users" element={<h1>Users</h1>}/>
            <Route path="/reviews" element={<h1>Reviews</h1>}/>

            
        </Routes>
            
            </div>
        </div>
    );
    
}