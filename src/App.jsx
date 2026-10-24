import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import AdminPage from "./pages/adminPage";
import ProductsPage from "./pages/productsPage";
import AboutPage from "./pages/aboutPage";
import ContactsPage from "./pages/contactsPage";
import { Toaster } from "react-hot-toast";


function App(){
  return(

    <BrowserRouter>

    {/* React-hot-toast notification library */}
    <Toaster position="top-right"/>
     <div className="w-full h-screen bg-primary">
    

      <Routes>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/admin/*" element={<AdminPage/>}/>
        <Route path="/products" element={<ProductsPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contacts" element={<ContactsPage/>}/>
        <Route path="/*" element={<h1>Page Not Found</h1>}/>

      </Routes>

     </div>
    </BrowserRouter>
   
  );
}


export default App;