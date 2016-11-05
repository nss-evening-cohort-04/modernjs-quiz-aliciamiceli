'use strict';

var robotType;
var playerOne;

function grabRobotType() {
  if ($('#firstArticulatedRobotPlayer').hasClass('selected')) {
    robotType = 'First Articulated Robot';
    playerOne = new Robot.FirstArticulatedRobot();
  } else if ($('#secondArticulatedRobotPlayer').hasClass('selected')) {
    robotType = 'Second Articulated Robot';
    playerOne = new Robot.SecondArticulatedRobot();
  } else if ($('#firstCartesianRobotPlayer').hasClass('selected')) {
    robotType = 'First Cartesian Robot';
    playerOne = new Robot.FirstCartesianRobot();
  } else if ($('#secondCartesianRobotPlayer').hasClass('selected')) {
    robotType = 'Second Cartesian Robot';
    playerOne = new Robot.SecondCartesianRobot();
  } else if ($('#firstCylindricalRobotPlayer').hasClass('selected')) {
    robotType = 'First Cylindrical Robot';
    playerOne = new Robot.FirstCylindricalRobot();
  } else {
    robotType = 'Second Cylindrical Robot';
    playerOne = new Robot.SecondCylindricalRobot();
  }
}

var enemyType;
var publicEnemy;

function grabEnemyType() {
  if ($('#firstArticulatedRobotEnemy').hasClass('selected')) {
    enemyType = 'First Articulated Robot';
    publicEnemy = new Robot.FirstArticulatedRobot();
  } else if ($('#secondArticulatedRobotEnemy').hasClass('selected')) {
    enemyType = 'Second Articulated Robot';
    publicEnemy = new Robot.SecondArticulatedRobot();
  } else if ($('#firstCartesianRobotEnemy').hasClass('selected')) {
    enemyType = 'First Cartesian Robot';
    publicEnemy = new Robot.FirstCartesianRobot();
  } else if ($('#secondCartesianRobotEnemy').hasClass('selected')) {
    enemyType = 'Second Cartesian Robot';
    publicEnemy = new Robot.SecondCartesianRobot();
  } else if ($('#firstCylindricalRobotEnemy').hasClass('selected')) {
    enemyType = 'First Cylindrical Robot';
    publicEnemy = new Robot.FirstCylindricalRobot();
  } else {
    enemyType = 'Second Cylindrical Robot';
    publicEnemy = new Robot.SecondCylindricalRobot();
  }
}




function parseToDomFunction() {
let parseToDom = `<div>`;
   parseToDom += `${$('#player-setup').val()} is a ${robotType}`;
parseToDom +=`</div>`;

$('#leftOutput').append(parseToDom);
}


function secondParseFunction() {
  let secondParseToDom = `<div>`;
    secondParseToDom += `${$('#enemy-setup').val()} is a ${enemyType}`;
  secondParseToDom += `</div>`;

$('#rightOutput').append(secondParseToDom);
}

  $("#submit").click(function() {
    console.log("player-setup", $('#player-setup'));
    var playerName = $("#player-setup").val();
    var enemyName = $('#enemy-setup').val();
    console.log("playerName", playerName);
    console.log("enemyName", enemyName);
    grabRobotType();
    grabEnemyType();
    parseToDomFunction();
    secondParseFunction();
console.log("player one", playerOne);
console.log("public enemy", publicEnemy);
testBattleGroundFunction();
  });


function testBattleGroundFunction () {

for (let i=0; i < 5; i ++) {
if (publicEnemy.totalLife > 0) {
  goodGuyAttackFunction();
} else if (publicEnemy.totalLife <= 0) {
  console.log('good guy wins!');
  break;
}

if (playerOne.totalLife > 0) {
  enemyAttackFunction();
} else if (playerOne.totalLife <= 0){
  console.log("bad guy wins!");
  break;
}
}

}

function enemyAttackFunction() {
  playerOne.totalLife -= publicEnemy.totalDamage;
  console.log("public enemy life", publicEnemy.totalLife);
}

function goodGuyAttackFunction() {
  publicEnemy.totalLife -= playerOne.totalDamage;
  console.log("player one life", playerOne.totalLife);
}


