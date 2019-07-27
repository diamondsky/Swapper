//Kiana Slimak 02/27/18
//JavaScript source code

function swap() {
    var a, b, c;
    a = Number(document.getElementById("FieldA").value);
    b = Number(document.getElementById("FieldB").value);
    c = a;
    a = b;
    b = c;
    document.getElementById("FieldA").value = a;
    document.getElementById("FieldB").value = b;
}

