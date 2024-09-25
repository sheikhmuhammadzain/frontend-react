import Header from "./assets/components/Header";
import myImg from './assets/config.png'
import myImg2 from './assets/components.png'
import myImg3 from './assets/state-mgmt.png'
function App() {
  const reactDescription = ['Fundamaentals ','Crucial','Core'];
  function getRandomInt(max){
    return Math.floor(Math.random()*(max+1))
}
  return (
    <div>
      {reactDescription.map(desc=>
        <Header name={desc}  />
      )}

      <main>
        <h2>{reactDescription[getRandomInt(2)]} to get started!</h2>
      </main>
      <img src={myImg} alt="" />
      <img src={myImg2} alt="" />
      <img src={myImg3} alt="" /> 
    </div>
  );
}

export default App;
