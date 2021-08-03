import './App.css';
import {Result} from '../Result/Result';
import {Pad} from '../Pad/Pad';

export const App = (props) => {
  return (
    <div className="calc-body">
      <Result />
      <Pad />
    </div>
  );
}

export default App;
