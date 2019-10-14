module.exports = {


  friendlyName: 'New task',


  description: '',
  
  files: ['attachment'],

  inputs: {

    id: {
      type: 'string'
    },

    tName: {
      type: 'string'
    },

    tDescription: {

      type: 'string'
    },

    startDate: {

      type: 'string'
    },

    dueDate: {

      type: 'string'
    },

    project: {
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
        task: 'ref'
      }
    },


  },

  fn: async function (inputs, exits) {


    if (inputs.id == '0') {

      console.log('inputs');
      console.log(inputs.id);

      var image_url = '';



      // Upload the image.
      var files = await sails.helpers.flow.simultaneously(
        [async () => await sails.uploadOne(inputs.attachment, { maxBytes: 30000000, maxTimeToBuffer: 30000 }),
        ]

      ).intercept('E_EXCEEDS_UPLOAD_LIMIT', 'tooBig')
        .intercept((err) => new Error('The photo upload failed: ' + util.inspect(err)));

      console.log("Files display here");
      console.log(files);

      // console.log(files[0].extra.secure_url); if (inputs.photo1._files.length>0) {
      for (var key in files) {
        // console.log(files[key]);
        if (files[key] !== undefined) {
          if (files[key].field == 'attachment') {
            image_url = files[key].extra.secure_url;
          }
        }

      }


      var createtask = await Task.create({
        "name": inputs.tName,
        "description": inputs.tDescription,
        "startDate": inputs.startDate,
        "dueDate": inputs.dueDate,
        "status": "Pending",
        "project": inputs.project,
        "attachment":image_url,



      }).fetch();

      console.log('Done');

    } else {


      var image_url = '';



      // Upload the image.
      var files = await sails.helpers.flow.simultaneously(
        [async () => await sails.uploadOne(inputs.attachment, { maxBytes: 30000000, maxTimeToBuffer: 30000 }),
        ]

      ).intercept('E_EXCEEDS_UPLOAD_LIMIT', 'tooBig')
        .intercept((err) => new Error('The photo upload failed: ' + util.inspect(err)));

      console.log("Files display here");
      console.log(files);

      // console.log(files[0].extra.secure_url); if (inputs.photo1._files.length>0) {
      for (var key in files) {
        // console.log(files[key]);
        if (files[key] !== undefined) {
          if (files[key].field == 'attachment') {
            image_url = files[key].extra.secure_url;
          }
        }

      }

      var findTask = await Task.findOne({ id: inputs.id });

      console.log('Selected curcuit');
      console.log(findTask);


      var createtask = await Task.update({ id: inputs.id })
        .set({
          "name": inputs.tName,
          "description": inputs.tDescription,
          "startDate": inputs.startDate,
          "dueDate": inputs.dueDate,
          "status": "Pending",
          "project": inputs.project,
          "attachment":image_url,

        }).fetch();

    }
    console.log('create task');
    console.log(createtask);



    return exits.success({ task: createtask });
  }




};
