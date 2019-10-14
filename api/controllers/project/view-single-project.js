module.exports = {


  friendlyName: 'View single project',


  description: 'Display "Single project" page.',

  inputs: {

    id: {
      type: 'string'
    },

    project: {
      type: 'string'
    },

  },

  exits: {

    success: {
      viewTemplatePath: 'pages/project/single-project'
    },
    outputType: {
      project: 'ref'
    },

  },


  fn: async function (inputs, exits) {


    if (Object.keys(inputs).length == 0) {

      console.log('if hits');

      var project = '';


    } else {

      console.log('else hits');


      console.log('project id');
      console.log(inputs.project);

      var project = await Project.findOne({ id: inputs.id });
      console.log('project');
      console.log(project);
      // var task = await Task.find();

      var task = await Task.find({
        where: { project: project.id },
        select: ['name','description','status'],
      });

      var attachment = await TaskAttatchment.find({
        where: { project: project.id },
        select: ['name','attachment'],
      });

      console.log('task list');
      console.log(task);

    }

    // Respond with view.
    return exits.success({
      project: project,
      task : task,
      attachment: attachment,

    });
  }


};
