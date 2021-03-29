import './App.css';
import Button from './components/common/Button/button'

const App = () => {
  const handleClick = () => {
    console.log('click')
  }
  return (
    <div className="App">
      <div className="header-list">
        <Button text="Documents" aria="simple-menu" handleClick={handleClick} />
        <Button text="Referal Manager" aria="simple-menu" handleClick={handleClick} />
        <Button text="Services" aria="simple-menu" handleClick={handleClick} />
        <Button text="Directories" aria="simple-menu" handleClick={handleClick} />
        <Button text="Reports" aria="simple-menu" handleClick={handleClick} />
        <Button text="Manager" aria="simple-menu" handleClick={handleClick} />
        <hr />
      </div>
    </div>
  );
}

export default App;
