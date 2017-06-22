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
       let miles = parseInt($('#miles').val());
       let vin = $('#vin').val();
        // Miles.insert({
        //     vin:vin,
        //     miles: miles,
        //     author: Meteor.userId()
        // });
        Meteor.call('addMiles',vin,miles,Meteor.userId(),function(err,res){
            if(err){
                console.log(err);
                $('.alert-danger').show();
            }else{
                console.log(res)
                $('.alert-success').show();
                $('#vin').val();
                $('#miles').val();
            }
        })
    }

});
