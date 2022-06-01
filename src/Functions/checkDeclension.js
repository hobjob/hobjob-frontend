export const checkDeclension = (num, title) => {
	let result = {
		num: 0,
		text: "",

		title: ""
	};

	if (num % 100 >= 5 && num % 100 <= 20) {
		result.num = num;
		result.text = title[2];
		result.title = num + " " + title[2];
	} else {
		if (num % 10 === 1) {
			result.num = num;
			result.text = title[0];
			result.title = num + " " + title[0];
		} else if (num % 10 >= 2 && num % 10 <= 4) {
			result.num = num;
			result.text = title[1];
			result.title = num + " " + title[1];
		} else {
			result.num = num;
			result.text = title[2];
			result.title = num + " " + title[2];
		}
	}

	return result;
};