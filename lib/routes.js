Router.configure({
  loadingTemplate: 'loading'
});

Router.route('/', {
    name: 'home',
    fastRender: true
});

Router.route('/register', {
    name: 'register'
});

Router.route('/login', {
    name: 'login'
});

Router.route('/post/:_id', {
    name: 'post',
    template: 'post',
    data: function() {
        var currentPost = this.params._id;
        return Posts.findOne({ _id: currentPost});
        return Replies.find({ parent: currentPost});
    }
});

Router.route('/profile/edit', {
    waitOn: function () {
        return Meteor.subscribe('avatars')
    },
    name: 'editProfile',
    fastRender: true
});