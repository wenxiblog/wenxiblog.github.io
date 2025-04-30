var posts=["2025/04/28/这是一篇测试的博文/","2025/04/29/流量卡推荐/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };