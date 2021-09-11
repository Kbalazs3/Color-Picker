

    window.onload = function () {

    let rgbPicker = document.getElementsByTagName('body')[0]
        rgbPicker.addEventListener('click', () => changeBackgroundColor());
        rgbPicker.addEventListener('keyup', () => changeBackgroundColor() );
    }


function changeBackgroundColor() {
    let red = document.getElementById('red').value;
    let green = document.getElementById('green').value;
    let blue = document.getElementById('blue').value;
    let body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor = 'RGB(' + red + ',' + green + ',' + blue + ')';
    writeHexadecimalToHtml([red, green, blue]);
    writeBinaryCode([red, green, blue]);
    configTransparency();
}


function hexadecimalConverter(rgbValues) {
    let hexadecimalCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexadecimalCode = "";
     for (let i=0; i<rgbValues.length; i++) {
        hexadecimalCode += hexadecimalCharacters[Math.floor((rgbValues[i] / 16))];
        hexadecimalCode += hexadecimalCharacters[Math.floor((rgbValues[i] % 16))];
    }
     return hexadecimalCode;
}


function writeHexadecimalToHtml(rgbValues) {
    let hexCode = hexadecimalConverter(rgbValues);
    let hexP = document.getElementById('hex_value');
    hexP.innerHTML = 'HEX value: #' + hexCode;
}


function convertRGBToBinary(rgbValues) {
    let red = rgbValues[0];
    let binaryRed = "";
    while (red !== 0) {
        binaryRed = binaryRed + Math.floor((red % 2)) ;
        red = Math.floor(red) / 2;
    }
        let green = rgbValues[1];
        let binaryGreen = "";
    while (green !== 0) {
        binaryGreen = binaryGreen + Math.floor((green % 2)) ;
        green = Math.floor(green) / 2;
    }
    let blue = rgbValues[2];
    let binaryBlue = "";
    while (blue !== 0) {
        binaryBlue = binaryBlue + Math.floor((blue % 2)) ;
        blue = Math.floor(blue) / 2;
    }
    return [binaryRed, binaryGreen, binaryBlue];
}


function writeBinaryCode(rgbValues) {
    let rgbBinaryCodes = convertRGBToBinary(rgbValues);
    document.getElementById('red_binary').innerHTML = 'Red: ' + rgbBinaryCodes[0];
    document.getElementById('green_binary').innerHTML = 'Green: ' + rgbBinaryCodes[1];
    document.getElementById('blue_binary').innerHTML = 'Blue: ' + rgbBinaryCodes[2];
}


function configTransparency() {
    let newTransparency = document.getElementById('transparency').value;
    document.getElementsByTagName('body')[0].style.opacity = newTransparency;
}