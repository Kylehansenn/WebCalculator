var $ = function (id) {
    return document.getElementById(id);
};

function clearInput(){
    $("result").value = "";
    $("history").textContent = "";
}

function insertNum(num){
    var number = num;
    $("result").value += number;
}

function insertOp(op){
    var operator = op;
    var currentExpresssion = $("result").value;
    $("history").textContent += currentExpresssion + " " + operator + " ";
    $("result").value = "";
}

function negate(){
    var number = $("result").value;
    var negated = String(parseInt(number) * -1);
    $("result").value = negated;
}

function percent(){
    var number = $("result").value;
    var percentNumber = String(parseInt(number) / 100);
    $("result").value = percentNumber;
}

function back(){
    var exp = document.getElementById("result").value;
    $("result"). value = exp.substring(0, exp.length-1);
}

function solve(){
    $("history").textContent += $("result").value;
    var expression = $("history").textContent;
    
    if (expression.includes('x')){
        var newexpression = expression.replace('x', '*');
        var answer = eval(newexpression);
        $("result").value = answer;
    }
    
    else{
        var answer = eval(expression);
        $("result").value = answer;
    }
}

function toggleDark(){
    var theme = $("style").getAttribute("href");
    
    if (theme == "default.css"){
        $("style").setAttribute("href", "dark.css");
    }

    else{
        $("style").setAttribute("href", "default.css");
    }
}

