const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    // setting const that will have media stream data, waiting to assign until user selects which screen or window they want to share
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    // passing that mediastream into video object as its source object.
    videoElement.srcObject = mediaStream;
    // when video loads its metadata it will call a function that will call and play a video
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }
  } catch (error) {
    // Catch Error Here
  }
}

button.addEventListener('click', async () => {
  // Disable Button
  button.disabled = true;
  // Start Picture in Picture
  await videoElement.requestPictureInPicture();
  // Reset Button
  button.disabled = false;
});

// On Load
selectMediaStream();