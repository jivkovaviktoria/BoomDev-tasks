window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  document.body.addEventListener("click", () => {
    const length = 5;
    let text = 'sampleText';

    let count = 0;
    for(let i = 0; i < length; i++) {
      let element = document.createElement('article');

      count += length;
      element.setAttribute('id', 'article' + count);
      document.body.appendChild(element);

      document.getElementById('article' + count).innerHTML = text;
      document.getElementById('article' + count).classList.add('message');
    }

  });
});