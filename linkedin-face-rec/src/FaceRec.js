import { useEffect, useState } from 'react'
import * as faceapi from 'face-api.js';

// Note that the 
const loadFaces = async (setFaceMatchLabel) => {
  // Load models
  setFaceMatchLabel('Loading models')
  await faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
  await faceapi.nets.faceRecognitionNet.loadFromUri('/models')
  await faceapi.nets.faceLandmark68Net.loadFromUri('/models')


  // Create face matcher using reference image
  setFaceMatchLabel('Creating descriptors')

  const referenceImage = 'bimesh_linkedin_pic'
  const bimeshLinkedInPic = await faceapi
    .detectAllFaces(referenceImage)
    .withFaceLandmarks()
    .withFaceDescriptors()

  const labeledDescriptors = [
    new faceapi.LabeledFaceDescriptors(
      'Bimesh',
      [bimeshLinkedInPic[0].descriptor]
    )
  ]
  const faceMatcher = new faceapi.FaceMatcher(labeledDescriptors)

  // Load test pic and get descriptors
  const bimeshTestImage = 'bimesh_test_pic'
  const singleResult = await faceapi
    .detectSingleFace(bimeshTestImage)
    .withFaceLandmarks()
    .withFaceDescriptor()

    setFaceMatchLabel('Creating descriptors...')

  // Compare descriptors
  var result;
  if (singleResult) {
    const bestMatch = faceMatcher.findBestMatch(singleResult.descriptor)
    console.log(bestMatch)
    result = "Detected person (distance): " + bestMatch.toString()
  } else {
    result = "No match found"
  }

  console.log(result)
  setFaceMatchLabel(result)

}

function FaceRec(props) {
  const [faceMatch, setFaceMatch] = useState("");

  useEffect(() => {
    loadFaces(setFaceMatch)
  }, []);

  return (
    <div>
      <h3>FaceRec!</h3>
      <p>{faceMatch}</p>
    </div>
  );
}

export default FaceRec;