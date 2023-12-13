def binarySearch(arr,element) :
    min=0
    max=len(arr)-1
    
    if min==max:
        return -1
    
    while(not(min>=max)):
        middle=(min+max)//2
        if arr[middle] == element:
            return middle
        elif arr[middle] > element:
            max= middle-1
        elif arr[middle]< element :
            min=middle+1
    else :
        return -1

# binary search usin recursion
def binarySearch2(arr,element,min,max) :
    if min==max | min>max:
        return -1
    
    middle=(min+max)//2
    if (not(min>=max)) :
        if arr[middle] == element:
                return middle
        elif arr[middle] > element:
                max= middle-1
                return binarySearch2(arr,element,min,max)
        elif arr[middle]< element :
                min=middle+1
                return binarySearch2(arr,element,min,max)
    else :
        return -1
        
# Testing the function
arr = [2, 3, 4, 10, 40]
print("Original array is", arr)
key = 10
result = binarySearch(arr, key)
if result != -1:
    print("Element is present at index", str(result))
else:
    print("Element is not present in array")

result = binarySearch2(arr, key,0,len(arr)-1)
