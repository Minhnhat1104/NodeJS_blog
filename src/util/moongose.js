module.exports = {
  multipleMongooseToObject: function (moongoses) {
    return moongoses.map((moongose) => moongose.toObject());
  },
  mongooseToObject: function (moongose) {
    return moongose ? moongose.toObject() : moongose;
  },
};
