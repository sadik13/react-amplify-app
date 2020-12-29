import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2>My App content of AWS Amplify</h2>
      </header>
    </div>
  );
}

export default  withAuthenticator(App);
