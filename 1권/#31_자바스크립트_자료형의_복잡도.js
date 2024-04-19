/*
다음 배열 내장함수의 시간 복잡도가 O(1)이 아닌 것을 모두 고르시오.

1)  arr[i]
2)  arr.push(5)
3)  arr.slice()
4)  arr.pop()
5)  arr.includes(5)
*/

/*
arr.slice(): 이 작업은 배열의 복사본을 만들어 반환하므로 배열의 크기에 비례하여 시간이 걸립니다. 
따라서 이 작업의 시간 복잡도는 O(n)입니다. (여기서 n은 배열의 길이입니다.)

arr.includes(5): 배열에서 특정 요소를 찾는 작업은 최악의 경우 배열을 전체 순회해야 하므로 시간 복잡도는 O(n)입니다. (여기서 n은 배열의 길이입니다.)
*/