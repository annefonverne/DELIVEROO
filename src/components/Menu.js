import React, { Component } from "react";
import MenuSection from "./MenuSection";
import Cart from "./Cart";
import "./Menu.css";
// on tape dans localhost:3000/MenuSection après un npm start on arrive sur la page Deliveroo

class Menu extends Component {
  // un class est une collection variable et de fonction: render
  render() {
    let menuSectionsComponents = []; // on doit placer cette variable dans la fonction pour que la boucle for puisse la lire
    const entries = Object.entries(this.props.menu);
    for (let i = 0; i < entries.length; i++) {
      menuSectionsComponents.push(
        <MenuSection
          addItem={this.props.addItem} // addItem est une props : quand un utilisateur ajoute un élement item dans le panier ....
          key={i}
          label={entries[i][0]}
          menuItems={entries[i][1]}
        />
      );
    }

    return (
      <div className="menu-background">
        <div className="menu">
          <div className="Zizou">{menuSectionsComponents}</div>
          <div className="cart-container">
            <Cart
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              cart={this.props.cart}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
