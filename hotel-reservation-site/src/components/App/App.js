import React from 'react';
import Layout from '../Layout/Layout';
import SearchPannel from '../SearchPannel/SearchPannel';
import { Provider } from "react-redux";
import store from '../redux/store';
import RoomsData from '../RoomsData';

const App = () => {
  return (
    <Provider store={store}>
      <RoomsData></RoomsData>
    </Provider>
  )
}
export default App