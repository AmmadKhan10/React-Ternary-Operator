import './App.css'
import Challenge1 from './Components/Challenge1'
import Challenge2 from './Components/Challenge2'
import Challenge3 from './Components/Challenge3'

function App() {
 
  
  return (
    <>
    <div>
      <h1>Question No 01</h1>
    <ul>
    <h2>Sally Ride's Packing List</h2>
        <Challenge1
        isPacked={true} 
        name="Space suit" 
      />
      <Challenge1 
        isPacked={true} 
        name="Helmet with a golden leaf" 
      />
      <Challenge1 
        isPacked={false} 
        name="Photo of Tam" 
      />
    </ul>
    </div>

    <div>
    <h1>Question No 02</h1>
      <ul>
      <h2>Sally Ride's Packing List</h2>
        <Challenge2 
          importance={9} 
          name="Space suit" 
        />
        <Challenge2 
          importance={0} 
          name="Helmet with a golden leaf" 
        />
        <Challenge2
          importance={6} 
          name="Photo of Tam" 
        />
      </ul>
      </div>
      
      <div>
      <h1>Question No 03</h1>
      <Challenge3 name1="tea" />
      <Challenge3 name1="coffee" />
    </div>
    </>
  )
}

export default App;
