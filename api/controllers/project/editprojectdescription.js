module.exports = {


  friendlyName: 'Editprojectdescription',


  description: 'Editprojectdescription project.',

  inputs: {

    id: {
      type: 'string'
    },

    description: {
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

    var findProject = await Project.findOne({ id: inputs.id });

    console.log('inputs');
    console.log(inputs);
    console.log('Selected project');
    console.log(findProject);


        var UpdateProject = await Project.update({ id: inputs.id })
        .set({
          "description": inputs.description,

        }).fetch();

      
      console.log('update project');
      console.log(UpdateProject);


    
      return exits.success({ project: UpdateProject });
    }



};
