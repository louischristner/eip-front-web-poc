<template>
    <div>
        <SignIn v-if="signIn" @updateSignIn="updateSignIn" />
        <SignUp v-else @updateSignIn="updateSignIn" />
    </div>
</template>

<script>
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';

export default {
    name: 'Connection',
    components: { SignIn, SignUp },
    data: function() {
        return {
            signIn: true
        }
    },
    methods: {
        updateSignIn() {
            this.signIn = !this.signIn;
        }
    }
}
</script>

<style>
.Connection {
    text-align: center;
    margin: 0 auto;
    margin-top: 12em;
    padding-top: 6em;
    height: 28em;
    width: 22%;
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
