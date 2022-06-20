export const abbreviateNumber = (num: number) => {
    var sizes = ["", " к", " м"];
    if (num < 1000) return num;
    var i = Math.floor(Math.log(num) / Math.log(1000));
    return (
        (i == 0
            ? num / Math.pow(1000, i)
            : (num / Math.pow(1000, i)).toFixed(1)) + sizes[i]
    );
};
