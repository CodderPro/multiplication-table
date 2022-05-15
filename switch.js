/*
var date = new Date()

// var today = date.getDay()
var today = 6


var otherToday = document.getElementById('today')
console.log(today)


switch (today) {
    case 0:
        otherToday.innerHTML = "Today is Sunday"
        console.log('Today is Sunday')
        break;
    case 1:
        otherToday.innerHTML = "Today is Monday"
        console.log('Today is Monday')
        break;
    case 2:
        otherToday.innerHTML = "Today is Tuesday"
        console.log('Today is Tuesday')
        break;
    case 3:
        otherToday.innerHTML = "Today is Wednesday"
        console.log('Today is Wednesday')
        break;
    case 4:
        otherToday.innerHTML = "Today is Thursday"
        console.log('Today is Thursday')
        break;
    case 5:
        otherToday.innerHTML = "Today is Friday"
        console.log('Today is Friday')
        break;
    case 6:
        otherToday.innerHTML = "Today is Saturday"
        console.log('Today is Saturday')
        break;

    default:
        console.log('Not a Valid Day')
        break;
}


if (today == 0) {
    otherToday.innerHTML = "Today is Sunday"
    console.log('Today is Sunday')
} else if (today == 1) {
    otherToday.innerHTML = "Today is Monday"
    console.log("Today is Monday")
} else if (today == 2) {
    otherToday.innerHTML = "Today is Tuesday"
    console.log('Today is Tuesday')
} else if (today == 3) {
    otherToday.innerHTML = "Today is Wednesday"
    console.log('Today is Wednesday')
} else if (today == 4) {
    otherToday.innerHTML = "Today is Thursday"
    console.log('Today is Thursday')
} else if (today == 5) {
    otherToday.innerHTML = "Today is Friday"
    console.log('Today is Friday')
} else if (today == 6) {
    otherToday.innerHTML = "Today is Saturday"
    console.log('Today is Saturday')
} else {
    otherToday.innerHTML = "Invalid Day"
    console.log("Invalid Day")
}


var random = Math.ceil(Math.random() * 70) + 30 + "%"
var otherRandom = document.getElementById('random')
var btn = document.getElementById('click')

btn.addEventListener("click", showEnergy)

function showEnergy(){
    btn.innerHTML = random;
}

 console.log(random)

 */



function multiplicationTable() {
    var num
    var result = ""

    var num = document.getElementById("number").value
    for (i = 1; i <= 10; i++) {
        result = result + '<p>' + num + "*" + i + "=" + (num * i) + '</p>'
        console.log(result)

    }
    document.getElementById('result').innerHTML = (result)
}


var btn = document.getElementById("btn")
btn.addEventListener("click", multiplicationTable)