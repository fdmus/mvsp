function loadVideo_1() {
    
    const button = document.getElementById('check_bt_1');
    button.innerHTML = '加载中'; // 更改按钮内容为"正在加载中"
    const apiUrl = 'https://v.api.aa1.cn/api/api-video-gaoxiao/index.php?aa1=json';
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const videoUrl = data.mp4;

            const videoElement = document.getElementById('videoPlayer');
            videoElement.src = videoUrl;
            videoElement.autoplay = true;
            const videoContainer = document.getElementById('video-container');
            videoContainer.innerHTML = ''; // 清空容器
            videoContainer.appendChild(videoElement);
            button.innerHTML = '搞笑视频';
        })
        .catch(error => {
            button.innerHTML = '加载失败';
            console.error('Error loading video:', error);
        });
       
}

function loadVideo_2() {
    const button = document.getElementById('check_bt_2');
    button.innerHTML = '加载中'; // 更改按钮内容为"正在加载中"
    const videoUrl = "http://www.yujn.cn/api/rewu.php";
    const videoElement = document.getElementById('videoPlayer');
    videoElement.src = videoUrl;
    videoElement.autoplay = true;
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = ''; // 清空容器
    videoContainer.appendChild(videoElement);
    button.innerHTML = '刷新视频';
       
}

function loadVideo_3() {
    const button = document.getElementById('check_bt_3');
    button.innerHTML = '加载中'; // 更改按钮内容为"正在加载中"
    const videoUrl = "https://api.8uid.cn/ng.php?type=video";
    const videoElement = document.getElementById('videoPlayer');
    videoElement.src = videoUrl;
    videoElement.autoplay = true;
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = ''; // 清空容器
    videoContainer.appendChild(videoElement);
    button.innerHTML = '纯情女高';
       
}

function loadVideo_4() {
    const button = document.getElementById('check_bt_4');
    button.innerHTML = '加载中'; // 更改按钮内容为"正在加载中"
    const videoUrl = "https://api.8uid.cn/qc.php?type=video";
    const videoElement = document.getElementById('videoPlayer');
    videoElement.src = videoUrl;
    videoElement.autoplay = true;
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = ''; // 清空容器
    videoContainer.appendChild(videoElement);
    button.innerHTML = '清纯美女';
       
}
function loadVideo_5() {
    const button = document.getElementById('check_bt_5');
    button.innerHTML = '加载中'; // 更改按钮内容为"正在加载中"
    const videoUrl = "https://api.8uid.cn/cd.php?type=video";
    const videoElement = document.getElementById('videoPlayer');
    videoElement.src = videoUrl;
    videoElement.autoplay = true;
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = ''; // 清空容器
    videoContainer.appendChild(videoElement);
    button.innerHTML = '穿搭视频';
       
}

function loadVideo_6() {
    
    const button = document.getElementById('check_bt_6');
    button.innerHTML = '加载中'; // 更改按钮内容为"正在加载中"
    const apiUrl = 'https://tucdn.wpon.cn/api-girl/index.php?wpon=json';
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const videoUrl = data.mp4;

            const videoElement = document.getElementById('videoPlayer');
            videoElement.src = 'https:'+videoUrl;
            videoElement.autoplay = true;
            const videoContainer = document.getElementById('video-container');
            videoContainer.innerHTML = ''; // 清空容器
            videoContainer.appendChild(videoElement);
            button.innerHTML = '随机视频';
        })
        .catch(error => {
            button.innerHTML = '加载失败';
            console.error('Error loading video:', error);
        });
       
}
