import React from 'react';
import PropTypes from 'prop-types';

import ApiList from './components/ApiList';


function App() {
  return (
    <div className="container">
      <ApiList />
    </div>
  );
}

App.propTypes = {
  ApiList: PropTypes.element,
};

export default App;
