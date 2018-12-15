def check_english(string):
    for i in string:
        if i == " ":
            continue
        if 65 <= ord(i) <= 90 or 97 <= ord(i) <= 122:
            pass
        else:
            print("English only")
            return 0


def is_capital(letter):
    if 65 <= ord(letter) <= 90:
        return True
    else:
        return False


def shift(letter, shift_letter="E"):
    if is_capital(shift_letter):
        shift_number = ord(shift_letter) - 65
    else:
        shift_number = ord(shift_letter) - 97

    if is_capital(letter):
        difference = shift_number - (91 - ord(letter))
        if difference >= 0:
            return chr(65 + difference)
        else:
            return chr(ord(letter) + shift_number)
    else:
        difference = shift_number - (123 - ord(letter))
        if difference >= 0:
            return chr(97 + difference)
        else:
            return chr(ord(letter) + shift_number)


def frequency(string):
    check_english(string)

    dictionary = dict()
    for i in string:
        if i == " ":
            continue
        if i in dictionary:
            dictionary[i] += 1
        else:
            dictionary[i] = 1
    return sorted(dictionary.items(), key=lambda x: x[1], reverse=True)


def print_shifted(string):
    dict_shift = dict()
    for i in string:
        if i == " ":
            continue
        if i in dict_shift:
            continue
        else:
            dict_shift[i] = shift(i)
    print(dict_shift)


if __name__ == "__main__":
    text = "Nothing but gibberish"
    print(frequency(text))
    print_shifted(text)