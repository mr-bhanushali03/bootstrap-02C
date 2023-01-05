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

  document.querySelector("#switch").addEventListener("click", () => {
    // console.log(document.getElementById('switchTheme').getElementsByTagName('small'));
    document.body.classList.toggle("switchNow");
  });

  //Contact click Modal
  const openModalButton = document.querySelector("#open-modal");
  const modalWindowOverlay = document.querySelector("#modal-overlay");
  const crossModal = document.querySelector(".cross-modal");

  //showModal
  const showModalWindow = () => {
    modalWindowOverlay.style.display = "flex";
    modalWindowOverlay.style.position = "fixed";
  };
  openModalButton.addEventListener("click", showModalWindow);

  // hideModal
  const hideModalWindow = () => {
    modalWindowOverlay.style.display = "none";
  };
  crossModal.addEventListener("click", hideModalWindow);

  // Hide On Overlay
  const hideModalWindowOnBlur = (event) => {
    if (event.target === event.currentTarget) {
      console.log(event.target === event.currentTarget);
      hideModalWindow();
    }
  };
  modalWindowOverlay.addEventListener("click", hideModalWindowOnBlur);
});
