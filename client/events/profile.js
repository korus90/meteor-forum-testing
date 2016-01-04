// Profile Events
Template.editProfile.events({
    'click .edit': function(event, template) {
        template.$('.profile-edit').fadeToggle('fast');
    },
    'submit .bio-edit': function(event, template) {
        event.preventDefault();
        var bioInput = $('.bioEdit').val();
        var bio = parseMarkdown(bioInput);
        Meteor.users.update(Meteor.userId(), {$set: {"profile.bio": bio}});
    },
    'change .avatarUpload': function(event, template) {
        event.preventDefault();
	   FS.Utility.eachFile(event, function(file) {
           Avatars.insert(file, function (err, fileObj) {
                if (err){
                    toastr.error("Upload failed... please try again.");
                } else {
                    toastr.success('Upload succeeded!');
                    Meteor.users.update({_id: Meteor.userId() }, {$set: { 'profile.avatar': fileObj._id }}); 
                };
            });
	   });
    }
});