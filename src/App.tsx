import './App.css';

import {LargePersonList} from './components/people/LargePersonList';
import { withUser } from './components/withUser';
import {UserInfoForm} from "./components/UserInfoForm";
const UserInfoWrapper = withUser(LargePersonList,'4')


function App() {
  return (
    <UserInfoForm />
  );
}

export default App;

