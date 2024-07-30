export const calculateYearsSince = (date: Date) => {
  const ageDifMs = Date.now() - date.getTime();
  const ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export const cleanupSlashes = (str: string) => {
  // When there are double slashes (//) and they're not preceded by a colon (:)
  // Replace by a single slash
  return str.replace(/([^:])\/\//g, '$1/');
}
