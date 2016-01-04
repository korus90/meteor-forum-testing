Template.login.events({
    'submit form': function(event) {
        event.preventDefault();
        var username = $('[name=loginUsername]').val();
        var password = $('[name=loginPassword]').val();
        Meteor.loginWithPassword(username, password, function(error){
            console.log(error.reason);
        });
        Router.go('home');
    }
});

Template.logout.events({
    'click .logout': function(event) {
        event.preventDefault();
        Meteor.logout();
        Router.go('login');
    }
});