// Falsy Bouncer

function bouncer(arr) {
    return arr.filter(Boolean);
}

  // Chunky Monkey

  function chunkArrayInGroups(arr, size) {
    let newArr = [];
    while (arr.length > 0) {
      newArr.push(arr.splice(0, size));
    }
    return newArr;
  }