module.exports = {


  friendlyName: 'Remove note',


  description: '',


  inputs: {

    noteId: {

      type: 'ref',
      required: true

    }

  },

  exits: {
  },


  fn: async function (inputs, exits) {


    console.log('inputs');
    console.log(inputs);


    await Note.destroy({ id: inputs.noteId });

    console.log("Deleted")



    return exits.success();

  }
};
