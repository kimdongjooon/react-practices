import './assets/css/App.css';

function App() {
    const App = document.createElement('div');
    App.textContent = "weppack.ex04 - Hello Webpack";
    App.className = "Header";
    return App;
}

export{App};