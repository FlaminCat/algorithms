def binary_search(data, target):
    min = 0
    max = len(data) - 1
    while min <= max:
        mid = (min + max) // 2
        if target < data[mid]:
            max = mid - 1
        elif target > data[mid]:
            min = mid + 1
        else:
            return mid
    return -1


if __name__ == "__main__":
    print("Awaiting array...")
    array = [int(x) for x in input().split()]
    array.sort()
    print("Sorted array:", array)
    print("Input the target to search for")
    target = int(input())
    print(binary_search(array, target))