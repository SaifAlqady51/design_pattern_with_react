import './App.css';
import { SplitScreen } from './components/SplitScreen';


const LeftComponent  = () => {
  return <h1 style={{backgroundColor:'wheat'}}>LEFT</h1>
}

const RightComponent = () => {
  return <h1 style={{backgroundColor:'teal'}}>RIGHT</h1>
}

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={2}>
      <LeftComponent />
      <RightComponent />
    </SplitScreen>
  );
}

export default App;
