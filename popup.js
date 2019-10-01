function setSpeed(speed) {
    chrome.tabs.getSelected(null, function (tab) {
        if(tab.url.indexOf("pan.baidu.com")<0){
            return;
        }
        chrome.tabs.executeScript(null, {
            "code": "var myScript = document.createElement('script');"
                + "myScript.textContent = \"videojs.getPlayers('video-player').html5player.tech_.setPlaybackRate(" + speed + "); console.log('now speed ' +" + speed + ");\";"
                + "document.head.appendChild(myScript);"
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    var lastSpeed = localStorage.getItem("speed");
    lastSpeed = lastSpeed ? lastSpeed : 0;
    var rangeEle = document.getElementById('range');
    var speedEle = document.getElementById('speed');
    speedEle.innerText = "当前速度为：" + lastSpeed;
    rangeEle.value = lastSpeed;
    rangeEle.onchange = function () {
        var speed = rangeEle.value;
        speedEle.innerText = "当前速度为：" + speed;
        localStorage.setItem("speed", speed);
        setSpeed(speed);
    }
})

