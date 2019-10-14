parasails.registerPage('single-project', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {

    syncing: false,
    cloudError: '',
    selectedTaxArr: [],
    selectedTaskArr: [],
    completeModelOpen: false,
    deleteModelOpen: false,
    projectdeleteModelOpen :false,
    taskName: true,
    taskNameTxt: false,
    projectDetailsLbl: true,
    projectDetailsTxt: false,
    attachment: '',



    formData: {

      id: 0,
      taskId:'',
      tName: '',
      tDescription: '',
      name: '',
      attachmentName: '',
      description: '',
      startDate: '',
      dueDate: '',
      project: '',

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
    this.formData.project = this.project.id;
    this.formData.name = this.project.name;
    this.formData.description = this.project.description;



  },
  mounted: async function () {

  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {

    submittedChangeDescription: async function (id) {

      this.submitsave = true;
      this.projectDetailsLbl = true;
      this.projectDetailsTxt = false;
      this.project.description = this.formData.description;

    },

    handleParsingChangeDescription: function () {

      console.log('formdata');

      this.formErrors = {};

      var argins = this.formData;

      console.log(argins)

      // // VALIDATION PART--------------------------------

      if (!argins.description) {

        this.formErrors.description = true;

      }

      if (Object.keys(this.formErrors).length > 0) {

        return
      }

      return argins;

    },

    submittedChangeName: async function (id) {

      this.submitsave = true;
      this.taskName = true;
      this.taskNameTxt = false;
      this.project.name = this.formData.name;

    },

    handleParsingChangeName: function () {

      console.log('formdata');

      this.formErrors = {};

      var argins = this.formData;

      console.log(argins)

      // // VALIDATION PART--------------------------------

      if (!argins.name) {

        this.formErrors.name = true;

      }

      if (Object.keys(this.formErrors).length > 0) {

        return
      }

      return argins;

    },
    
    submittedAddFile: async function (id) {

      this.submitsave = true;
      location.reload(true);

    },

    handleParsingAddFile: function () {

      console.log('formdata');
      // console.log(this.formData);
      this.formErrors = {};

      var argins = this.formData;

      console.log(argins)

      // // VALIDATION PART--------------------------------

      if (!argins.attachmentName) {

        this.formErrors.attachmentName = true;

      }

      if (Object.keys(this.formErrors).length > 0) {

        return
      }

      return argins;

    },
    submittedAddTask: async function (id) {

      this.submitsave = true;
      location.reload(true);

    },

    handleParsingAddTask: function () {

      console.log('formdata');
      // console.log(this.formData);
      this.formErrors = {};

      var argins = this.formData;

      console.log(argins)

      // // VALIDATION PART--------------------------------

      if (!argins.name) {

        this.formErrors.name = true;

      }

      if (Object.keys(this.formErrors).length > 0) {

        return
      }

      return argins;

    },
    clickTask: async function (id) {

      this.completeModelOpen = true;

      this.formData.id = id;

    },
    handleParsingCompleteForm: function () {
      console.log(this.formData.noteId);
      return {

        id: this.formData.id,

      };
    },

    submittedCompleteForm: function () {

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
      location.reload(true);
    },


    closeEditProjectName: async function () {
      this.taskName = true;
      this.taskNameTxt = false;

      // this.project.name = this.formData.name;
      // location.reload(true);

    },
    editProjectName: async function (id) {
      console.log(id);
      this.formData.id = id,
        console.log(this.formData.id);

      this.taskName = false;
      this.taskNameTxt = true;
    },

    editProjectDetails: async function (id) {
      console.log(id);
      this.formData.id = id,
        console.log(this.formData.id);

      this.projectDetailsLbl = false;
      this.projectDetailsTxt = true;
    },

    closeEditProjectDetails: async function () {
      this.projectDetailsTxt = false;
      this.projectDetailsLbl = true;

      // this.project.description = this.formData.description;
      // location.reload(true);

    },
    removeTask: async function (id) {

      this.formData.taskId = id;
      console.log(this.formData.taskId);

      this.deleteModelOpen = true;
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

    submittedDeleteTaskForm: function () {

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
    removeProject: async function (id) {

      this.formData.project = id;
      console.log(this.formData.project);

      this.projectdeleteModelOpen = true;
      console.log('Clicked Note #' + this.formData.project);
      // this.selectedMovie = _.find(this.movies, { id: this.selectedLevyArr });
      // }
    },

    handleParsingDeleteForm: function () {
      console.log(this.formData.project);
      return {

        projId: this.formData.project,

      };
    },

    submittedDeleteForm: function () {

      // _.remove(this.facilities, { id: this.selectedMovie, });
      // Close the modal.
      // this.selectedLevyArr = undefined;
      this.projectdeleteModelOpen = false;
      this.cloudError = '';
      window.location = ('/project-list');

    },

    closeDeleteModal: function () {
      // this.selectedMovie = undefined;
      this.projectdeleteModelOpen = false;
      this.cloudError = '';
    },

    changeFileInput: function (files) {

      if (files.length !== 1 && !this.formData.attachment) {
        throw new Error('Consistency violation: `changeFileInput` was somehow called with an empty array of files, or with more than one file in the array!  This should never happen unless there is already an uploaded file tracked.');
      }
      var selectedFile = files[0];
      if (!selectedFile && this.formData.attachment) {
        return;
      }


      this.formData.attachment = selectedFile;

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
      this.formErrors.attachment = false;
      reader.readAsDataURL(selectedFile);

    },




  }
});
