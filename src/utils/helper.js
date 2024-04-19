export function isImage(url) {
    const imageExtensions = /\.(jpeg|jpg|gif|png|bmp)$/i;
  
    return imageExtensions.test(url);
  }

const test =  "http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550"

console.log('isImage', isImage(test))