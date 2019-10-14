module.exports = {


  friendlyName: 'New project',


  description: '',

  inputs: {

    id: {
      type: 'string'
    },

    name: {
      type: 'string'
    },

    description: {

      type: 'string'
    },
    attachment: {

      type: 'ref'
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


    if (inputs.id == '0') {

      console.log('inputs');
      console.log(inputs.id);

      var createProject = await Project.create({
        "name": inputs.name,
        "description": inputs.description,
        "status": 'Beginning',

      }).fetch();

      console.log('Done');

    } else {

      var findProject = await Curcuit.findOne({ id: inputs.id });

      console.log('Selected curcuit');
      console.log(findProject);
      
      var createProject = await Project.update({ id: inputs.id })
        .set({
          "name": inputs.name,
          "description": inputs.description,
          "status": 'Beginning',
      
        }).fetch();

    }
    console.log('create curcuit');
    console.log(createProject);



    return exits.success({ project: createProject });
  }



};
