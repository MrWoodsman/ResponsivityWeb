setInterval(
    function () {
        var randomColor = Math.floor(Math.random() * 361);
        //document.getElementsByClassName("article-author-photo").style.transform = "rotateZ(100deg)";
        min = Math.ceil(-30);
        max = Math.floor(30);
        var i = Math.floor(Math.random() * (max - min)) + min;
        document.getElementById("aut").style.transform = "rotateZ(" + i + "deg)";
    }, 1000);
