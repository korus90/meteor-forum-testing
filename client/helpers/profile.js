// Profile helpers
Template.editProfile.helpers({
    showEmail: function() {
        return Meteor.user().emails[0].address;
    },
    showBio: function() {
        return Meteor.user().profile.bio;
    },
    avatarImage: function () {
        return Avatars.findOne({_id: Meteor.user().profile.avatar});
    }
});