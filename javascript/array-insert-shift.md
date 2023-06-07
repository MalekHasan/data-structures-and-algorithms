# Insert and shift an array in middle at index

## **Whiteboard Process**

![White-Borad](img/array-insert-shift.png)

## **Approach & Efficiency**

Loop statment

## **Solution**

#### ***function insertShiftArray(arr,value){***

 #### ***let arrLen=Number.parseInt((arr.length-1)/2);***
 #### ***((arr.length-1)/2) %10!=0?arrLen++:'';***
 #### ***for(let i =arr.length;i>=arrLen;i--)***
 ####   ***{***
  ####    ***arr[i]=arr[i-1]***
  ####  ***}***
  #### ***arr[arrLen]=value***
 #### ***return arr***
#### ***}***


---------------------------------------------
| ***Input***       | ***Output*** |
| ----------- | ----------- |
| _[2 , 4 , 6 , -8] , 5_     | _[2 , 4 , 5 , 6 , -8]_       |
| _[42 , 8 , 15 , 23 , 42], 16_  | _[42 , 8 , 15 , 16  , 23 , 42] _       |

