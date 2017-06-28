import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

Template.Nav_bar.onRendered(function () {
  $(document).ready(function () {

    $(".button-collapse").sideNav();
    $('.slider').slider();
    });

  });

Template.Scroll_fire.onRendered(function () {
  var options = [
    {selector: '#staggered-test', offset: 50, callback: function(el) {
      Materialize.toast("This is our ScrollFire Demo!", 1500 );
    } },
    {selector: '#staggered-test', offset: 205, callback: function(el) {
      Materialize.toast("Please continue scrolling!", 1500 );
    } },
    {selector: '#staggered-test', offset: 400, callback: function(el) {
      Materialize.showStaggeredList($(el));
    } },
    {selector: '#image-test', offset: 500, callback: function(el) {
      Materialize.fadeInImage($(el));
    } }
  ];
  Materialize.scrollFire(options);
});

// Meteor.startup(function () {
//   $(window).resize(function (evt) {
//
//     $('.carousel.carousel-slider').carousel({
//       fullWidth: true
//     });
//
//   });
// });