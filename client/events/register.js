Template.register.events({
    'submit form': function(event) {
        event.preventDefault();
        var username = $('[name=registerUsername]').val();
        var email = $('[name=registerEmail]').val();
        var password = $('[name=registerPassword]').val();
        var bio = $('[name=registerBio]').val();
        Accounts.createUser({
            username: username,
            email: email,
            password: password,
            profile: {
                bio: bio
            }
        });
       Router.go('home');
    }
});