
const success = (data) => {return {error: false, data: data}};
const error = (error) => {return {error: true, msg: error}};

const validateActivity = (activity) => {

  return (!activity || _.indexOf(Leaderboard.activityTypes, activity) !== -1);

};

module.exports = {
  respSuccess: success,
  respError: error,
  validateActivity: validateActivity
};
