var request = require('supertest');

describe('LeaderboardController', function() {

  describe('#incr()', function() {
    it('should increment player\'s score with activity type RUNNING', function (done) {
      request(sails.hooks.http.app)
        .get('/leaderboard/incr?activity=RUNNING')
        .expect(200)
        .expect('Content-Type', /json/)
        .end( (err, res) => {
          if(err) return done(err);
          if(res.body.error) return done('An error occured: ' + res.body.data);
          if(!res.body) return done('Wrong response body');
          done();
        })
    });
  });


  describe('#list()', function() {
    it('should list players with scores with activity type RUNNING', function (done) {
      request(sails.hooks.http.app)
        .get('/leaderboard/list?activity=RUNNING')
        .expect(200)
        .expect('Content-Type', /json/)
        .end( (err, res) => {
          if(err) return done(err);
          if(res.body.error) return done('An error occured: ' + res.body.data);
          if(!res.body) return done('Wrong response body');
          if(!res.body.data[0].score) return done('Score doesn\'t exist in response body');
          done();
        })
    });
  });

});
