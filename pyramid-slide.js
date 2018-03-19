var slider = document.getElementById("sliderRange");
console.log(sliderRange)
var output = document.getElementById("rangeOut");
var symbolList = document.getElementById("pyramidSymbol");
console.log(symbolList)
var pyramidSymbol = symbolList.options[symbolList.selectedIndex].text;
console.log(pyramidSymbol)


console.log(slider.value)
output.innerHTML = slider.value;
console.log(output.innerHTML)


slider.oninput = function() {
    var now = this.value
    output.innerHTML = now;
    symbolList = document.getElementById("pyramidSymbol");
    console.log(symbolList)
    pyramidSymbol = symbolList.options[symbolList.selectedIndex].text;
    console.log(now)
    drawPyramid(now, pyramidSymbol)
}

document.getElementById("pyramidSymbol").onchange = function() {
    console.log("i did a thing")
    console.log(this.options[symbolList.selectedIndex].text)
    drawPyramid(slider.value, this.options[symbolList.selectedIndex].text)
}
console.log("testing")



height = slider.value;

drawPyramid(height, pyramidSymbol);

function drawPyramid(height, symbol) {

    document.getElementById("pyramid").innerHTML = "";

    for (var row = 0; row < height; row++) {

        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; 
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += symbol;
        }

        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
