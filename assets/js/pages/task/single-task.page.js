parasails.registerPage('single-task', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {

    syncing: false,
    cloudError: '',
    selectedTaxArr: [],
    selectedTaskArr: [],
    deleteModelOpen: false,
    completeModelOpen: true,
    taskNamelbl: true,
    taskNameTxt: false,
    taskDetailsLbl: true,
    taskDetailsTxt: false,
 
    deleteTaskModelOpen:false,




    formData: {

      id: 0,
      tName: '',
      tDescription: '',
      header:'',
      description:'',
      noteId: '',
      taskId: '',
      projId: '',
      taskAttachment: '',

    },
    formErrors: {},


    formRules: {

      curremcyName: { required: true },
    }

  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function () {


    // Attach any initial data from the server.
    _.extend(this, SAILS_LOCALS);

    this.formData.projId = this.projId;
    console.log('projId');
    console.log(this.formData.projId);
    
   


  },
  mounted: async function () {
    this.formData.noteId = this.task.id;
    this.formData.tName = this.task.name;
    this.formData.tDescription = this.task.description;
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    submittedAddNote: async function (id) {

      this.submitsave = true;
      location.reload(true);

    },

    handleParsingAddNote: function () {

      console.log('formdata');
      console.log(this.formData);
      this.formErrors = {};

      var argins = this.formData;

      console.log(argins)

      // // VALIDATION PART--------------------------------

      if (!argins.header) {

        this.formErrors.header = true;

      }

      if (Object.keys(this.formErrors).length > 0) {


        return

      }

      return argins;


    },
    clickTask: async function (id) {

      if (this.selectedTaskArr.includes(id)) {

        console.log("have");

        this.selectedTaskArr.splice(this.selectedTaskArr.indexOf(id));
        console.log(this.selectedTaskArr.length)
        console.log(this.selectedTaskArr)

      } else {

        console.log("ok");
        this.selectedTaskArr.push(id);

        console.log(this.selectedTaskArr.length)
        console.log(this.selectedTaskArr)

      }


      console.log('Clicked theater #' + id);

    },

    editNote: async function (noteId) {

      this.formData.noteId = noteId;
      console.log(this.formData.noteId);

      console.log('Clicked Note to Edit #' + this.formData.id);
      // this.selectedMovie = _.find(this.movies, { id: this.selectedLevyArr });
      // }
    },

    removeNote: async function (noteId) {

      this.formData.noteId = noteId;
      console.log(this.formData.noteId);

      this.deleteModelOpen = true;
      console.log('Clicked Note #' + this.formData.noteId);
      // this.selectedMovie = _.find(this.movies, { id: this.selectedLevyArr });
      // }
    },


    handleParsingDeleteForm: function () {
      console.log(this.formData.noteId);
      return {

        noteId: this.formData.noteId,

      };
    },

    submittedDeleteForm: function () {

      // _.remove(this.facilities, { id: this.selectedMovie, });
      // Close the modal.
      // this.selectedLevyArr = undefined;
      this.deleteModelOpen = false;
      this.cloudError = '';
      location.reload(true);
    },

    closeDeleteModal: function () {
      // this.selectedMovie = undefined;
      this.deleteModelOpen = false;
      this.cloudError = '';
    },

    closeEditTaskName: async function () {
      this.taskNamelbl = true;
      this.taskNameTxt = false;

      // this.project.name = this.formData.name;
      // location.reload(true);

    },
    editTaskName: async function (id) {
      console.log(id);
      this.formData.id = id,
        console.log(this.formData.id);

      this.taskNamelbl = false;
      this.taskNameTxt = true;
    },

    editTasktDetails: async function (id) {
      console.log(id);
      this.formData.id = id,
        console.log(this.formData.id);

      this.taskDetailsLbl = false;
      this.taskDetailsTxt = true;
    },

    closeEditTaskDetails: async function () {
      this.taskDetailsTxt = false;
      this.taskDetailsLbl = true;

      // this.project.description = this.formData.description;
      // location.reload(true);

    },
    submittedChangeDescription: async function (id) {

      this.submitsave = true;
      this.taskDetailsLbl = true;
      this.taskDetailsTxt = false;
      this.task.description = this.formData.tDescription;

    },

    handleParsingChangeDescription: function () {

      console.log('formdata');

      this.formErrors = {};

      var argins = this.formData;

      console.log(argins)

      // // VALIDATION PART--------------------------------

      if (!argins.tDescription) {

        this.formErrors.tDescription = true;

      }

      if (Object.keys(this.formErrors).length > 0) {

        return
      }

      return argins;

    },

    submittedChangeName: async function (id) {

      this.submitsave = true;
      this.taskNamelbl = true;
      this.taskNameTxt = false;
      this.task.name = this.formData.tName;

    },

    handleParsingChangeName: function () {

      console.log('formdata');

      this.formErrors = {};

      var argins = this.formData;

      console.log(argins)

      // // VALIDATION PART--------------------------------

      if (!argins.tName) {

        this.formErrors.tName = true;

      }

      if (Object.keys(this.formErrors).length > 0) {

        return
      }

      return argins;

    },

    removeTask: async function (id) {

      this.formData.taskId = id;
      console.log(this.formData.taskId);

      this.deleteTaskModelOpen = true;
      console.log('Clicked Note #' + this.formData.taskId);
      // this.selectedMovie = _.find(this.movies, { id: this.selectedLevyArr });
      // }
    },
    handleParsingTaskDeleteForm: function () {
      console.log(this.formData.taskId);
      return {

        taskId: this.formData.taskId,

      };
    },

    submittedTaskDeleteForm: function () {

      // _.remove(this.facilities, { id: this.selectedMovie, });
      // Close the modal.
      // this.selectedLevyArr = undefined;
      this.deleteTaskModelOpen = false;
      this.cloudError = '';
      window.location = ('/single-project/'+ this.formData.projId);

    },

    closeDeleteModal: function () {
      // this.selectedMovie = undefined;
      this.deleteTaskModelOpen = false;
      this.cloudError = '';
    },
    changeFileInput: function (files) {

      if (files.length !== 1 && !this.formData.taskAttachment) {
        throw new Error('Consistency violation: `changeFileInput` was somehow called with an empty array of files, or with more than one file in the array!  This should never happen unless there is already an uploaded file tracked.');
      }
      var selectedFile = files[0];
      if (!selectedFile && this.formData.taskAttachment) {
        return;
      }


      this.formData.taskAttachment = selectedFile;

      // Set up the file preview for the UI:
      var reader = new FileReader();
      reader.onload = (event) => {
        this.formData.previewImageSrc1 = event.target.result;

        // this.formData.image = reader.result;
        // console.log(reader.result);
        // Unbind this "onload" event.
        delete reader.onload;
      };
      // Clear out any error messages about not providing an image.
      this.formErrors.taskAttachment = false;
      reader.readAsDataURL(selectedFile);

    },





  }
});
