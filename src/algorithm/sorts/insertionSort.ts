export const insertionSort = (arr: number[] = []) => {
  const { length: n } = arr

  if (n <= 1) return arr

  for (let i = 1; i < n; i++) {
    let v = arr[i]
    let j = i - 1
    for (; j >= 0; --j) {
      if (arr[j] > v) arr[j+1] = arr[j]
      else break
    }
    arr[j+1] = v
  }

  return arr
}