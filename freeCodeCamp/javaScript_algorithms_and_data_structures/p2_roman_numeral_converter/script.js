function convertToRoman(num) {
    if (isNaN(num)) return "Please enter a valid number";
    if (num < 1) return "Please enter a number greater than or equal to 1";
    if (num >= 4000) return "Please enter a number less than or equal to 3999";

    // Efficient mapping for each digit position
    const thousands = ["", "M", "MM", "MMM"];
    const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    // Build the Roman numeral by directly accessing mapped values
    return (
        thousands[Math.floor(num / 1000)] +
        hundreds[Math.floor((num % 1000) / 100)] +
        tens[Math.floor((num % 100) / 10)] +
        ones[num % 10]
    );
}

// Event listener for the "Convert" button
document.getElementById("convert-btn").addEventListener("click", function () {
    const number = parseInt(document.getElementById("number").value);
    const output = document.getElementById("output");

    // Call the optimized conversion function
    output.textContent = convertToRoman(number);
});
