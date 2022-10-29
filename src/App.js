import logo from './logo.svg';
import './App.css';

function App() {
  return (
  
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div  className="app">
      <div id="profile section">
        <p className="profile"><img  src ="profile_picture2.jpeg" alt="profile picture" id="profile_img"></img></p>
        <p id="twitter"> Wangui Resper</p>
        <p id="slack"> Risper Wangui</p>
      </div>
      <div id="links section">
        <div>
          <a href="https://training.zuri.team/"  target="_blank">
          <button id="btn_zuri"> Zuri Team </button>
          </a>
        </div>
        <div>
          <a href="http://books.zuri.team"  target="_blank">
            <button id="books">
              Zuri Books
            </button>
          </a>
        </div>
        <div>
          <a href="https://books.zuri.team/python-for-beginners?ref_id=<Risper Wangui>"  target="_blank">
            <button id="book_python">
              Beginners for python
            </button>
          </a>
        </div>
        <div>
          <a href="https://background.zuri.team"  target="_blank">
            <button id="pitch">
              Background check on coders
            </button>
          </a>
        </div>
        <div>
          <a href="https://books.zuri.team/design-rules"  target="_blank">
            <button id="book_design">
              Design book
            </button>
          </a>
        </div>
    </div>
    </div>
  
  )
}

export default App;
