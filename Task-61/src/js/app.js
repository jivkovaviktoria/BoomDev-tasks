import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

    const elements = document.querySelectorAll('.hot');
    elements.forEach(el => el.textContent+='🔥');
});
