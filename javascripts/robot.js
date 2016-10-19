"use strict";

let Robot = () => {
this.type = null;
this.name = null;
this.baseDamage = 10;
};

let bipedal = () => {
  this.type = bipedal;
  this.name = 'Zeus';
};

bipedal.prototype = new Robot();

let cylindrical = () => {
  this.type = cylindrical;
  this.name = 'Second Zeus';
};

cylindrical.prototype = new Robot();

let delta = () => {
  this.type = delta;
  this.name = 'Third Zeus';
};

delta.prototype = new Robot();