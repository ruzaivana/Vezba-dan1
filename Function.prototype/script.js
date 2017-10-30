/*var dudeObj = {
    job: 'Ninja',
    say: function (who) {
        return 'Hey ' + who + ', I am a ' + this.job;
    }
 };
 dudeObj.say('Dude'); // "Haya Dude, I am a Ninja"
 
 var programmerObj = { job: 'Scripting guru' };
 dudeObj.say.call(programmerObj, 'Dude');*/


//  this.x = 9;    // this refers to global "window" object here in the browser
//  var module = {
//    x: 81,
//    getX: function() { return this.x; }
//  };
 
//  module.getX(); // 81
 
//  var retrieveX = module.getX;
//  retrieveX();   
//  // returns 9 - The function gets invoked at the global scope
 
//  // Create a new function with 'this' bound to module
//  // New programmers might confuse the
//  // global var x with module's property x
//  var boundGetX = retrieveX.bind(module);
//  boundGetX(); // 
var dudeObj = {
    job: 'Ninja',
    say: function (who) {
        return 'Hey ' + who + ', I am a ' + this.job;
    }
 };
 dudeObj.say('Dude');
 var programmerObj = { job: 'Scripting guru' };
 dudeObj.say.apply(programmerObj, ['Dude']);
