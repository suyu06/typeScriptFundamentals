console.log("***********");
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log("***********");
let reviews: number[] = [5, 4.5, 7, 8, 9];
let total: number = 0;
for (let i = 0; i < reviews.length; i++) {
  console.log(reviews[i]);
  total += reviews[i];
}
console.log("average = " + total / reviews.length);
console.log("***********");
// use the simplified loop
let sportsOne: string[] = ["Golf", "Swimming", "Tennis", "Hockey"];
for (let tempSport of sportsOne) {
  console.log(tempSport);
}
console.log("***********");
// add element to the array
sportsOne.push("basketball");
for (let tempSport of sportsOne) {
  console.log(tempSport);
}
console.log("***********");
for (let tempSport of sportsOne) {
  if (tempSport == "Swimming") {
    console.log(tempSport + "<< my favorite!");
  } else {
    console.log(tempSport);
  }
}
