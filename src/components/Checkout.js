import React from "react";
import Axios from "axios";

class Checkout extends React.Component {
  state = {
    address: "",
    name: ""
  };

  render() {
    // React Router va créer un objet this.props.location
    console.log(this.props.location.total);

    return (
      <div>
        <h2>Adresse de livraison</h2>
        <form
          onSubmit={() => {
            alert(this.state.address);
            // axios.post("", {});
          }}
        >
          <input
            type="text"
            placeholder="Adresse"
            onChange={event => {
              this.setState({
                // event : Evenement déclenché
                // target : La balise html qui a déclenché l'évènement
                // value : La valeur du champs
                address: event.target.value
              });
            }}
            value={this.state.address}
          />

          <input
            type="text"
            placeholder="Name"
            onChange={event => {
              this.setState({
                name: event.target.value
              });
            }}
            value={this.state.name}
          />

          <button type="submit">Valider</button>
        </form>
      </div>
    );
  }
}

export default Checkout;
