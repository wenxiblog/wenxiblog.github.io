var posts=["2025/01/14/这是一篇测试博文/","2025/01/14/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };