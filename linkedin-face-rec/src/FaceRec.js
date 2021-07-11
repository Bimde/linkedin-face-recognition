import { useEffect, useState } from 'react'
import * as faceapi from 'face-api.js';

const LINKEDIN_INFO_FILE = "linkedin_data/info/info.json"

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

const loadInfo = async () => {
  var response = await fetch(LINKEDIN_INFO_FILE, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  var json = await response.json()
  console.log(json)
  return json
}

const loadFaces = async (picId, setStatusLabel, setFaceMatch) => {
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
  const faceMatcher = new faceapi.FaceMatcher(labeledDescriptors)

  // Load test pic and get descriptors
  const singleResult = await faceapi
    .detectSingleFace(picId)
    .withFaceLandmarks()
    .withFaceDescriptor()

  // Compare descriptors
  var result = null;
  if (singleResult) {
    const bestMatch = faceMatcher.findBestMatch(singleResult.descriptor)
    console.log(bestMatch)
    result = bestMatch.label
  }
  console.log(result)

  // Map result to a LinkedIn profile
  setStatusLabel('Loading LinkedIn Info')
  if (result !== null && result !== 'unknown') {
    var linkedInInfo = await loadInfo()
    console.log('linkedin info')
    setFaceMatch(linkedInInfo[result])
    setStatusLabel('Face match complete!')
  } else {
    setStatusLabel('No match found')
  }
}

function FaceRec({ picId }) {
  const [statusLabel, setStatusLabel] = useState("");
  const [faceMatch, setFaceMatch] = useState(null);

  useEffect(() => {
    loadFaces(picId, setStatusLabel, setFaceMatch)
  }, [picId]);

  return (
    <div>
      <p>{!faceMatch && statusLabel}</p>
      <p>{faceMatch && faceMatch.name}</p>
      <p>{faceMatch && faceMatch.headline}</p>
      <p>{faceMatch && <a href={faceMatch.url}>{faceMatch.url}</a>}</p>
    </div>
  );
}

export default FaceRec;