/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import './Cart.css'

// eslint-disable-next-line no-unused-vars
const Cart = ({selectedActors,  reaming, totalCost }) => {
    console.log(selectedActors)
    return (
        <div className='cart-section'>
            <h2>Total Actor : {selectedActors.length}</h2>
            <h4>Reaming : {reaming}</h4>
            <h4>TotalCost : {totalCost}</h4>
            {
                selectedActors.map(actor => (
                    <li key={actor.id}>{actor.name}</li>
                ))
            }
        </div>
    );
};

export default Cart;