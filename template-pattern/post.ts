import { AbstractRecord } from "./record";

class Post extends AbstractRecord {
    public validate(): void {
        console.log('Post Validate!!')
    }
    protected beforeSave(): void {
        super.beforeSave();
        console.log('Post before save')
    };
}

const post = new Post();
post.save()