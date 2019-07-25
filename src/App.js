import React from 'react';
import { Provider } from "react-redux";
import store from "./store"
import Main from "./route";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
