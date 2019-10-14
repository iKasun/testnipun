module.exports = {


  friendlyName: 'View single task',


  description: 'Display "Single task" page.',
  inputs: {

    id: {
      type: 'string'
    },

    noteId: {

      type: 'ref',

    }
  },


  exits: {

    success: {
      viewTemplatePath: 'pages/task/single-task'
    },
    outputType: {
      task: 'ref'
    },

  },


  fn: async function (inputs, exits) {


    if (Object.keys(inputs).length == 0) {

      console.log('if hits');

      var note = '';
      // var selectedNote ='';


    } else {

      console.log('else hits');

      console.log('id');
      console.log(inputs);
      var task = await Task.findOne({ id: inputs.id }).populate('project');
      // var note = await Note.find({ status: inputs.id });


      var note = await Note.find({
        where: { task: inputs.id },
        select: ['header','description'],
      });

      var selectedNote = await Note.findOne({ id: inputs.id });
      console.log('task Manager');
      console.log(task.project.id);
      console.log('selectedNote');
      console.log(selectedNote);
      var projId = task.project.id;
    }

    // Respond with view.
    return exits.success({
      task: task,
      note: note,
      projId: projId,
      // selectedNote: selectedNote,


    });
  }


};
