<template>
    <div class="Connection">
        <h1>Sign In</h1>
        <InputField type="email" placeholder="Email" @changed="changeEmail" />
        <InputField type="password" placeholder="Password" @changed="changePassword" />
        <InputButton text="Sign In" @clicked="checkInputs" />
        <InputButton text="I don't have an account" @clicked="updateSignIn" />
    </div>
</template>

<script>
import Account from '../../services/Account'
import { InputField, InputButton } from '../Inputs'

export default {
    name: 'SignIn',
    components: { InputField, InputButton },
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        changeEmail(email) {
            this.email = email;
        },

        changePassword(password) {
            this.password = password;
        },

        updateSignIn() {
            this.$emit('updateSignIn');
        },

        checkInputs() {
            if (!!this.email && !!this.password) {
                Account.login({
                    email: this.email,
                    password: this.password,
                }).then(res => {
                    console.log(res);
                }).catch(err => {
                    console.error(err);
                });
            } else {
                console.log('Impossible');
            }
        }
    }
}
</script>

<style scoped>
.Connection {
    text-align: center;
    margin: 0 auto;
    margin-top: 12em;
    padding-top: 6em;
    height: 28em;
    width: 26em;
    border-radius: 120px;
    box-shadow: 0px 0px 120px 20px rgba(0,0,0,0.35);
}

.Connection button {
    margin-top: 1em;
    background-color: #d3d3d3;
    color: #424242;
    border: none;
    border-radius: 8px;
    padding: 12px 0px;
    width: 200px;
    text-decoration: none;
    display: inline-block;
}

.Connection button:hover {
    background-color: #424242;
    color: #d3d3d3;
}

.Connection input {
    margin-top: 1em;
    width: 200px;
}
</style>