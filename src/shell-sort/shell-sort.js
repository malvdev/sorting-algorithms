export default function shellSort(array) {
  let gap = Math.floor(array.length / 2);

  while (gap > 0) {
    for (let i = 0; i < array.length - gap; i += 1) {
      let currentIndex = i;
      let gapIndex = i + gap;

      while (currentIndex >= 0) {
        if (array[gapIndex] < array[currentIndex]) {
          [array[gapIndex], array[currentIndex]] = [
            array[currentIndex],
            array[gapIndex],
          ];
        }

        gapIndex = currentIndex;
        currentIndex -= gap;
      }
    }

    gap = Math.floor(gap / 2);
  }

  return array;
}
