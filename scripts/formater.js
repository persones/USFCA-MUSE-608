function codeFormat(srcElem, dstElem) {
  let txt = srcElem.innerHTML;
  txt = txt.replaceAll('<', '&lt;');
  txt = txt.replaceAll('>', '&gt;');
  let preElem = document.createElement('pre');
  let codeElem = document.createElement('code');
  codeElem.classList.add("language-markup");
  codeElem.innerHTML = txt;
  preElem.appendChild(codeElem);
  dstElem.appendChild(preElem);
}

function formatAll() {
  for (let elem of document.querySelectorAll('.cf')) {
    codeFormat(
      elem.querySelector('.cf-src'),
      elem.querySelector('.cf-dst')
    );
  }
}

formatAll();