# Sorting: Comparisons


## Whiteboard Process

![White-Borad](../img/SortingComparisons.jpg)

<!-- ## Approach & Efficiency -->


## Solution
[Code-URL](https://replit.com/@Malek-SHSH/SortingComparisons#index.js)


```javascript
function Mergesort(arr) {
    const n = arr.length;

    if (n > 1) {
        const mid = Math.floor(n / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);

        Mergesort(left);
        Mergesort(right);

        Merge(left, right, arr);
    }
  return arr
}

function Merge(left, right, arr) {
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < left.length && j < right.length) {
        if (left[i].year >= right[j].year) {
            arr[k] = left[i];
            i++;
        } else {
            arr[k] = right[j];
            j++;
        }
        k++;
    }

    while (i < left.length) {
        arr[k] = left[i];
        i++;
        k++;
    }

    while (j < right.length) {
        arr[k] = right[j];
        j++;
        k++;
    }
}

console.log(Mergesort(
  [
  {
  title:"fox",
  year:2000,
  genres:["a","b","c"],
},
  {
  title:"balck",
  year:2002,
  genres:["a","b","c"],
},
  {
  title:"home alone",
  year:1990,
  genres:["a","b","c"],
},
  {
  title:"kingdom",
  year:2020,
  genres:["a","b","c"],
},
]
))
```

---------------------------------------------
***Output***

```javascript
[
  { title: 'kingdom', year: 2020, genres: [ 'a', 'b', 'c' ] },
  { title: 'balck', year: 2002, genres: [ 'a', 'b', 'c' ] },
  { title: 'fox', year: 2000, genres: [ 'a', 'b', 'c' ] },
  { title: 'home alone', year: 1990, genres: [ 'a', 'b', 'c' ] }
]
```







