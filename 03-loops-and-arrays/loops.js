console.log("***********");
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log("***********");
var reviews = [5, 4.5, 7, 8, 9];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
console.log("average = " + total / reviews.length);
console.log("***********");
// use the simplified loop
var sportsOne = ["Golf", "Swimming", "Tennis", "Hockey"];
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    console.log(tempSport);
}
console.log("***********");
sportsOne.push("basketball");
for (var _a = 0, sportsOne_2 = sportsOne; _a < sportsOne_2.length; _a++) {
    var tempSport = sportsOne_2[_a];
    console.log(tempSport);
}
console.log("***********");
for (var _b = 0, sportsOne_3 = sportsOne; _b < sportsOne_3.length; _b++) {
    var tempSport = sportsOne_3[_b];
    if (tempSport == "Swimming") {
        console.log(tempSport + "<< my favorite!");
    }
    else {
        console.log(tempSport);
    }
}
