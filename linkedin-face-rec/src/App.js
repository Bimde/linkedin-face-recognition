import { Component } from 'react';
import './App.css';
import FaceRec from './FaceRec';
import UploadPic from './UploadPic';
import Picture from './Picture'

class App extends Component {
  render() {
  return (
    <div className="App">
      <UploadPic />
      <p>
        Test pictures:
      </p>
      <Picture id="bimesh" is_test={true} display={true}/>
      <FaceRec picId="bimesh_test_pic"/>
      <Picture id="jet" is_test={true} display={true}/>
      <FaceRec picId="jet_test_pic"/>

      {/* Reference pictures */}
      <Picture id="bimesh"/>
      <Picture id="jet"/>
      <Picture id="ellen"/>
      <Picture id="jazz"/>
      <Picture id="komal"/>
      <Picture id="ankita"/>
      <Picture id="umair"/>
      <Picture id="anandini"/>
      <Picture id="sumedha"/>
      <Picture id="devanshu"/>

      {/* <img id="bimesh_test_pic" src="test_pics/bimesh.jpg" alt="bimesh_test_pic" width="400px" height="auto"></img>
      <img id="jet_test_pic" src="test_pics/jet.jpg" alt="bimesh_test_pic" width="400px" height="auto"></img> */}
    </div>
  );
  }
}

export default App;
