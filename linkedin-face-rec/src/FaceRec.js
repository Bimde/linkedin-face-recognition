import { useEffect, useState } from 'react'
import * as faceapi from 'face-api.js';

const LINKEDIN_INFO_FILE = "linkedin_data/info/info.json"

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

const loadFaces = async (picId, setStatusLabel, setFaceMatch, faceMatcher) => {
  setStatusLabel('Comparing face')
  // Load test pic and get descriptors
  const singleResult = await faceapi
    .detectSingleFace(picId)
    .withFaceLandmarks()
    .withFaceDescriptor()


  var result = null;
  setTimeout(function() {
    // Compare descriptors
    if (singleResult) {
      const bestMatch = faceMatcher.findBestMatch(singleResult.descriptor)
      console.log(bestMatch)
      result = bestMatch.label
    }
    console.log(result)
    setStatusLabel('Loading LinkedIn Info')
  }, 1000);

  const displayResult = async (result) => {
    // Map result to a LinkedIn profile
    if (result !== null && result !== 'unknown') {
      var linkedInInfo = await loadInfo()
      console.log('linkedin info')
      setFaceMatch(linkedInInfo[result])
      setStatusLabel('Face match complete!')
    } else {
      setStatusLabel('No match found')
    }
  }

  setTimeout(function() {
    displayResult(result)
  }, 3000);
}

function FaceRec({ picId, faceMatcher }) {
  const [statusLabel, setStatusLabel] = useState("");
  const [faceMatch, setFaceMatch] = useState(null);

  useEffect(() => {
    loadFaces(picId, setStatusLabel, setFaceMatch, faceMatcher)
  }, [picId, faceMatcher]);

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