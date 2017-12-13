/*
var calculatePrice = function(movie, time, age) {
var price = 0;
  if (movie === "new") {
    price += 36;
  } else {
    price += 26;
  }
  if (age === "yes") {
    price *= .85;
  } else {
    console.log("age else");
  }
  if (student === "yes") {
    price -= 2;
  } else {
    console.log("You are not a student so you are dumb");
  }
  if (time === "matinee") {
    price -= 4;
  } else {
    console.log("Wake up earlier!")
  }
}

var oldArray = ["old room", "ecks", "rocky", "snow", "plan", "reefer", "troll", "gigli", "shark", "xmas", "mac"];
var newArray = ["emoji", "madea", "thanks", "snowman", "friend", "faith", "flatliners", "wolfcop", "grandmas", "ghost"];
*/

//Forget arrays. Make new movie constructor and put inside of tickets.

function Movie(times, ifClassic){
  this.isMatinee = isMatinee;
  this.times = times;
  times = [];
  this.ifClassic = ifClassic;
  isMatinee = true; //maybe move this line and two following
  if (time < 6) {
    this.isMatinee = false;
  }
}

function Tickets(movie, age, student, time, number) {
  this.movie = movie;
  this.age = age;
  this.student = student;
  this.time = time;
  this.number = number;
  this.price = 0;
  if (this.movie === "new") {
    this.price += 36;
  } else {
    this.price += 26;
  }
  if (this.age === "yes") {
    this.price *= .85;
  } else {
    console.log("age else");
  }
  if (this.student === "yes") {
    this.price -= 2;
  } else {
    console.log("You are not a student so you are dumb");
  }
  if (this.time === "matinee") {
    this.price -= 4;
  } else {
    console.log("Wake up earlier!")
  }
  this.price = this.price * this.number;
  console.log(this.price);
}

Tickets.prototype.displayTicketPrice = function(){
  return "Your movie costs $" + Math.round(this.price);
}

Tickets.prototype.displayPoster = function(){
  var theMovie = this.movie;
  console.log(theMovie);
  oldArray.forEach(function(item){
    //debugger;
    if (item === theMovie) {
      console.log(theMovie);
      debugger;
      return "<br><img src='img/" + this.movie + ".jpg' />";
    }
  }) /*
  if (this.movie === "old room") {
    return "<br><img src='img/old room.jpg' />"
  } */
}

$(document).ready(function(){
  $("form#theForm").submit(function(event){
    event.preventDefault();
    $("#result").empty();
    var movie = $("#movie").val();
    var movieObj = new Movie();
//    var name = $("#movie[name]").val();
    var age = $("input:radio[name=age]:checked").val();
    var student = $("input:radio[name=student]:checked").val();
    var time = $("input:radio[name=time]:checked").val();
    var number = $("input.number").val();
    var newTickets = new Tickets(movie, age, student, time, number);
    $("#result").append(newTickets.displayTicketPrice());
    $("#result").append(newTickets.displayPoster());
  });
});
