export const capitalize = (string, normal=false) => {
  if(normal) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } else string.replace(/([-_]\w)/g, g => g[1].toUpperCase())
}