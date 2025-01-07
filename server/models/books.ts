const {Schema} = require('mongoose');

//this model will be used in the User.ts file

const bookSchema = new Schema({
    authors: [
      {
        type: String,
      },
    ],
    description: {
      type: String,
      required: true,
    },
    bookId: {
      type: String,
      required: true,
    },
    link: {
        type: String,
    },
    title: {
      type: String,
      required: true,
    },
}
  );

  module.exports = bookSchema;
