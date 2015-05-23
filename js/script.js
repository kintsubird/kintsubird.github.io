$(function() {
});

/* スマホからのアクセスならアドレスバーを非表示にする */
var user_agent = window.navigator.userAgent.toLowerCase();
if(user_agent.indexOf('iphone') != -1) {
    setTimeout(scrollTo, 100, 0, 1);
} else if(user_agent.indexOf('android') != -1) {
    setTimeout(scrollTo, 100, 0, 1);
}
