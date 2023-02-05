import { LitElement, css, html } from "lit";
import { LionButton, LionButtonReset, LionButtonSubmit } from '@lion/ui/button.js';
import { LionInputEmail } from '@lion/ui/input-email.js';

class MyButton extends LionButton {
    

    static get styles() {
      return [
        super.styles,
        css`
          /* your styles here */
          
          :host {
            background-color: #f5eec2;
            height: 40px;
            color: #414141;
            border: none;
            border-radius: 6px;
            margin-top: 8vh;
            padding: 20px;
            text-align: center;
          }
        `,
      ];
    }

    
}

class MyEmailInput extends LionInputEmail {
    constructor() {
        super();
        this.defaultValidators.pop().config.getMessage = async() => 'Error';
    }

    static get styles() {
      return [
        super.styles,
        css`
          /* your styles here */
          
          :host {
            width: 90%;
            margin-bottom: -0px;
            padding: 10px;
          }
        `,
      ];
    }
}


customElements.define('my-button', MyButton);
customElements.define('my-email-input', MyEmailInput);


class Login extends LitElement {
    

    static get styles() {
        return css`
            .flex-container {
                height: 100%;
                padding: 0;
                margin: 0;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .container {
                border: solid 3px;
                border-radius: 10px;
                width: auto;
                height: 35vh;
                text-align: center;
                margin-left: auto;
                margin-right: auto;
                background-color: #a9c25d;
            }
            .title {
                color: #39395f;
            }
            input {
                width: 90%;
                height: 30px;
                margin-top: 5vh;
                border: solid 1px #414141;
                border-top: 0px;    
                border-radius: 5px;
            }
            button {
                
            }
            button:hover {
                background: #0da35d;
                cursor: pointer;
            }
        `;
    }

    

    render() {
        const custom_button = html` <lion-button>Default</lion-button> `;

        return html`
            <div class="flex-container">
                <div class="container">
                    <h2 class="title">Login</h2>
                    <my-email-input id="email" placeholder="Write your email"> </my-email-input>
                    <input id="password" type="password" placeholder="Password">
                    
                    <my-button @click="${this._login}">Sign In</my-button>
                </div>
            </div>
        `;
    }

    _login() {
        const email = this.shadowRoot.querySelector("#email").value;
        const pass = this.shadowRoot.querySelector("#password").value;

        console.log(email);
    }


    static get properties() {
        return {
        
        };
    }
    constructor() {
        super();
    }
}

customElements.define("login-page", Login);