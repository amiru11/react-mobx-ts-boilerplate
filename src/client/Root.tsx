import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';

import App from 'shared/App';
import RootStore from 'stores';

const stores = new RootStore();

class Root extends Component {
  render() {
    return (
      <Provider {...stores}>
        <BrowserRouter>
          <Route path="/" component={App} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Root;
