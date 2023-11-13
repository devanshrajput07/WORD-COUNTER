function changeBG(color) {
    document.body.style.backgroundColor = color;
}

let textbox = document.getElementById('textbox');

textbox.addEventListener('input', function () {
    var text = this.value;
    let char = text.length;
    document.getElementById('char').innerHTML = char;

    text = text.trim();          //remove extra spaces from start & end
    let words = text.split(" ");
    let cleanList = words.filter(function (element) {
        return element != "";   //remove all extra spaces & return clean list
    })
    document.getElementById('word').innerHTML = cleanList.length;
})