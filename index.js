defaultStars = [2, 1, 2, 1, 3, 3, 2, 2, 3, 1, 2];
document.addEventListener('DOMContentLoaded', setStars);

function setStars() {
    var trs = document.querySelectorAll("tr");
    for (row = 0; row < trs.length; row++) {
        for (star = 0; star < 3; star++) {
            starObject = trs[row].querySelectorAll("div")[star];
            if (star < defaultStars[row]) {
                starObject.style.backgroundImage = 'url(yellowfilled.png)';
            }
            starObject.addEventListener('click', changeStars);
        }
    }
}

function changeStars(event) {
    divs = event.currentTarget.parentElement.querySelectorAll("div");
    if (event.currentTarget.className == '1st') {
        rating = 1;
    } else if (event.currentTarget.className == '2nd') {
        rating = 2;
    } else {
        rating = 3;
    }
    for (i = 0; i < 3; i++) {
        starObject = divs[i];
        if (i < rating) {
            starObject.style.backgroundImage = 'url(redfilled.png)';
        } else {
            starObject.style.backgroundImage = 'url(redoutline.png)';
        }
    }
}