export default function ProductCard(props) {

    return(
        <div>
        <h1>Item Name:{props.name}</h1>
        <img src={props.image} />
        <p>Price LKR :{props.price}</p>
        </div>
    );
}