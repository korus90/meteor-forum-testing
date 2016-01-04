Template.posts.events({
    'click .circle-btn': function(event, template) {
        template.$('.forum-add').slideToggle('500');
        template.$('.circle-btn i').toggleClass('fa-plus fa-minus');
    },
    'submit .add-post': function(event) {
        event.preventDefault();
        var title = $('[name=forumTitle]').val();
        var contentInput = $('#mark').val();
        var content = parseMarkdown(contentInput);
        var owner = Meteor.user();
        Posts.insert({
            title: title,
            content: content,
            owner: owner,
            createdAt: Date.now()
        });
        $('#forum-title, #mark').val('');
        $('.forum-add').slideToggle('500');
        $('.circle-btn i').toggleClass('fa-plus fa-minus');
    }
});