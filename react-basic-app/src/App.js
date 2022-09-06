import './App.css';
import Filter from './components/Filter';
import Products from './components/Products';

function App() {
  function formatName(username){
    return username.toUpperCase();
  }

  function getGreeting(username){
    if (username) {
      return <h1>Hello {formatName(username)}</h1>;
    } else {
      return <h1>Hello Stranger</h1>;
    }
  }
  const name = "Darcy";
  const element = (
    <div className='grid-container'>
      <header>
        <div className='navbar'>
          <a href='/'>MiniShopping</a>
          <img src='cart-icon.png' alt=' '
                width={"45px"}></img>
          <div className='dropdown-list'>
            <button width={"45px"}>username</button>
            <div className='dropdown-content'>
              <a href='/'>Sell Product</a>
              <a href='/'>history</a>
            </div>
          </div>
        </div>
      </header>
      <main>
      <h3>Hello {formatName(name)}!</h3>
      <p>Good to see you</p>
      <Filter />
      <hr></hr>
      <Products />
      </main>
      <footer>All right is reserved.</footer>
    </div>
  );

  return (
    element
  );
}

export default App;
