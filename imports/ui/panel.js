import Miles from '../../api/miles';
import {Template} from 'meteor/templating';
import {Meteor} from 'meteor/meteor';
import {Session} from 'meteor/session';

import './panel.html';


Template.tmpl_main.helpers({
    isLoggedIn(){
        Session.set('user',Meteor.userId());
        return Meteor.user();
    },
    allMiles(){
        return Miles.find({
            author:Meteor.userId()
        });
    },
    loggedUser(){
        return Session.get('user');
    }
});

Template.tmpl_main.events({
    'click .btnAdd'(event){
       let miles = $('#miles').val();
       let vin = $('#vin').val();
        Miles.insert({
            vin:vin,
            miles: miles,
            author: Meteor.userId()
        });
    }

});
