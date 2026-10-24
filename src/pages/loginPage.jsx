import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage(){

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const navigate = useNavigate();


   async function login(){
        console.log("login button clicked");
        console.log("Email:", email);
        console.log("Password:" , password);

        try {
                  const res = await axios.post(import.meta.env.VITE_BACKEND_URL+"/users/login", {
                    email : email , password : password})
                  console.log(res.data);
                  if (res.data.message === "Login Successfull..!") {
                    
                  
                    //  Forwarding based on the user role
                    if (res.data.role == "admin") {
                        navigate("/admin");
                    }else{
                        navigate("/");
                    }

                      toast.success("Login successful..! Welcome back..!");
      
                  }else{
                     toast.error("Login Failed..!");
                  }
   
        } catch (error) {
            console.log("Error during login");
            console.log(error);

            toast.error("Error During login!");
            
        }
        
     
        
    }

    return(
        <div className="w-full h-screen bg-[url('/public/freephotocc-workspace-1280538.jpg')] bg-cover bg-center bg-no-repeat flex">


            <div className="w-[50%] h-full flex justify-center items-center">

                <div className="w-[450px] h-[650px] backdrop-blur-lg rounded-xl shadow-2xl flex flex-col items-center justify-center">
                    <h1 className="text-[40px] font-bold mb-[20px] text-amber-300">Login</h1>

                    <input onChange={(e)=>{
                        
                        setEmail(e.target.value);
                        
                    }} type="email" placeholder="Enter your email!" className="w-[400px] h-[50px] mb-[20px] rounded-lg border border-amber-300 p-[10px] text-[20px] focus:outline-none focus:ring-2 focus:ring-amber-300" />

                    <input onChange={(e)=>{

                        setPassword(e.target.value);

                    }} type="password" placeholder="Enter your password!" className="w-[400px] h-[50px] mb-[20px] rounded-lg border border-amber-300 p-[10px] text-[20px] focus:outline-none focus:ring-2 focus:ring-amber-300" />

                    <p className="text-white-italic mb-5">Forget your password?<Link to="/register" className="text-amber-400 not-italic"> Reset it here!</Link></p>

                    <button onClick={login} className="w-[400px] h-[50px] bg-amber-400 text-white font-bold text-[20px] rounded-lg hover:bg-transparent border border-b-black">Login</button>

                    <p className="text-white-italic">Don't have an account?<Link to="/register" className="text-amber-400 not-italic"> Register here!</Link></p>
                </div>
                
             </div>
            <div className="w-[50%] h-full">

            </div>
            
        </div>
    );
    
}