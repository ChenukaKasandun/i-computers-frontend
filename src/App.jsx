import "./App.css";
import ProductCard from "./components/productCard";



function App(){
  return(
    <>
       <ProductCard name="Laptop" price="100,000.00" image="https://picsum.photos/id/1/200/300"/>
       <ProductCard name="Desktop" price="90,000.00" image="https://picsum.photos/id/2/200/300"/>
       <ProductCard name="Mobile Phone" price="70,000.00" image="https://picsum.photos/id/3/200/300"/>
       <ProductCard name="Calculator" price="20,000.00" image="https://picsum.photos/id/4/200/300"/>
       <ProductCard name="Ipad" price="200,000.00" image="https://picsum.photos/id/5/200/300"/>
    </>

  );
}


export default App;