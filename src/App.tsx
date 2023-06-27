import './App.css';
import { SplitScreen } from './components/SplitScreen';
import { LeftComponent } from './components/LeftComponent';
import { RightComponent } from './components/RightComponent';


function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={2}>
      <LeftComponent name='Saif'/>
      <RightComponent />
    </SplitScreen>
  );
}

export default App;
