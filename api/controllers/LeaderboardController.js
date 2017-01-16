
const mongodb = require('mongodb');
const utils = require('../utils');


const list = (req, res) => {

  const activity = req.param('activity');

  if (!utils.validateActivity(activity))  {
    res.json(utils.respError('Activity parameter validation error'));
  }

  Leaderboard.find({activityType: activity}).sort({score: -1}).limit(10)
    .then( (data)=> {

      if(!data) {
        return res.json(utils.respError('No leaderboard data found'))
      }

      let players = [];
      let promises = [];

      async.each(data,
        (item, clbk) => {

          const player = item.player;
          const leadScore = item.score;

          promises.push(
            Player.findOne({id: player})
              .then( (data)=> {

                const resp = _.assign(data, {score: leadScore});
                players.push(resp);
                clbk();
              })
          )
        },
        (err) => {

          if(err) {
            return res.json(utils.respError(err))
          }

          Promise.all(promises).then(
            () => {
             return res.json(utils.respSuccess(players))
            }
          )
        });
    })
    .catch( (err) => {
      return res.json(utils.respError(err))
    })
};


const incr = (req, res) => {

  const activity = req.param('activity');

  if (!utils.validateActivity(activity))  {
    res.json(utils.respError('Activity parameter validation error'));
  }

  Player.find().limit(1)
    .then( (data) => {

      if (!data) {
        return res.json(utils.respError('No players data found'))
      }

      Leaderboard.native(function (err, leaderboardConnection) {

        if (err)  res.json({error: true, data: err});

        leaderboardConnection.update(
          {player: mongodb.ObjectID(data[0].id), activityType: activity},
          {'$inc': {score: 1}},
          {upsert: true})
          .then(
            (data) => {
              res.json(data);
            }
          )

      });
    })
    .catch( (err) => {
      return res.json(utils.respError(err))
    })

};

module.exports = {
  incr: incr,
  list: list
};
