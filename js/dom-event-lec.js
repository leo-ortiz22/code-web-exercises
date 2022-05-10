"use strict";
(function () {
    document.getElementById("moon-travel").addEventListener("dblclick",function (event) {
        console.log(event);
        document.getElementById("main-content").style.backgroundImage = "url(img/moon-surface.png)"
    document.getElementById("moon-travel").innerText = "Whoa, look at that big ball of water and dirt."
})
    var goku = document.getElementById("goku");
    var gokuEvent = function () {
        goku.src = "img/goku-mad.png";
        goku.addEventListener("mouseout", function () {
            goku.src ="img/goku-normal.png";
        })

    }
    goku.addEventListener("mouseover", gokuEvent)
    goku.addEventListener("mouseout", function () {
        goku.src = "img/goku-normal.png";
    })
    // removing the mouse over even
    document.querySelector('.goku-chill').addEventListener("click", function () {
        goku.removeEventListener("mouseover", gokuEvent);

    })
    document.addEventListener("keyup", function (event) {
        console.log(event)
        if (event.key === " "){
            document.querySelector(".space-bar").style.display = "inline";
        }
    })
    document.getElementById("color-btn").addEventListener("click", function () {
        var pickedColor = document.
        document.getElementById("text-color")
    })
})()