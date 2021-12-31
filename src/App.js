import './App.css';
import { Component1 } from './component-1/index';
import { EnhancedComponent2 } from './component-2/index';
import { Hoc } from './hoc/index';

// const TestHoc = Hoc(Component2);

function App() {
  return (
    <div className='App'>
      <Component1 />
      {/* <Component2 /> */}
      {/* <TestHoc /> */}
      <EnhancedComponent2 />
    </div>
  );
}

export default App;
