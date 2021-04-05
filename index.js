document.getElementsByClassName('compositionClose')[0].addEventListener("click", function() {
    document.getElementsByClassName("compositionDescription")[0].style.animation = 'fadeOut 0.5s forwards';
    document.getElementsByClassName("compositionOpen")[0].style.display = "inline";
    this.style.display = "none"
})

document.getElementsByClassName('compositionOpen')[0].addEventListener("click", function() {
    document.getElementsByClassName("compositionDescription")[0].style.animation = 'fadeIn 0.5s forwards';
    document.getElementsByClassName("compositionClose")[0].style.display = "inline";
    this.style.display = "none"
})


document.getElementsByClassName('shippingClose')[0].addEventListener("click", function() {
    document.getElementsByClassName("shippingDescription")[0].style.animation = 'fadeOut 0.5s forwards';
    document.getElementsByClassName("shippingOpen")[0].style.display = "inline";
    this.style.display = "none"
})

document.getElementsByClassName('shippingOpen')[0].addEventListener("click", function() {
    document.getElementsByClassName("shippingDescription")[0].style.animation = 'fadeIn 0.5s forwards';
    document.getElementsByClassName("shippingClose")[0].style.display = "inline";
    this.style.display = "none"
})

dots = document.getElementsByClassName('dot');

dots[0].addEventListener("click", function() {
    document.getElementById("relatedProducts").style.transform = "translateX(0)";
});

dots[1].addEventListener("click", function() {
    document.getElementById("relatedProducts").style.transform = "translateX(-25%)";
});

dots[2].addEventListener("click", function() {
    document.getElementById("relatedProducts").style.transform = "translateX(-50%)";
});


// slider active dot
for (var i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("activeDot");
        current[0].classList.remove("activeDot");
        this.classList.add("activeDot");
    });
}

//active color
colorTab = document.getElementsByClassName('colorTab');
for (var i = 0; i < colorTab.length; i++) {
    colorTab[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("colorTab active");
        current[0].classList.remove("active");
        this.classList.add("active");
        var activeColor = document.getElementsByClassName("colorTab active")[0].getBoundingClientRect();
        if ((activeColor.left + activeColor.width) > window.innerWidth - 16) {
            var scroll = activeColor.width - (window.innerWidth - (16 + activeColor.left));
            console.log((scroll));
            document.getElementsByClassName("colors")[0].scroll({
                left: 50,
                top: 0,
                behavior: 'smooth'
            })

        }
    });
}


//active size
sizeTab = document.getElementsByClassName('sizeTab');
for (var i = 0; i < sizeTab.length; i++) {
    sizeTab[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("sizeTab active");
        current[0].classList.remove("active");
        this.classList.add("active");
    });
}