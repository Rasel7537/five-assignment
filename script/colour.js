const colors = ["bg-red-100", "bg-green-100", "bg-blue-100", "bg-yellow-100", "bg-purple-100"];
let index = 0;

document.getElementById("themeButton").addEventListener("click", function() {
    document.body.className = colors[index];
    index = (index + 1) % colors.length;
});