<template>
    <div class="Connection">
        <h1>Sign In</h1>
        <InputField type="email" value="" placeholder="Email" />
        <InputField type="password" value="" placeholder="Password" />
        <InputButton text="Sign In" />
        <InputButton text="I don't have an account" />
    </div>
</template>

<script>
import { InputField, InputButton } from '../Inputs'

export default {
    name: 'SignIn',
    components: { InputField, InputButton }
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