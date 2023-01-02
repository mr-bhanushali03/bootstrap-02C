document.addEventListener("DOMContentLoaded", () => {
    // cursor follower
    // const cursor = document.querySelector('.cursor');
    // document.addEventListener('mousemove', event => {
    // cursor.setAttribute("style", "top: " + (event.pageY - 10) + "px; left: " + (event.pageX - 10) + "px;" + "display: block")
    // });

    // document.addEventListener('click', () => {
    //     cursor.classList.add("expand");

    //     setTimeout(() => {
    //         cursor.classList.remove("expand");
    //     }, 500)
    // });
    // cursor follower  

    document.querySelector("#switch").addEventListener('click', () => {
        // console.log(document.getElementById('switchTheme').getElementsByTagName('small'));
        document.body.classList.toggle("switchNow");
    });
    const contactModal = document.querySelector("#contactModal")
    contactModal.addEventListener("click", () => {
        contactModal.innerHTML = "LOL";
    });
});
