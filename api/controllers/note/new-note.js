module.exports = {


  friendlyName: 'New note',


  description: '',
  files: ['attachment'],


  inputs: {

    id: {
      type: 'string'
    },

    header: {
      type: 'string'
    },

    description: {

      type: 'string'
    },

    noteId: {

      type: 'string'
    },

    // taskAttachment: {

    //   type: 'ref'
    // },

  },


  exits: {

    success: {
      outputDescription: 'This is the out put',
      outputType: {
        note: 'ref'
      }
    },


  },

  fn: async function (inputs, exits) {


    if (inputs.id == '0') {

      console.log('inputs');
      console.log(inputs.id);

      // var image_url = '';



      // // Upload the image.
      // var files = await sails.helpers.flow.simultaneously(
      //   [async () => await sails.uploadOne(inputs.taskAttachment, { maxBytes: 30000000, maxTimeToBuffer: 30000 }),
      //   ]

      // ).intercept('E_EXCEEDS_UPLOAD_LIMIT', 'tooBig')
      //   .intercept((err) => new Error('The photo upload failed: ' + util.inspect(err)));

      // console.log("Files display here");
      // console.log(files);

      // // console.log(files[0].extra.secure_url); if (inputs.photo1._files.length>0) {
      // for (var key in files) {
      //   // console.log(files[key]);
      //   if (files[key] !== undefined) {
      //     if (files[key].field == 'taskAttachment') {
      //       image_url = files[key].extra.secure_url;
      //     }
      //   }

      // }


      var createNote = await Note.create({
        "header": inputs.header,
        "description": inputs.description,
        "task": inputs.noteId,
        // "attachment":image_url,s

      }).fetch();

      console.log('Done');
    
    }else{

    var findnote = await Note.findOne({ id: inputs.id });
    
    console.log('Selected note');
    console.log(findnote);

    // var image_url = '';



    // // Upload the image.
    // var files = await sails.helpers.flow.simultaneously(
    //   [async () => await sails.uploadOne(inputs.taskAttachment, { maxBytes: 30000000, maxTimeToBuffer: 30000 }),
    //   ]

    // ).intercept('E_EXCEEDS_UPLOAD_LIMIT', 'tooBig')
    //   .intercept((err) => new Error('The photo upload failed: ' + util.inspect(err)));

    // console.log("Files display here");
    // console.log(files);

    // // console.log(files[0].extra.secure_url); if (inputs.photo1._files.length>0) {
    // for (var key in files) {
    //   // console.log(files[key]);
    //   if (files[key] !== undefined) {
    //     if (files[key].field == 'taskAttachment') {
    //       image_url = files[key].extra.secure_url;
    //     }
    //   }

    // }


        var createNote = await Note.update({ id: inputs.id })
        .set({
          "header": inputs.header,
          "description": inputs.description,
          "task": inputs.noteId,
          // "attachment":image_url,

        }).fetch();

      }
      console.log('create note');
      console.log(createNote);


    
      return exits.success({ note: createNote });
    }




};
