module.exports = {


  friendlyName: 'Removetask',


  description: 'Removetask task.',


  inputs: {

    taskId: {

      type: 'ref',
      required: true

    }

  },

  exits: {
  },


  fn: async function (inputs, exits) {


    console.log('inputs');
    console.log(inputs);


    await Task.destroy({ id: inputs.taskId });

    console.log("Deleted")



    return exits.success();

  }
};
