const videosElm = document.getElementById("videos");
const notificationElm = document.querySelector(".notification")

const interval = 30000
const videos = [
    '-VgTBGWlEXE',
    'fetdoZ3azt4',
    'qgr-5Lt6ctA',
    'EhHNUNMcevU',
    '6O6DNvtAfr4'
]
window.onload = () => {
    setTimeout(showNotification,interval)
    videos.forEach(video => {
        videosElm.innerHTML += `<iframe src="https://www.youtube.com/embed/${video}" class="video" frameborder="0"></iframe>`
    })
}
function subscribe(){
    const link = document.createElement("a");
    link.href = "intent://channel/UCPo_3jfOUxGumXuLH-3rDTw/#Intent;scheme=vnd.youtube;package=com.google.android.youtube;S.browser_fallback_url=market://details?id=com.google.android.youtube;end;";
    link.click();
}
function showNotification(){
    notificationElm.style.display = 'block';
}
function closeNotification(){
    notificationElm.style.display = 'none';
    setTimeout(showNotification,interval)
}