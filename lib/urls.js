URLs = new Meteor.Collection("urls");

Meteor.methods({
  addURL: function(url){
    URLs.insert({
      userId: Meteor.userId(),
      longURL: url,
      shortId: Random.id(6),
      date: new Date()
    });
  },
  removeURL: function(url){
    URLs.remove(url);
  }
});
