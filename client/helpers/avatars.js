var avatarStore = new FS.Store.FileSystem("avatars");

Avatars = new FS.Collection("avatars", {
    stores: [avatarStore]
});