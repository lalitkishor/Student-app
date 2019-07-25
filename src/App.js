import React from 'react';
import { Provider } from "react-redux";
import store from "./store"
import Student from "./student/view/student-home";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Provider store={store}>
      <Student />
    </Provider>
  );
}

export default App;
