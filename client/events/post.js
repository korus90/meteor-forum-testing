Template.post.events({
    'click #reply-up': function(event, template) {
        template.$('.forum-add').slideToggle('500');
    },
    'submit .add-post': function(event) {
        event.preventDefault();
        var contentInput = $('#mark').val();
        var content = parseMarkdown(contentInput);
        var owner = Meteor.user();
        var postId = this._id;
        Replies.insert({
            owner: owner,
            content: content,
            parent: postId,
            createdAt: Date.now()
        });
        $('#mark').val('');
        $('.forum-add').slideToggle('500');
    }
});