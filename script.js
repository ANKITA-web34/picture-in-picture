const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//prompt to select meadia stream 

async function selectMediaStream() {
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        };    
    }catch (error){
        console.log('hrrrr', error);
    }
}

button.addEventListener('click', async () => {
    //disable button
    button.disable = true;
    
    //start picture in picture
    await videoElement.requestPictureInPicture();

    //reset button
    button.disable = true;
});

//onLoad
selectMediaStream();

