export abstract class AbstractRecord {
    public save() : void {
        this.validate();
        this.beforeSave();
        console.log('query DB')
    }

    protected abstract validate(): void;
    protected beforeSave(): void {
        console.log('AbstractRecord before save')
    };
}