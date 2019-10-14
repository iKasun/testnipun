parasails.registerPage('project-list', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {

    syncing: false,
    cloudError: '',
    selectedTaxArr: [],
    deleteModelOpen: false,

    formData: {

      id: 0,
      name: '',
      description: '',
      projId:'',



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

  },
  mounted: async function () {

    // console.log('id');
    // console.log(this.tax.id);

    // if (this.tax.id == undefined) {

    //   console.log('new');

    // } else {

    //   console.log('edit');
    //   console.log('formData');
    //   console.log(this.formData);

    //   this.formData.id = this.tax.id;
    //   this.formData.name = this.tax.name;
    //   this.formData.description = this.tax.description;
    //   this.formData.visibility = this.tax.visibility;

 
      // console.log(this.formData.asignTheaters);
    // console.log(Object.keys(this.holiday.theater.name));

    // for (let [key, value] of Object.entries(this.holiday)) {
    //   console.log(`${key}: ${value}`);
    // }


      // this.formData.applyToAll = this.holiday.applyToAll;
    // }
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    submittedAddProject: async function (id) {

      this.submitsave = true;
      window.location = ('/project-list');

    },

    handleParsingAddProject: function () {

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
    removeProject: async function (id) {

      this.formData.projId = id;
      console.log(this.formData.projId);

      this.deleteModelOpen = true;
      console.log('Clicked Note #' + this.formData.projId);
      // this.selectedMovie = _.find(this.movies, { id: this.selectedLevyArr });
      // }
    },

    handleParsingDeleteForm: function () {
      console.log(this.formData.projId);
      return {

        projId: this.formData.projId,

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


  }
});
