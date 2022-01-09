# Search an element in a sorted and rotated array

Search for a given number in a sorted array, with unique elements, that has been rotated by some arbitrary number, assuming that the array does not contain duplicates. Return -1 if the number does not exist

Below is an original array before rotation:

[1, 10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155]

After performing rotation on this array 6 times, it changes to:

[88, 99, 107, 120, 133, 155, 1, 10, 20, 47, 59, 63, 75]

-----------------------^^^----------------

```js
const input = [88, 99, 107, 120, 133, 155, 1, 10, 20, 47, 59, 63, 75];
search(input, 10); // return index: 7
```
