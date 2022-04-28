document.addEventListener('readystatechange', async (event) => {
  for (let item of document.querySelectorAll('.ci-item')) {
    let url = `https://api.catalogit.app/api/public/entries/${item.getAttribute('ci-id')}`
    let res = await fetch(url);
    let data = await res.json();
    try {
      item.querySelector('.ci-title').innerHTML 
      = data.properties.hasName.value_text;
    } catch (err) {}
    try {
      let labelElement = item.querySelector('.ci-label');
      if (labelElement) {
        let labelsResponse = data.properties.hasLabels;
        let labelText;
        if (labelsResponse) {
          if (labelsResponse instanceof Array) {
            labelText = labelsResponse.value[0].hasLabel.value_text;
          } else {
            labelText = labelsResponse.value.hasLabel.value_text;
          }
          labelElement.innerHTML = labelText;
        }
      }
    } catch (err) {}
    try {
      item.querySelector('.ci-description').innerHTML
      = data.properties.hasDescription.value_text;
    } catch (err) {}
    try {
      item.querySelector('.ci-image').setAttribute('src', data.media[0].derivatives.public.path);
      console.log('data.media', data.media[0].path);
    } catch (err) {
      console.log(data);
    }
  }
}); 