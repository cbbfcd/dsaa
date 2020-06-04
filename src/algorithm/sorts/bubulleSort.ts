export const bubbleSort = (arr: number[]) => {
  const { length: n } = arr;

  if (n <= 1) return arr;

  let flag = false

  // eg. [3, 5, 4, 1, 6, 2]  
  // 3,4,1,5,2,6
  // 3,1,4,2,5,6
  // 1,3,2,4,5,6
  // 1,2,3,4,5,6
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
        flag = true
      }
    }

    if (!flag) break
  }

  return arr
}