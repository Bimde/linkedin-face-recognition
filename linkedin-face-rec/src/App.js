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
      Jet<br />
      <img id="jet_linkedin_pic" src="linkedin_data/pics/jet.jpeg" alt="jet_linkedin_pic" width="400px" height="auto"></img><br />
      Ellen<br />
      <img id="ellen_linkedin_pic" src="linkedin_data/pics/ellen.jpeg" alt="ellen_linkedin_pic" width="400px" height="auto"></img><br />
      Jazz<br />
      <img id="jazz_linkedin_pic" src="linkedin_data/pics/jazz.jpeg" alt="jazz_linkedin_pic" width="400px" height="auto"></img><br />
      Komal<br />
      <img id="jazz_linkedin_pic" src="linkedin_data/pics/komal.jpeg" alt="komal_linkedin_pic" width="400px" height="auto"></img><br />
      Ankita<br />
      <img id="ankita_linkedin_pic" src="linkedin_data/pics/ankita.jpeg" alt="ankita_linkedin_pic" width="400px" height="auto"></img><br />
      Umair<br />
      <img id="umair_linkedin_pic" src="linkedin_data/pics/umair.jpeg" alt="umair_linkedin_pic" width="400px" height="auto"></img><br />
      Anandini<br />
      <img id="anandini_linkedin_pic" src="linkedin_data/pics/anandini.jpeg" alt="anandini_linkedin_pic" width="400px" height="auto"></img><br />
      Sumedha<br />
      <img id="sumedha_linkedin_pic" src="linkedin_data/pics/sumedha.jpeg" alt="sumedha_linkedin_pic" width="400px" height="auto"></img><br />
      Devanshu<br />
      <img id="devanshu_linkedin_pic" src="linkedin_data/pics/devanshu.jpeg" alt="devanshu_linkedin_pic" width="400px" height="auto"></img><br />
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
