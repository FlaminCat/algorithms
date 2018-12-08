function BinarySearch(data, target) {
	var min = 0;
	var max = data.length - 1;
	while (min <= max) {
		var mid = Math.floor((min + max) / 2);
		if (target < data[mid]) {
			max = mid - 1;
		}
		else if (target > data[mid]) {
			min = mid + 1;
		}
		else {
			return mid;
		}
	}
	return -1;
}

function submit_data() {
	var input = document.getElementById("userInput1").value;
	window.array = [];

	var tmp = "";
	for (var i = 0; i < input.length; i++) {
  		tmp += input.charAt(i);
  		if (i == input.length - 1) {
  			array = array.concat(tmp);
  			break;
  		}
  		if (input.charAt(i + 1) != " ") {
  			continue;
  		}
  		else {
  			array = array.concat(tmp);
  			tmp = "";
  			i++;
  		}	
	}
	array.sort((a, b) => a - b);
	document.getElementById("sorted").value = array;
}


function submit_target() {
	var target = document.getElementById("userInput2").value;
	target = parseInt(target);
	for (i in array) {
		parseInt(i);
	}
	console.log(array);
	alert(BinarySearch(array, target));
}




