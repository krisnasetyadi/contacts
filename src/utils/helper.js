export function isImage(url) {
  const imageExtensions = /\.(jpeg|jpg|gif|png|bmp|webp)$/i;
  const urlPattern = /^(http:\/\/|https:\/\/).+/i;

  return urlPattern.test(url) || imageExtensions.test(url)
}

export function isFileImage(filePath) {
  const regexFile =  /^file:\/\/\/.+/;

  return regexFile.test(filePath)

}

export function isBas64(base64String) {
  const base64Regex = /^[A-Za-z0-9+/]*={0,2}$/;

  if (base64String?.length % 4 !== 0 || base64Regex.test(base64String)) {
    return false;
  }
  try {
    atob(base64String)
    return true
  } catch (error) {
    return false
  }
}

export const capitalize = (text) => {
  if(text && text.length > 0) {
    const splitted = text.split(' ')

    const upperCaseString = splitted.map(str => str.charAt(0).toUpperCase() +  str.slice(1))
    const capitalizedText = upperCaseString.join(' ');
    return capitalizedText
  }
 
  return text
}