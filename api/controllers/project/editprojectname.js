module.exports = {


  friendlyName: 'Editprojectname',


  description: 'Editprojectname project.',


  inputs: {

    id: {
      type: 'string'
    },

    name: {
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
    
    console.log('Selected project');
    console.log(findProject);


        var UpdateProject = await Project.update({ id: inputs.id })
        .set({
          "name": inputs.name,

        }).fetch();

      
      console.log('update project');
      console.log(UpdateProject);


    
      return exits.success({ project: UpdateProject });
    }



};
