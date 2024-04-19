export function isImage(url) {
    const imageExtensions = /\.(jpeg|jpg|gif|png|bmp)$/i;
  
    return imageExtensions.test(url);
  }