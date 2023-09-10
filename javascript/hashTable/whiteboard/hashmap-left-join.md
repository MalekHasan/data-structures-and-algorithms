# hashmap-left-join

## **Whiteboard Process**


![White-Borad](../img/)

## **Solution**

[hashmap-left-join](https://replit.com/@Malek-SHSH/hashmap-left-join#index.js)

### hashmap-left-join Code :

```javascript

function hashMapLeftJoin(synonym, antonyms) {
  let result = [];

  synonym.forEach((value, key) => {
    let entry = [key, value];
    antonyms.get(key) ? entry.push(antonyms.get(key)) : entry.push(null);

    result.push(entry);
  });

  return result;
}
```

<!-- ***output***

```javascript
Set(7) { 100, 160, 125, 175, 200, 350, 500 }
``` -->
