import { LitElement, css, html } from "lit";
import { navigator } from "lit-element-router";

class UserDetails extends navigator(LitElement) {
    // TO DO: If we want to have different pages, I also did  the setup
    // for navigator; I won't delete that in case it's need in the future
    render() {
        return html`
          <h1>USER DETAILS</hq>
        `;
      }
}

customElements.define("user-details", UserDetails);