import Vue from 'vue'
import Dashboard from './components/Dashboard'
import Connection from './components/Connection'
import './stylesheets/index.css'

const routes = {
    '/': Connection,
    '/dashboard': Dashboard,
}

const NotFound = {
    render() {
        return (
            <h1>404 Not Found</h1>
        );
    }
}

new Vue({
    el: '#app',
    data: { currentRoute: window.location.pathname },
    computed: {
        ViewComponent() {
            return routes[this.currentRoute] || NotFound
        }
    },

    render(h) {
        return h(
            this.ViewComponent
        );
    }
});
