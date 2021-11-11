def plus(arr):
    curr = len(arr)-1
    while arr[curr]==9:
        curr-=1
    if curr>0:
        arr[curr]+=1
    else:
        arr = [1]+arr
    return arr

arr = [2,9,9,9,9,9,9]
print(plus(arr))
arr=[1,2,3]
print(plus(arr))
