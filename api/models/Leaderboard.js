'use strict';

var activityType = {
    WALKING: 'walking',
    RUNNING: 'running',
    CYCLING: 'cycling',
    EL_CYCLING: 'el_cycling',
    WEIGHT_TRAINING: 'weight_training',
    SKIING: 'skiing',
    FITNESS_STUDIO: 'fitness_studio',
    PADDLING: 'paddling',
    ROWING: 'rowing',
    SWIMMING: 'swimming',
    FOOTBALL: 'football',
    HANDBALL: 'handball',
    BASKETBALL: 'basketball',
    VOLLEYBALL: 'volleyball',
    AEROBICS: 'aerobics',
    SKATING: 'skating',
    CLIMBING: 'climbing',
    TENNIS: 'tennis',
    DANCING: 'dancing',
    ROLLERSKIING: 'rollerski',
    INLINE_SKATING: 'inline_skate',
    SKATEBOARDING: 'skateboarding',
    PILATES: 'pilates',
    YOGA: 'yoga',
    MARTIAL_ARTS: 'martial_arts',
    HOCKEY: 'hockey',
    BANDY: 'bandy',
    ALPINESKI: 'alpine_ski',
    SQUASH: 'squash',
    GOLF: 'golf',
    GYMNASTICS: 'gymnastics',
    ORIENTEERING: 'orienteering',
    WHEELCHAIR: 'wheelchair',
    OTHERS: 'others'
};

var activityTypes = Object.keys(activityType);

module.exports = {
  activityType: activityType,
  activityTypes: activityTypes,

  attributes: {
    player: {model: 'Player'},
    activityType: {type: 'string', in: activityTypes},
    score: {type: 'integer'}
  }
};
