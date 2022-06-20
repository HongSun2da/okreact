import Comp from './components/Comp.jsx';

function App(props) {
  const list = ['hello1_1', 'hello2_2', 'hello3_3', 'hello4_4'];
  return (
    <div className="App">
      <h1>Main</h1>
      {list.map((item, index) => (
        <Comp value={item} key={index} />
      ))}
    </div>
  );
}

export default App;
