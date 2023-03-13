function circleCircumference(number) {
    const circum = 2 * 3.14 * number;
    console.log("Circumference : ", circum);
    return circum;
}

function circleArea(number) {
    const area = 3.14 * number * number;
    console.log("Area : ", area);
    return area;
}

module.exports = {
    circleArea,
    circleCircumference
}