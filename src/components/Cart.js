import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

// Cart c'est le panier//

class Cart extends React.Component {
  render() {
    // à chaque fois que l'utilisateur agit sur le site çà va relancer le render
    if (this.props.cart.length === 0) {
      return (
        <div>
          <button onClick className="Votrepanierestvide">
            Votre panier est vide
          </button>
        </div>
      );
    }

    const products = []; // la constante produits est un tableau vide dans lequel on va pusher les différents élément du panier ...

    for (let i = 0; i < this.props.cart.length; i++) {
      products.push(
        <div className="produits">
          {" "}
          <li key={this.props.cart[i].id}>
            <button
              className="minusbutton"
              onClick={() => {
                // bouton onClick qui va s'incrémenter
                // key =
                this.props.onDecrement(this.props.cart[i].id);
              }}
            >
              -
            </button>
            {this.props.cart[i].quantity}
            <button
              className="plusbutton"
              onClick={() => {
                // bouton onClick qui va se décrementer
                this.props.onIncrement(this.props.cart[i].id);
              }}
            >
              +
            </button>
            <span style={{ marginLeft: "10px" }}>
              {" "}
              {this.props.cart[i].label}
            </span>
            <span style={{ marginLeft: "10px" }}>
              {" "}
              {(this.props.cart[i].price * this.props.cart[i].quantity).toFixed(
                2
              )}{" "}
            </span>
            €
          </li>{" "}
        </div>
        // to fixed = permet d'arrondir les chiffres à deux decimales
        // props cart [i] : element du panier (prix) et element du panier (quantite)
      );
    }

    let total = 0;

    // Total de ce que l'on doit payer quand on a mis nos article dans le panier
    for (let i = 0; i < this.props.cart.length; i++) {
      total =
        total + this.props.cart[i].quantity * Number(this.props.cart[i].price);
    }
    total = total + 2.5;

    //  ??????????????????????????????????????? pourquoi les prix s'affichent et se collent à la description , et comment on fait pour donner un nom à une boucle  ???????????????????????????????????

    return (
      <div>
        <div>
          <div>
            <ul>{products} </ul>

            <div className="Total">Total : {total.toFixed(2)}€</div>
          </div>
          <div className="Cart">
            <Link
              to={{
                pathname: "/Checkout",
                total: total,
                submittedCart: this.props.cart
              }}
            >
              <button onClick className="Validermonpanier">
                Valider mon panier
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Cart;

// quand l'utilisateur tape son adresse ... çà enregistre les donnees par pathname total submittedCart quand on clic sur "Valider mon Panier" çà va changer de page //
