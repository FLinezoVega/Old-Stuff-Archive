'use strict';

//Collapsing Hamburger Navigation Menu for Mobile
let hambaga = $('.icon');

hambaga.click(function () {
  var x = document.getElementById("mySidebar");
  if (x.className === "sidebar") {
    x.className += " responsive";
  } else {
    x.className = "sidebar";
  }
});



/*/for whatever reason, d3 is only working in the script tag of index.html and not in this separate script.js file
//Load in Recent Activity from csv file
d3.csv("mock_data/recent-activity.csv").then(function(data) {

    for (let i = 0; i < data.length; i++) {
    $("#recent-activity").html('');
    $("#recent-activity").after('<li class="list-group-item" id="recent-activity">'+data[i].recent+'</li>');
    }

    
});

//Load in recent dev requests from csv file    
d3.csv("mock_data/dev-req.csv").then(function(data) {

    for (let i = 0; i < data.length; i++) {
    $("#dev-req").html('');
    $("#dev-req").after('<li class="list-group-item" id="dev-req">'+data[i].recent+'</li>');
    }

    
});
 
//load in recent dev team join requests from csv file    
d3.csv("mock_data/join-req.csv").then(function(data) {

    for (let i = 0; i < data.length; i++) {
    $("#join-req").html('');
    $("#join-req").after('<li class="list-group-item" id="join-req">'+data[i].recent+'</li>');
    }
});*/    


