import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import './task.js';
import './body.html';

Template.body.helpers({
  tasks() {
    return Tasks.find({});
  },
});

// Code for enabling submit event
Template.body.events({

  'submit .form-register': function(event, template) {

    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const bDate = event.target.bDay.value;

    // Insert students info into the collection
    Tasks.insert({
      name,
      email,
      phone,
      bDate,
      createdAt: new Date(), // current time
    });

    // Clear form
    event.target.name.value = '';
    event.target.email.value = '';
    event.target.phone.value = '';
    event.target.bDay.value = '';
  },
});
