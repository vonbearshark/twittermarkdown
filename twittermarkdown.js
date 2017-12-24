const scrollTriggerDistance = 750;
let downScrollDistance = window.scrollY, scrollTrigger = downScrollDistance;
function convertTweets() {
  window.requestAnimationFrame(() => {
    Object.values(document.getElementsByClassName('tweet-text')).forEach((el) => {
      el.innerHTML = marked(el.innerHTML).replace(/<\/?p[^>]*>/g, "");
    });
  });
}
window.addEventListener('load', convertTweets, false);
window.addEventListener('scroll', () => {
  if(window.scrollY > downScrollDistance) {
    scrollTrigger += window.scrollY - downScrollDistance;
    downScrollDistance = window.scrollY;
  }
  if(scrollTrigger > scrollTriggerDistance) {
    convertTweets();
    scrollTrigger = 0;
  }
}, false);
chrome.runtime.sendMessage({type:'showPageAction'});
