import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function AdminAddProductPage(){

    const[productId,setProductId] = useState("");
    const[name,setName] = useState("");
    const[altNames,setAltNames] = useState("");
    const[description,setDescription] = useState("");
    const[price,setPrice] = useState("");
    const[labelledPrice,setLabelledPrice] = useState("");
    const[images,setImages] = useState("");
    const[category,setCategory] = useState("");
    const[brand,setBrand] = useState("");
    const[model,setModel] = useState("");
    const[stock,setStock] = useState("");
    const[isAvailable,setIsAvailable] = useState(true);
    const navigate = useNavigate();

    async function addProduct(){
        const token = localStorage.getItem("token");
        if (token == null) {
            toast.error("You must be logged in as to add products..!");
            navigate("/login");
            return;
        }

        if (productId == ""||name == ""||altNames == ""||description == ""||price == ""||labelledPrice == ""||images == ""||category == ""||brand == ""||model == ""||stock == ""||isAvailable == "") {
            toast.error("Please fill all required feilds..!");
            return;
            
        }

        try{

            const altNamesInArray = altNames.split(",");
            const imagesInArray = images.split(",");

            await axios.post(import.meta.env.VITE_BACKEND_URL + "/products/" , {
                
                productId : productId,
                name : name,
                altNames : altNamesInArray,
                description : description,
                price : price,
                labelledPrice :labelledPrice ,
                images : imagesInArray,
                category : category,
                brand : brand,
                model : model,
                stock : stock,
                isAvailable : isAvailable
            } , {
                headers : {
                Authorization : "Bearer " + token
                    }
            
            })

            toast.success("Product added successfully..!");
            navigate("/admin/products");

        }catch (err) {
            console.log("Status Code:", err.response?.status);
            console.log("Response Data:", err.response?.data);
            console.log("Error Message:", err.response?.data?.error);
            console.log("Full Error:", err);

            toast.error(
            err.response?.data?.error || "Error adding product!"
    );
}
    }





    return(

        <div className="w-full flex justify-center p-[50px] overflow-y-scroll">
            <div className="w-[600px] bg-gray-600/80 rounded-2xl p-[40px] overflow-y-visible">
            <div className="w-full bg-white p-[20px] flex flex-row flex-wrap justify-between rounded-xl">

                <h1 className="w-full text-3xl font-bold mb-[20px]">Add new Product</h1>

                <div className="my-[10px] w-[40%]">
                    <label >Product ID</label>
                    <input type="text" value={productId} onChange={(e)=>{setProductId(e.target.value)}} className="w-full h-[40px] border-[2px] rounded-2xl px-[20px]" />
                    <p className="text-sm text-gray-500 w-full text-right">Provide a uinque product ID</p>
                </div>

                <div className="my-[10px] w-[40%]">
                    <label >Name</label>
                    <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} className="w-full h-[40px] border-[2px] rounded-2xl px-[20px]" />
                </div>

                <div className="my-[10px] w-[40%]">
                    <label >Alternative Names</label>
                    <input type="text" value={altNames} onChange={(e)=>{setAltNames(e.target.value)}} className="w-full h-[40px] border-[2px] rounded-2xl px-[20px]" />
                    <p className="text-sm text-gray-500 w-full text-right">Seperate multiple names with commas</p>
                </div>

                <div className="my-[10px] w-full">
                    <label >Description</label>
                    <textarea type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}} className="w-full border-[2px] rounded-2xl px-[20px] py-[10px]" />
                </div>

                
                <div className="my-[10px] w-[40%]">
                    <label >Price</label>
                    <input type="number" value={price} onChange={(e)=>{setPrice(e.target.value)}} className="w-full h-[40px] border-[2px] rounded-2xl px-[20px]" />
                </div>

                <div className="my-[10px] w-[40%]">
                    <label >Labelled Price</label>
                    <input type="number" value={labelledPrice} onChange={(e)=>{setLabelledPrice(e.target.value)}} className="w-full h-[40px] border-[2px] rounded-2xl px-[20px]" />
                </div>

                
                <div className="my-[10px] w-full">
                    <label >Images</label>
                    <input type="text" value={images} onChange={(e)=>{setImages(e.target.value)}} className="w-full h-[40px] border-[2px] rounded-2xl px-[20px]" />
                </div>

                     
                <div className="my-[10px] flex flex-col">
                    <label >Categary : </label>
                    <select className="w-full h-[40px] border-[2px] rounded-2xl px-[20px]" value={category} onChange={(e)=>{setCategory(e.target.value)}}>
                        <option value={"CPU"}>CPU</option>
                        <option value={"raphic Card"}>Graphic Card</option>
                        <option value={"Motherboards"}>Motherboards</option>
                        <option value={"Powersupplies"}>Powersupplies</option>
                        <option value={"RAM"}>RAM</option>
                        <option value={"Storage Devices"}>Storage Devices</option>
                        <option value={"Cooling Solutions"}>Cooling Solutions</option>
                        <option value={"Computer Cases"}>Computer Cases</option>
                        <option value={"Mouse and Keyboards"}>Mouse and Keyboards</option>
                        <option value={"Accessories"}>Accessories</option>
                        <option value={"Monitors"}>Monitors</option>
                        <option value={"Computers"}>Computers</option>
                    </select>
                </div>

                  
                <div className="my-[10px] w-[40%]">
                    <label >Brand</label>
                    <input type="text" value={brand} onChange={(e)=>{setBrand(e.target.value)}} className="w-full h-[40px] border-[2px] rounded-2xl px-[20px]" />
                </div>

                <div className="my-[10px] w-[40%]">
                    <label >Model</label>
                    <input type="text" value={model} onChange={(e)=>{setModel(e.target.value)}} className="w-full h-[40px] border-[2px] rounded-2xl px-[20px]" />
                </div>
       
                <div className="my-[10px] w-[40%]">
                    <label >Stock</label>
                    <input type="text" value={stock} onChange={(e)=>{setStock(e.target.value)}} className="w-full h-[40px] border-[2px] rounded-2xl px-[20px]" />
                </div>
  
                  <div className="my-[10px] flex flex-col w-[40%]">
                    <label >Available : </label>
                    <select className="w-full h-[40px] border-[2px] rounded-2xl px-[20px]" value={isAvailable} onChange={(e)=>{setIsAvailable(e.target.value === "true")}}>
                        <option value={"true"}>Yes</option>
                        <option value={"false"}>No</option>
                    
                    </select>
                </div>

                <div className="w-full flex flex-row justify-between my-[20px]">
                <Link to="/admin/products" className="w-[49%] h-[50px] bg-amber-300 text-white font-bold text-[20px] text-center  rounded-2xl">
                    Cancel

                </Link>

                <button onClick={addProduct} className="w-[49%] h-[50px] bg-blue-500 text-white font-bold text-[20px]  rounded-2xl">
                    Add Product

                </button>
                </div>


                
            </div>
                
            </div>
        
        </div>
    )
}