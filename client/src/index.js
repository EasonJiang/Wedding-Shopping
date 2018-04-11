import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { overrideComponentTypeChecker } from 'react-toolbox';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/sotre/store';
import Home from './container/Home';
import '../ReactotronConfig'


const rootEl = document.getElementById('app');

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <BrowserRouter>
                <Provider store={store}>
                    <Home />
                </Provider>
            </BrowserRouter>
        </AppContainer>,
        rootEl
    );
};

if (process.env.NODE_ENV !== 'production') {
    overrideComponentTypeChecker((classType, reactElement) => (
        reactElement && (
            reactElement.type === classType
            || reactElement.type.name === classType.displayName
        )
    ));
    if (module.hot) {
        module.hot.accept('./index.js', render);
    }
}

render();

