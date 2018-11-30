function MergeSort(data) {
    if (data.length < 2) {
        return data;
    }

    // делим на 2 части
    var left = [];
    for (var i = 0; i < Math.floor(data.length / 2); i++) {
        left = left.concat(data[i]);
    }
    var right = [];
    for (var j = Math.floor(data.length / 2); j < data.length; j++) {
        right = right.concat(data[j]);
    }

    // рекурсивно продолжаем деление, пока не останется один элемент
    left = MergeSort(left);
    right = MergeSort(right);

    // объединяем части в новый список, поэлементно сортируя
    var merged_list = [];
    var n = 0;
    var m = 0;
    while (n < left.length && m < right.length) {
        if (left[n] <= right[m]) {
            merged_list = merged_list.concat(left[n]);
            n++;
        }
        else {
            merged_list = merged_list.concat(right[m]);
            m++;
        }
    }
    // оставшаяся часть
    merged_list = merged_list.concat(left.slice(n));
    merged_list = merged_list.concat(right.slice(m));
    return merged_list;
}


var list = [1, 10, 7, 13, 6, 8, 11];
console.log(MergeSort(list));