function binarySearch(arr,element){
    let min =0;
    let max=arr.length-1;
    if (min>max){
        return -1
    }
    while (min<=max) {
        let mid = Math.floor((min+max)/2);
        if (arr[mid]===element){
            return mid
        }
        else if(arr[mid]<element){
            min = mid + 1;
        }
        else{
            max = mid -1
        }
    }
    return -1
}

/*test the function*/
let arr=[34,67,98,156,234,378];
document.write("<h1>"+binarySearch(arr,156).toString()+"<h1>"); //should print 3 which is the index of 156 in array
document.write("<h1>"+binarySearch(arr,98).toString()+"<h1>");// should print 2 which is the index of 98 in array
document.write("<h1>"+binarySearch(arr,123).toString()+"<h1>");// should print -1 because there is no 123 in the array</

/*binary search usig recursion*/
function binarySearchRecursion(arr,low,high,element){
    if(low > high){
        return -1;
    }
    let mid = Math.floor((low + high) / 2);
    if(arr[mid] === element){
        return mid;
    }else if(arr[mid] > element){
        high=mid-1;
        return binarySearchRecursion(arr, low,high, element);
    }else if(arr[mid]<element){
        low=mid+1;
        return binarySearchRecursion(arr, low , high , element);
    }
    return -1;
}

document.write("<h1>Binarysearch using recurtion test</h1>")
document.write("<h1>"+binarySearchRecursion(arr,0,arr.length-1,156).toString()+"<h1>"); //should print 3 which is the index of 156 in array
document.write("<h1>"+binarySearchRecursion(arr,0,arr.length-1,98).toString()+"<h1>");// should print 2 which is the index of 98 in array
document.write("<h1>"+binarySearchRecursion(arr,0,arr.length-1,123).toString()+"<h1>");// should print -1 because there is no 123 in the array</