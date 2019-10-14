module.exports = {


  friendlyName: 'Edittaskdescription',


  description: 'Edittaskdescription task.',

  inputs: {

    id: {
      type: 'string'
    },

    tDescription: {
      type: 'string'
    },


  },


  exits: {

    success: {
      outputDescription: 'This is the out put',
      outputType: {
        task: 'ref'
      }
    },


  },

  fn: async function (inputs, exits) {

    var findTask = await Task.findOne({ id: inputs.id });

    console.log('inputs');
    console.log(inputs);
    console.log('Selected task');
    console.log(findTask);


        var UpdateTask = await Task.update({ id: inputs.id })
        .set({
          "description": inputs.tDescription,

        }).fetch();

      
      console.log('update task');
      console.log(UpdateTask);


    
      return exits.success({ task: UpdateTask });
    }



};
