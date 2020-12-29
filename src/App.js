import logo from './logo.svg';
import './App.css';
import Student  from './Student.js';
import ReactDOM from 'react-dom';


function App() {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }

  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  return (
    <div className="App">
      <header className="App-header">
      <h2>My App content of AWS Amplify</h2>
      <Student />
      <form>
      <h1>Hello {this.state.username}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        onChange={this.myChangeHandler}
      />
      </form>
      </header>
    </div>
  );
}

export default App;
