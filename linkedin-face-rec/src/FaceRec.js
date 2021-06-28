import { useEffect, useState } from 'react'
import * as faceapi from 'face-api.js';

const loadFaces = async (picId, setFaceMatchLabel) => {
  // Load models
  setFaceMatchLabel('Loading models')
  await faceapi.nets.ssdMobilenetv1.loadFromUri('models')
  await faceapi.nets.faceRecognitionNet.loadFromUri('models')
  await faceapi.nets.faceLandmark68Net.loadFromUri('models')


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
  const singleResult = await faceapi
    .detectSingleFace(picId)
    .withFaceLandmarks()
    .withFaceDescriptor()

  setFaceMatchLabel('Creating descriptors...')

  // Compare descriptors
  var result;
  if (singleResult) {
    const bestMatch = faceMatcher.findBestMatch(singleResult.descriptor)
    console.log(bestMatch)
    result = "^ Detected person (distance): " + bestMatch.toString()
  } else {
    result = "No match found"
  }

  console.log(result)
  setFaceMatchLabel(result)

}

function FaceRec({ picId }) {
  const [faceMatch, setFaceMatch] = useState("");

  useEffect(() => {
    loadFaces(picId, setFaceMatch)
  }, [picId]);

  return (
    <div>
      <p>{faceMatch}</p>
    </div>
  );
}

export default FaceRec;