// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  let result = distance - 42 > 0 ? distance - 42 : 42 - distance;
  return result
}

function distanceFromHqInFeet(distance) {
  let feet = distanceFromHqInBlocks(distance) * 264
  return feet
}

function distanceTravelledInFeet(start, end) {
  let distance = start - end > 0 ? start - end : end - start
  distance *= 264
  return distance
}