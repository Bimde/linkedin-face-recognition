import './App.css';
import FaceRec from './FaceRec'
// import {useState} from 'react'

function App() {
  return (
    <div className="App">
      <p>
        Reference pictures:
      </p>
      Bimesh<br />
      <img id="bimesh_linkedin_pic" src="linkedin_data/pics/bimesh.jpeg" alt="bimesh_linkedin_pic" width="400px" height="auto"></img><br />
      <p>
        Test pictures:
      </p>
      <img id="bimesh_test_pic" src="test_pics/bimesh.jpg" alt="bimesh_test_pic" width="400px" height="auto"></img>
      <FaceRec picId="bimesh_test_pic" />
      <img id="jet_test_pic" src="test_pics/jet.jpg" alt="bimesh_test_pic" width="400px" height="auto"></img>
      <FaceRec picId="jet_test_pic" />
    </div>
  );
}

export default App;
