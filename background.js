setInterval(function () {
    chrome.tabs.getSelected(null, function (tab) {
        if(tab.url.indexOf("pan.baidu.com")<0){
            return;
        }
        var speed=localStorage.getItem("speed");
        speed=speed?speed:0;
        chrome.tabs.executeScript(tab.id, {
            "code": `
            try{
                 var myScript = document.createElement('script');
                 myScript.textContent = "videojs.getPlayers('video-player').html5player.tech_.setPlaybackRate(${speed});";
                 document.head.appendChild(myScript);
                 console.log(${speed});
            }catch(e){
              console.log(e);
            }
            `
        });
    })
}, 3000);
