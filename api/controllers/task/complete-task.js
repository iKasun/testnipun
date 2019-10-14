module.exports = {


  friendlyName: 'Complete task',


  description: '',

  inputs: {

    id: {
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


    // var findTask = await Task.findOne({ id: inputs.id });
    
    console.log('Selected curcuit');
    console.log(inputs);


        var completetask = await Task.update({ id: inputs.id })
        .set({
          "status": "Completed",
 
        }).fetch();

      
      console.log('create task');
      console.log(completetask);


    
      return exits.success({ task: completetask });
    
      }

};
