// This function takes an integer n >= 0 and a digit 0 <= d <= 9 as an integer. It squares all numbers k between 0 and n and returns the number of times digit d appears in the cumulative set of squares.

function nbDig(n, d) {
    let dCount = 0
    let set = []
    for (let k = 0; k <= n; k++) {
      set.push(k ** 2)
    }
    set.join("")
      .split("")
      .forEach(c => {
        if (c == d) {
          dCount += 1
        }
      })
    return dCount
  }

nbDig(5750, 0)
    // => 4700
nbDig(11011, 2)
    // => 9481
nbDig(12224, 8)
    // => 7733
nbDig(11549, 1)
    // => 11905
