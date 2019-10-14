/**
 * cloud.setup.js
 *
 * Configuration for this Sails app's generated browser SDK ("Cloud").
 *
 * Above all, the purpose of this file is to provide endpoint definitions,
 * each of which corresponds with one particular route+action on the server.
 *
 * > This file was automatically generated.
 * > (To regenerate, run `sails run rebuild-cloud-sdk`)
 */

Cloud.setup({

  /* eslint-disable */
  methods: {"confirmEmail":{"verb":"GET","url":"/email/confirm","args":["token"]},"logout":{"verb":"GET","url":"/api/v1/account/logout","args":[]},"updatePassword":{"verb":"PUT","url":"/api/v1/account/update-password","args":["password"]},"updateProfile":{"verb":"PUT","url":"/api/v1/account/update-profile","args":["fullName","emailAddress"]},"updateBillingCard":{"verb":"PUT","url":"/api/v1/account/update-billing-card","args":["stripeToken","billingCardLast4","billingCardBrand","billingCardExpMonth","billingCardExpYear"]},"login":{"verb":"PUT","url":"/api/v1/entrance/login","args":["emailAddress","password","rememberMe"]},"signup":{"verb":"POST","url":"/api/v1/entrance/signup","args":["emailAddress","password","fullName"]},"sendPasswordRecoveryEmail":{"verb":"POST","url":"/api/v1/entrance/send-password-recovery-email","args":["emailAddress"]},"updatePasswordAndLogin":{"verb":"POST","url":"/api/v1/entrance/update-password-and-login","args":["password","token"]},"deliverContactFormMessage":{"verb":"POST","url":"/api/v1/deliver-contact-form-message","args":["emailAddress","topic","fullName","message"]},"newProject":{"verb":"POST","url":"/api/v1/project/new-project","args":["id","name","description","attachment"]},"newTask":{"verb":"POST","url":"/api/v1/task/new-task","args":["id","tName","tDescription","startDate","dueDate","project","attachment"]},"newNote":{"verb":"POST","url":"/api/v1/note/new-note","args":["id","header","description","noteId"]},"removeNote":{"verb":"DELETE","url":"/api/v1/note/remove-note","args":["noteId"]},"completeTask":{"verb":"POST","url":"/api/v1/task/complete-task","args":["id"]},"editprojectname":{"verb":"PATCH","url":"/api/v1/project/editprojectname","args":["id","name"]},"editprojectdescription":{"verb":"PATCH","url":"/api/v1/project/editprojectdescription","args":["id","description"]},"edittaskname":{"verb":"PATCH","url":"/api/v1/task/edittaskname","args":["id","tName"]},"edittaskdescription":{"verb":"PATCH","url":"/api/v1/task/edittaskdescription","args":["id","tDescription"]},"removetask":{"verb":"DELETE","url":"/api/v1/task/removetask","args":["taskId"]},"removeproject":{"verb":"DELETE","url":"/api/v1/project/removeproject","args":["projId"]},"newattchment":{"verb":"POST","url":"/api/v1/task/newattchment","args":[]}}
  /* eslint-enable */

});
