'use strict';

var Robot = (function(eventListeners){

$('#firstArticulatedRobotPlayer').on('click', function(){
  this.classList.toggle('selected');
});

$('#secondArticulatedRobotPlayer').on('click', function(){
  this.classList.toggle('selected');
});

$('#firstCartesianRobotPlayer').on('click', function(){
  this.classList.toggle('selected');
});

$('#secondCartesianRobotPlayer').on('click', function(){
  this.classList.toggle('selected');
});

$('#firstCylindricalRobotPlayer').on('click', function(){
  this.classList.toggle('selected');
});

$('#secondCylindricalRobotPlayer').on('click', function(){
  this.classList.toggle('selected');
});

$('#firstArticulatedRobotEnemy').on('click', function(){
  this.classList.toggle('selected');
});

$('#secondArticulatedRobotEnemy').on('click', function(){
  this.classList.toggle('selected');
});

$('#firstCartesianRobotEnemy').on('click', function(){
  this.classList.toggle('selected');
});

$('#secondCartesianRobotEnemy').on('click', function(){
  this.classList.toggle('selected');
});

$('#firstCylindricalRobotEnemy').on('click', function(){
  this.classList.toggle('selected');
});

$('#secondCylindricalRobotEnemy').on('click', function(){
  this.classList.toggle('selected');
});

return eventListeners;

})(Robot || {});