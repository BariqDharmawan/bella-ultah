const typed = new Typed("#greeting__small-wish", {
    strings: ["have a great day", "be happy"],
    loop: true,
    backDelay: 2000,
});

const showGiftBtn = document.querySelector('.greeting__birthday-footer');
showGiftBtn.addEventListener('click', () => {
    document.querySelector('.greeting__inner').classList.add('gift-opened');
});

const countDownDate = new Date("Sep 25, 2021 00:00:00").getTime();
const x = setInterval(function() {

    const now = new Date().getTime();

    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector(".next-birthday time").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Todaaaay 🎉";
    }
}, 1000);