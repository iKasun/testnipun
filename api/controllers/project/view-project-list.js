module.exports = {


  friendlyName: 'View project list',


  description: 'Display "Project list" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/project/project-list'
    },
    outputType: {
      project: 'ref'
    }
  },


  fn: async function (inputs, exits) {

    var project = await Project.find();

    console.log('project Manager');
    console.log(project);

    // Respond with view.
    return exits.success({
      project: project,
    });
  }

};
