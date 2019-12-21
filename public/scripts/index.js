const videoModel = document.getElementById('videoModel');
const videoFrame = document.getElementById("videoFrame");
const videoTitle = document.getElementById("videoTitle");

function openVideoModel(id, title) {
    videoFrame.src = ("https://" + id);
    videoTitle.innerHTML = title;
    videoModel.style.display='block';
}

function closeVideoModel(video) {
    videoModel.style.display='none';
    videoFrame.src = "";
}