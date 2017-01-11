var Sails = require('sails');
Sails.load(function(err, sails) {
  // At this point you have access to all your models, services, etc.
  if (err) return console.log('ERROR',err);

  if (process.argv.length<3) {
    return console.log('ERROR','Command name omitted');
  }

  var cmd = process.argv[2];
  if (cmd.match(/^[a-z]+$/)===null) {
    return console.log('ERROR','Invalid cmd name');
  }

  var script = require(__dirname+'/cmds/'+cmd+'.js');

  script.execute(function (err) {
    if (err) console.log(err);
    console.log('Script done');
  });
});
