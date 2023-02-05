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
    return html`
      <router-outlet active-route=${this.route}>
        <login-page route="login"></login-page>
      </router-outlet>
    `;
  }

  // render() {
  //   return html`
  //     <h1>Dece</h1>
  //     <login></login>
  //   `
  // }
}

customElements.define('my-app', App);