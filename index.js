// row x column


// define an array

let theArray =  [
    ["zz", "zo", "zt", ],
    ["oz", "oo", "ot", ],
    ["tz", "to", "tt", ],
];

// define turn, set value to x, x begins the game

var turn = "O"

// listners engage, when pressed, set the value of the cell to turn
$(".zz").click(function() {
    $(".xoro1").text(turn);

    theArray.forEach((element, index) => {
        theArray[0][0] = turn;
      });
});
$(".zo").click(function() {
    $(".xoro2").text(turn);

    theArray.forEach((element, index) => {
        theArray[0][1] = turn;
      });
});
$(".zt").click(function() {
    $(".xoro3").text(turn);

    theArray.forEach((element, index) => {
        theArray[0][2] = turn;
      });
});
$(".oz").click(function() {
    $(".xoro4").text(turn);

    theArray.forEach((element, index) => {
        theArray[1][0] = turn;
      });
});
$(".oo").click(function() {
    $(".xoro5").text(turn);

    theArray.forEach((element, index) => {
        theArray[1][1] = turn;
      });
});
$(".ot").click(function() {
    $(".xoro6").text(turn);

    theArray.forEach((element, index) => {
        theArray[1][2] = turn;
      });
});
$(".tz").click(function() {
    $(".xoro7").text(turn);

    theArray.forEach((element, index) => {
        theArray[2][0] = turn;
      });
});
$(".to").click(function() {
    $(".xoro8").text(turn);

    theArray.forEach((element, index) => {
        theArray[2][1] = turn;
      });
});
$(".tt").click(function() {
    $(".xoro9").text(turn);

    theArray.forEach((element, index) => {
        theArray[2][2] = turn;
      });
});


// this code changes the value of the array element

console.log(theArray);


