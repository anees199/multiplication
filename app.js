var output = document.getElementById("output")
var input = document.getElementById("Table_print")
function prinTable() {
    output.innerHTML = ""
    for (var i = 1; i <= 10; i++) {
        output.innerHTML += `${input.value} x  ${i} =  ${i * +input.value} <br />`
    }
}