export const abbreviateNumber = (num) => {
	var sizes = ["", "к", "м"];
	if (num < 1000) return num;
	var i = parseInt(Math.floor(Math.log(num) / Math.log(1000)));
	return (
		(i == 0
			? num / Math.pow(1000, i)
			: (num / Math.pow(1000, i)).toFixed(1)) + sizes[i]
	);
}