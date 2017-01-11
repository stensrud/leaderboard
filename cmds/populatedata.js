'use strict';

var femaleNames = ['Sylvia', 'Helena', 'Lise', 'Mette', 'Agnes', 'Ylva', 'Anne', 'Kari', 'Trine', 'Linda', 'Monica', 'Cathrine', 'Anna', 'Sofia', 'Embla', 'Emma', 'Johanne', 'Hanne', 'Natalie', 'Jenny', 'Thea', 'Nora', 'Mathea', 'Ingrid', 'Line', 'Marianne', 'Martha', 'Marte', 'Julie', 'Julia', 'Elisabeth', 'Christina', 'Kristine', 'Åse', 'Sigrid', 'Sølvi', 'Mona', 'Lene', 'Susanne', 'Phillipa', 'Synnøve', 'Caroline', 'Unni', 'Nina', 'Marit', 'Mari', 'Ingvild', 'Cecilie', 'Maria', 'Marie', 'Ingeborg', 'Gøril', 'Mia', 'Silje', 'Anette', 'Gro', 'Beate', 'Heidi', 'Ragnhild', 'Iben', 'Irene', 'Eline', 'Tine', 'Tina', 'Britt', 'Elin', 'Camilla', 'Margrethe', 'Anita', 'Gunnhild', 'Birgitte', 'Benedicte', 'Kjersti', 'Jane', 'Josefine', 'Tonje', 'Victoria', 'Isadora', 'Siril', 'Ida', 'Kaja', 'Helene', 'Olivia', 'Solveig', 'Connie', 'Siv'];
var maleNames = ['Jon', 'Alexander', 'Raymond', 'Daniel', 'Ronny', 'Lasse', 'Jens', 'Nils', 'Fredrik', 'Ole', 'Øyvind', 'Henning', 'Stig', 'Martin', 'Adrian', 'Ken', 'Åsmund', 'Phillip', 'Tom', 'Erik', 'Frank', 'Didrik', 'Vidar', 'Andreas', 'Hogne', 'Tommy', 'Jørgen', 'Stein', 'Arne', 'Odd', 'Amund', 'Trond', 'Stian', 'Morten', 'Thomas', 'Kristian', 'Tore', 'Håvard', 'Hein', 'Robert', 'Bjørn', 'Mattis', 'Christer', 'Peter', 'Daniel', 'Willy', 'Terje', 'Marcus', 'Truls', 'Frode', 'Kjetil', 'Hartvig', 'Rune', 'Axel', 'Eldar', 'Morten', 'Elias', 'Eirik', 'Jonas', 'Magnus', 'Espen', 'Håkon', 'Harald', 'Edvard', 'Ola', 'Roald', 'Bob', 'Kåre', 'Arvid', 'Helge', 'Jeff', 'Bernart', 'Bård', 'Jacob', 'Johnny', 'Wilhelm', 'William', 'Even', 'Benjamin', 'Mathias', 'Per', 'Kornelius', 'Frantz', 'Tobias', 'Sakkarias', 'Sturle', 'Leon', 'Petter', 'Lars'];
var lastNames = ['Stensrud', 'Sundli', 'Härdig', 'Soldal', 'Skogstad', 'Fiskå', 'Støle', 'Skar', 'Akre', 'Rekdal', 'Larsen', 'Haukaasen', 'Søgaard', 'Valen', 'Overå', 'Nordvik', 'Sørvik', 'Trøstaker', 'Dalsgård', 'Thorsen', 'Lund', 'Fjellum', 'Jacobsen', 'Jensen', 'Olsen', 'Nilsen', 'Frantzen', 'Olavsen', 'Godager', 'Kristiansen', 'Lie', 'Vange', 'Aasen', 'Lunde', 'Sande', 'Østerbø', 'Øien', 'Sæther', 'Kjærnstad', 'Christensen', 'Dannevig', 'Fenn', 'Gaasø', 'Strand', 'Kjernli', 'Matre', 'Sørlie', 'Støen', 'Meyer', 'Moe', 'Ingebrigtsen', 'Steinsland', 'Krohn', 'Hanssen', 'Thrones', 'Aasjord', 'Flakke', 'Borgersen', 'Rauset', 'Godager', 'Mæland', 'Gløtvold', 'Myrvoll', 'Mellem', 'Hirschholm', 'Jynge', 'Julin', 'Garfors', 'Strøm', 'Gloppen', 'Lillebøe', 'Håland', 'Kvalbein', 'Malum', 'Gundersen', 'Hauge', 'Stenersen', 'Helland', 'Johansen', 'Johnsen', 'Eliassen', 'Neset', 'Blom', 'Synnevaag', 'Rasmussen', 'Wilhelmsen'];

var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var generateName = function () {
  var gender = getRandomInt(0,1);
  var names;

  if (gender)
      names = maleNames;
  else
      names = femaleNames;

  var firstName = names[getRandomInt(0,names.length-1)];

  if (getRandomInt(0,1)==0) {
      if (getRandomInt(0,1)==0)
          firstName += '-';
      else
          firstName += ' ';

      firstName += names[getRandomInt(0,names.length-1)];
  }

  var lastName = lastNames[getRandomInt(0,lastNames.length-1)];

  if (getRandomInt(0,1)==0) {
      if (getRandomInt(0,1)==0)
          lastName += '-';
      else
          lastName += ' ';

      lastName += lastNames[getRandomInt(0,lastNames.length-1)];
  }

  return firstName + ' ' + lastName;
};

module.exports = {
  execute: function (cb) {
    async.times(1000, function (n, cb) {
      Player.create({name: generateName()}, cb);
    }, cb);
  }
};
