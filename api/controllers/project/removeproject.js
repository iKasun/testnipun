module.exports = {


  friendlyName: 'Removeproject',


  description: 'Removeproject project.',


  inputs: {

    projId: {

      type: 'ref',
      required: true

    }

  },

  exits: {
  },


  fn: async function (inputs, exits) {


    console.log('inputs');
    console.log(inputs);


    await Project.destroy({ id: inputs.projId });

    console.log("Deleted")



    return exits.success();

  }

};
