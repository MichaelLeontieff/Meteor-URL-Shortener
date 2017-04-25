import { Meteor } from 'meteor/meteor';

Meteor.publish("urls", function () {
  return URLs.find({
    userId: this.userId
  });
});

Meteor.startup(() => {
  // code to run on server at startup
});
