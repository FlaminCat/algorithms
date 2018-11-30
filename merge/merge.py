def merge_sort(data):
    if len(data) < 2:
        return data

    # делим на 2 части
    left = []
    for i in range(len(data) // 2):
        left.append(data[i])
    right = []
    for j in range((len(data) // 2), len(data)):
        right.append(data[j])

    # рекурсивно продолжаем деление, пока не останется один элемент
    left = merge_sort(left)
    right = merge_sort(right)

    # объединяем части в новый список, поэлементно сортируя
    merged_list = []
    n, m = 0, 0
    while n < len(left) and m < len(right):
        if left[n] <= right[m]:
            merged_list.append(left[n])
            n += 1
        else:
            merged_list.append(right[m])
            m += 1
    # оставшаяся часть
    merged_list += left[n:]
    merged_list += right[m:]
    return merged_list


if __name__ == '__main__':
    list = [1, 10, 7, 13, 6, 8, 11]
    print(merge_sort(list))