function converter (mpg) {
  let kml = mpg * 1.609344 / 4.54609188;
  
  return Math.round(kml * 100) / 100;
}