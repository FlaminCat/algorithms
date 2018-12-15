function check_english(string){
	for (i in string) {
		if (string[i] == " ") {
			continue;
		}
		if ((65 <= string[i].charCodeAt(0) && string[i].charCodeAt(0) <= 90) || (97 <= string[i].charCodeAt(0) && string[i].charCodeAt(0) <= 122)) {}
		else {
			console.log("English only");
			return 0;
		}
	}
}

function is_capital(letter) {
    if (65 <= letter.charCodeAt(0) && letter.charCodeAt(0) <= 90) {
        return true;
    }
    else {
        return false;
    }
}

function shift(letter, shift_letter="E") {
    if (is_capital(shift_letter)) {
        var shift_number = shift_letter.charCodeAt(0) - 65;
    }
    else {
        var shift_number = shift_letter.charCodeAt(0) - 97;
    }
    if (is_capital(letter)) {
        var difference = shift_number - (91 - letter.charCodeAt(0));
        if (difference >= 0) {
            return String.fromCharCode(65 + difference);
        }
        else {
            return String.fromCharCode(letter.charCodeAt(0) + shift_number);
        }
    }
    else {
        var difference = shift_number - (123 - letter.charCodeAt(0));
        if (difference >= 0) {
            return chr(97 + difference);
        }
        else {
            return String.fromCharCode(letter.charCodeAt(0) + shift_number);  
        }
    }
}

function frequency(string) {
	check_english(string);
	var dictionary = {};
    for (i in string) {
        if (string[i] == " ") {
            continue;
        }
        if (string[i] in dictionary) {
            dictionary[string[i]] += 1;
        }
        else {
            dictionary[string[i]] = 1;
        }
    }
    var items = Object.keys(dictionary).map(function(key) {
  		return [key, dictionary[key]];
	});
	items.sort(function(first, second) {
  		return second[1] - first[1];
	});    
	return items;
}

function print_shifted(string) {
    var dict_shift = {};
    for (i in string) {
        if (string[i] == " ") {
            continue;
        }
        if (string[i] in dict_shift) {
            continue;
        }
        else {
            dict_shift[string[i]] = shift(string[i]);
        }
    }
    console.log(dict_shift);
}

var text = "Nothing but gibberish";
console.log(frequency(text));
print_shifted(text);
	









