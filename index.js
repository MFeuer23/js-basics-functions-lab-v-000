// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  let result = distance - 42 > 0 ? distance - 42 : 42 - distance;
  return result
}