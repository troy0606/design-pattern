import { AbstractRecord } from "./record";

class User extends AbstractRecord {
    public validate(): void {
        console.log('User Validate!!')
    }
    protected beforeSave(): void {
        super.beforeSave();
        console.log('User before save')
    };
}

const user = new User();
user.save()