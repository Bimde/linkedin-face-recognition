import { useEffect, useState } from 'react'
import FaceRec from './FaceRec';
import UploadPic from './UploadPic';
import Picture from './Picture'
import * as faceapi from 'face-api.js';

// Detect face in a single image and return a LabeledFaceDescriptor
const addReferenceImage = async (name) => {
  const referenceImageId = name + '_linkedin_pic'
  const linkedInPicFaces = await faceapi
    .detectAllFaces(referenceImageId)
    .withFaceLandmarks()
    .withFaceDescriptors()
  return new faceapi.LabeledFaceDescriptors(
    name,
    [linkedInPicFaces[0].descriptor]
  )
}

const buildFaceMatcher = async (setStatusLabel, setFaceMatcher, setModelsLoaded) => {
  // Load models
  setStatusLabel('Loading models')
  await faceapi.nets.ssdMobilenetv1.loadFromUri('models')
  await faceapi.nets.faceRecognitionNet.loadFromUri('models')
  await faceapi.nets.faceLandmark68Net.loadFromUri('models')

  // Create face matcher using reference images
  setStatusLabel('Creating descriptors')

  const referenceNames = ['bimesh', 'jet', 'ellen', 'jazz', 'komal', 'ankita', 'umair', 'anandini', 'sumedha', 'devanshu']
  const labeledDescriptors = []

  for (var i = 0; i < referenceNames.length; i++) {
    console.log("name: " + referenceNames[i])
    labeledDescriptors.push(await addReferenceImage(referenceNames[i]))
  }
  setFaceMatcher(new faceapi.FaceMatcher(labeledDescriptors))
  setTimeout(function() {
    setModelsLoaded(true)
  }, 5000)
}

const imgToImgSrc = async (imgFile, setPicSrc) => {
  const img = await faceapi.bufferToImage(imgFile); 
  setPicSrc(img.src)
}

function DisplayImages(props) {
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const [statusLabel, setStatusLabel] = useState("");
  const [faceMatcher, setFaceMatcher] = useState(null);
  const [pics, setPics] = useState(null);
  const [picSrc, setPicSrc] = useState(null);

  useEffect(() => {
    buildFaceMatcher(setStatusLabel, setFaceMatcher, setModelsLoaded);
  }, []);

  useEffect(() => {
    if (!pics) {
      setPicSrc(null);
      return;
    }
    imgToImgSrc(pics[0], setPicSrc);
    console.log(pics[0]);
  }, [pics]);

  return (
    <div>
      {picSrc && pics && <Picture id={pics[0].name} is_test={true} path_override={picSrc}/>}
      <p>{!modelsLoaded && statusLabel}</p>
      {modelsLoaded && <UploadPic setPics={setPics} />}
      {picSrc && pics && <FaceRec picId={pics[0].name + "_test_pic"} is_test={true} faceMatcher={faceMatcher} />}
      {/* modelsLoaded && <p>Test pictures:</p>}
      {{modelsLoaded && <Picture id="bimesh" is_test={true} display={true} />}
      {modelsLoaded && <FaceRec picId="bimesh_test_pic" faceMatcher={faceMatcher} />}
      {modelsLoaded && <Picture id="jet" is_test={true} display={true} />}
      {modelsLoaded && <FaceRec picId="jet_test_pic" faceMatcher={faceMatcher} />} */}

      {/* Reference pictures */}
      <Picture id="bimesh" />
      <Picture id="jet" />
      <Picture id="ellen" />
      <Picture id="jazz" />
      <Picture id="komal" />
      <Picture id="ankita" />
      <Picture id="umair" />
      <Picture id="anandini" />
      <Picture id="sumedha" />
      <Picture id="devanshu" />
    </div>
  );
}

export default DisplayImages;