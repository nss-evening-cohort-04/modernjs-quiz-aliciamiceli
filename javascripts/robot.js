'use strict';

var Robot = (function(CreateRobot){


CreateRobot.BaseRobot = function() {
  this.life = Math.round((Math.random() * 20) + 90);
  this.baseDamage = Math.round((Math.random()*20) + 10);
};

CreateRobot.ArticulatedRobot = function() {
  this.joints = 'mobile';
};
CreateRobot.ArticulatedRobot.prototype = new CreateRobot.BaseRobot();

CreateRobot.FirstArticulatedRobot = function(){
  this.extraLife = 10;
  this.extraDamage = 5;
  this.totalLife = this.life + this.extraLife;
  this.totalDamage = this.baseDamage + this.extraDamage;
};

CreateRobot.FirstArticulatedRobot.prototype = new CreateRobot.ArticulatedRobot();

var test = new CreateRobot.FirstArticulatedRobot();
console.log("test", test);

CreateRobot.SecondArticulatedRobot = function(){
  this.extraLife = 12;
  this.extraDamage = 4;
  this.totalLife = this.life + this.extraLife;
  this.totalDamage = this.baseDamage + this.extraDamage;
};

CreateRobot.SecondArticulatedRobot.prototype = new CreateRobot.ArticulatedRobot();

CreateRobot.CartesianRobot = function() {
  this.joints = 'stagnant';
};

CreateRobot.CartesianRobot.prototype = new CreateRobot.BaseRobot();

CreateRobot.FirstCartesianRobot = function(){
  this.extraLife = 6;
  this.extraDamage = 24;
  this.totalLife = this.life + this.extraLife;
  this.totalDamage = this.baseDamage + this.extraDamage;
};

CreateRobot.FirstCartesianRobot.prototype = new CreateRobot.CartesianRobot();

CreateRobot.SecondCartesianRobot = function(){
  this.extraLife = 3;
  this.extraDamage =3;
  this.totalLife = this.life + this.extraLife;
  this.totalDamage = this.baseDamage + this.extraDamage;
};

CreateRobot.SecondCartesianRobot.prototype = new CreateRobot.CartesianRobot();

CreateRobot.CylindricalRobot = function() {
  this.joints = 'round';
};

CreateRobot.CylindricalRobot.prototype = new CreateRobot.BaseRobot();

CreateRobot.FirstCylindricalRobot = function(){
  this.extraLife = 5;
  this.extraDamage = 6;
  this.totalLife = this.life + this.extraLife;
  this.totalDamage = this.baseDamage + this.extraDamage;
};

CreateRobot.FirstCylindricalRobot.prototype = new CreateRobot.CylindricalRobot();

CreateRobot.SecondCylindricalRobot = function(){
  this.extraLife = 3;
  this.extraDamage = 7;
  this.totalLife = this.life + this.extraLife;
  this.totalDamage = this.baseDamage + this.extraDamage;
};

CreateRobot.SecondCylindricalRobot.prototype = new CreateRobot.CylindricalRobot();

return CreateRobot;

})(Robot || {});