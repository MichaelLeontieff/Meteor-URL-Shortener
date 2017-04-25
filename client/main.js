import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Meteor.subscribe("urls");

Template.showUrls.helpers({
  urls: function(){
    return URLs.find({}, {sort: {date: -1}});
  }
});

Template.newUrl.events({
  "submit .add-url": function(event) {
    let url = event.target.urlInput.value;

    Meteor.call("addURL", url);

    event.target.urlInput.value = "";

    return false;
  }
});


Template.showUrls.events({
  "click .urlDelete": function(event) {
    Meteor.call("removeURL", this._id);

    return false;
  }
});
