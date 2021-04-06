<template>
    <div>
        <ul class="Navbar">
            <li><a class="Navbar-main" href="/dashboard">Dashboard</a></li>
            <li><a href="/">Login page</a></li>
        </ul>
        <div class="Dashboard">
            <h1>Dashboard</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Dashboard',
}
</script>

<style scoped>
.Dashboard {
    margin: 2em;
}

.Navbar {
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #424242;
}

.Navbar li {
    float: left;
}

.Navbar li a {
    display: block;
    color: #d3d3d3;
    text-align: center;
    padding: 16px;
    text-decoration: none;
}

.Navbar-main {
    font-weight: bold;
}
</style>
