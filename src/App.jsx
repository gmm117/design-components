import React from 'react';
import TextFieldComponents from './components/TextFiled';
import CheckboxContainers from './containers/CheckboxContainers';
import RadioContainer from './containers/RadioContainer';

function App() {
  return (
    <>
      <CheckboxContainers />
      <RadioContainer />
      <TextFieldComponents />
    </>
  );
}

export default App;
