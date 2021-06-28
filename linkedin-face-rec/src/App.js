import './App.css';
import FaceRec from './FaceRec'

function App() {
  return (
    <div className="App">
      <img id="bimesh_linkedin_pic" src="/linkedin_data/pics/bimesh.jpeg" alt="bimesh_linkedin_pic" width="400px" height="auto"></img>
      <img id="bimesh_test_pic" src="test_pics/bimesh.jpg" alt="bimesh_test_pic" width="400px" height="auto"></img>
      <FaceRec/>
    </div>
  );
}

export default App;
