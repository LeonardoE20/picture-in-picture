const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    // setting const that will have media stream data, waiting to assign until user selects which screen or window they want to share. navigator.mediaDevices is a web API
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
// using and triggering the button to start the picture in picture api functionality instead of using it in the video element (video player) in the options menu
button.addEventListener('click', async () => {
  // Disable Button when we click on it
  button.disabled = true;
  // Start Picture in Picture by waiting the video element to request the api and not do anything else until that happens
  await videoElement.requestPictureInPicture();
  // Reset Button, will happen if we successfully request our picture in picture; if not our button will remain disabled
  button.disabled = false;
});

// On Load
selectMediaStream();