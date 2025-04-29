var posts=["2025/04/28/这是一篇测试的博文/","2025/04/28/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };