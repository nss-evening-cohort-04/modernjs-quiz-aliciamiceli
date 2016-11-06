'use strict';

var robotType;
var playerOne;

$('#attack').hide();

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
  parseToDom += `<h4>${$('#player-setup').val()} is a ${robotType}</h4>`;
  parseToDom +=`</div>`;

  $('#leftOutput').append(parseToDom);
}

function secondParseFunction() {
  let secondParseToDom = `<div>`;
    secondParseToDom += `<h4>${$('#enemy-setup').val()} is a ${enemyType}</h4>`;
  secondParseToDom += `</div>`;

  $('#rightOutput').append(secondParseToDom);
}

$("#submit").click(function() {
  var playerName = $("#player-setup").val();
  var enemyName = $('#enemy-setup').val();
  grabRobotType();
  grabEnemyType();
  parseToDomFunction();
  secondParseFunction();
  $('#attack').show();
  $('#submit').hide();
});

$('#attack').on('click', battleGroundFunction);

function battleGroundFunction(){
  if (publicEnemy.totalLife > 0) {
    goodGuyAttackFunction();
  }

  if (playerOne.totalLife > 0) {
    enemyAttackFunction();
  if (publicEnemy.totalLife > 0 && playerOne.totalLife > 0){
    $('#battleText').html('');

  let parseBattleToDom = `<div>`;
    parseBattleToDom += `${$('#player-setup').val()} attacks ${$('#enemy-setup').val()}`;
    parseBattleToDom +=` with bare hands for ${playerOne.totalDamage} points of damage!`;
    parseBattleToDom +=`<br>${$('#enemy-setup').val()} now has ${publicEnemy.totalLife} life left.`;
    parseBattleToDom += `<br><br><br>`;
    parseBattleToDom += `${$('#enemy-setup').val()} attacks ${$('#player-setup').val()}`;
    parseBattleToDom += ` with bare hands for ${publicEnemy.totalDamage} points of damage!`;
    parseBattleToDom += `<br>${$('#player-setup').val()} now has ${playerOne.totalLife} life left.`;
  parseBattleToDom += `</div>`;
  $('#battleText').append(parseBattleToDom);

    } else if (playerOne.totalLife <= 0) {
      let parseBattleToDomPlayerOne = `After one more attack, ${$('#player-setup').val()} has a life value of ${playerOne.totalLife}.`;
      parseBattleToDomPlayerOne += `<h4><br>${$('#enemy-setup').val()} wins!</h4>`;
      $('#battleText').append(parseBattleToDomPlayerOne);
    }
    if (publicEnemy.totalLife <= 0) {
      let parseBattleToDomPublicEnemy = `After one more attack, ${$('#enemy-setup').val()} has a life value of ${publicEnemy.totalLife}.`;
      parseBattleToDomPublicEnemy = `<h4>${$('#player-setup').val()} wins!</h4>`;
      $('#battleText').append(parseBattleToDomPublicEnemy);
    }
  }
}

function enemyAttackFunction() {
  playerOne.totalLife -= publicEnemy.totalDamage;
}

function goodGuyAttackFunction() {
  publicEnemy.totalLife -= playerOne.totalDamage;
}