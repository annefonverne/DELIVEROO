import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

//il faut importer Link obbligatoirement
//Il faut mettre une div qui englobe tout dans le return
class Home extends Component {
  render() {
    return (
      <div>
        <div className="cart" />
        <Link
          className="Link"
          to={{
            pathname: "/restaurant" // quand l'utilisateur tape son adresse ... çà enregistre les donnes par pathname total submittedCart quand on clic sur Valider mon Panier çà va changer de page //
            // total: 3,
            // submittedCart: this.props.chocolat
            // transmettre des variables  // le tableau des produits
          }}
        >
          <button className="Home">Home Deliveroo</button>
          <button className="Home1">Home Deliveroo1</button>
          <button className="Home2">Home Deliveroo2</button>
          <button className="Home3">Home Deliveroo3</button>
          <button className="Home4">Home Deliveroo4</button>
          <button className="Home5">Home Deliveroo5</button>
          <button className="Home6">Home Deliveroo6</button>
          <button className="Home7">Home Deliveroo7</button>
          <button className="Home8">Home Deliveroo8</button>
          <button className="Home9">Home Deliveroo9</button>
        </Link>
      </div>
    );
  }
}

export default Home;
