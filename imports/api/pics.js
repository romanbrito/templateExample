import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Pics = new Mongo.Collection('pics');


// Schema

const PicSchema = new SimpleSchema({
  imageURL: {type: String},
  picID: { type: String},
});