import { LitElement, css, html } from "lit";
import { LionButton, LionButtonReset, LionButtonSubmit } from '@lion/ui/button.js';
import { LionInputEmail } from '@lion/ui/input-email.js';
import { LionInput } from '@lion/ui/input.js';
import { navigator } from "lit-element-router";

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
        this.defaultValidators.pop();
    }

    static get styles() {
      return [
        super.styles,
        css`
          /* your styles here */
          
          :host {
            width: autO;
            margin-bottom: -0px;
            padding: 15px;
          }
        `,
      ];
    }
}

class MyInput extends LionInput {
    static get styles() {
      return [
        super.styles,
        css`
          /* your styles here */
          :host {
            width: auto;
            margin-bottom: -0px;
            padding-left: 15px;
            padding-right: 15px;
          }
        `,
      ];
    }
}

customElements.define('my-input', MyInput);
customElements.define('my-button', MyButton);
customElements.define('my-email-input', MyEmailInput);


class Login extends navigator(LitElement) {
    

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
                width: 15vw;
                padding-bottom: 5vh; 
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
        `;
    }

    

    render() {
        const custom_button = html` <lion-button>Default</lion-button> `;

        const login = html `
            <h2 class="title">Login</h2>
            <my-input id="email" type="email" placeholder="Write your email"> </my-input>
            <my-input id="password" type="password" placeholder="Password"> </my-input>
            
            <my-button @click="${this._login}">Sign In</my-button>
        `;

        const user_details = html `
            <h2 class="title">User Details</h2>
            <h4 class="title">EMAIL: ${this.email}</h4>
            <my-button @click="${this._logout}">Sign Out</my-button>
        `;

        this.custom_render = this.email === '' ? login : user_details;


        return html`
            <div class="flex-container">
                <div class="container">
                    ${this.custom_render}
                </div>
            </div>
        `;
    }

    _logout(e) {
        localStorage.removeItem('email');
        this.email = '';
    }

    _login(e) {
        const email = this.shadowRoot.querySelector("#email").value;
        const pass = this.shadowRoot.querySelector("#password").value;

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            console.log(email);
            if (pass.length > 6) {
                e.preventDefault();

                // TO DO: If we want to have different pages, I also did  the setup
                // for navigator; I won't delete that in case it's need in the future
                // this.navigate('/user-details');

                localStorage.setItem("email", email);
                this.email = email;
            } else {
                alert("You have entered a password too short!")
                return (false);
            }
        } else {
            alert("You have entered an invalid email address!")
            return (false);
        }
    }


    static get properties() {
        return {
            email: {},
            custom_render: {}
        }
        
    }
    constructor() {
        super();
        this.email = localStorage.getItem("email") ?  localStorage.getItem("email") : "";
    }
}

customElements.define("login-page", Login);