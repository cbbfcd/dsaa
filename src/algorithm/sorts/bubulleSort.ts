export const bubbleSort = (arr: number[]) => {
  const { length: n } = arr;

  if (n <= 1) return arr;

  for (let i = 0; i < n; i++) {
    let flag = false
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