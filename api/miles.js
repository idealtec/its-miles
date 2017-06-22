import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

let Miles = new Mongo.Collection('miles');
export default  Miles;

Meteor.methods({
    addMiles(vin,miles,author){
        check(vin, String);
        check(miles, Number);
        let newRecord = Miles.insert({
            vin:vin,
            miles: miles,
            author: author
        });
        console.log('Added new record vin',vin,' Miles:',miles,' Id::',newRecord);
        if(newRecord){
            return newRecord;
        }
    }
});