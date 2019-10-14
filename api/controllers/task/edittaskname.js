module.exports = {


  friendlyName: 'Edittaskname',


  description: 'Edittaskname task.',


  inputs: {

    id: {
      type: 'string'
    },

    tName: {
      type: 'string'
    },


  },


  exits: {

    success: {
      outputDescription: 'This is the out put',
      outputType: {
        project: 'ref'
      }
    },


  },

  fn: async function (inputs, exits) {



    var findTask = await Task.findOne({ id: inputs.id });
    
    console.log('Selected project');
    console.log(findTask);


        var updateTask = await Task.update({ id: inputs.id })
        .set({
          "name": inputs.tName,

        }).fetch();

      
      console.log('Update Task ');
      console.log(updateTask);


    
      return exits.success({ project: updateTask });
    }



};
