import { LitElement, html, css } from 'lit';
import { router } from 'lit-element-router';

import "./login"

class App extends router(LitElement) {
  static get styles() {
    return [
      css`
        /* your styles here */
        
        :host {
          height: 100vh;
          width: 100vw;
          background-color: #f5eec2;
        }
      `,
    ];
  }
  static properties = {
    route: {},
  };

  static get routes() {
    return [{
      name: 'login',
      pattern: 'login',
    }];
  }

  constructor() {
    super();
    this.route = '';
  }

  router(route, data) {
    this.route = route;
    console.log(route, data);
  }

  render() {
    // TO DO: If we want to have different pages, I also did  the setup
    // for navigator; I won't delete that in case it's need in the future
    return html`
      <router-outlet active-route=${this.route}>
        <login-page route="login"></login-page>
        <user-details route="user-details"></user-details>
      </router-outlet>
    `;
  }
}

customElements.define('my-app', App);