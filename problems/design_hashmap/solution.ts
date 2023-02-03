class MyHashMap {
    private obj;
    constructor() {
        this.obj={};
    }

    put(key: number, value: number): void {
        this.obj[key]=value;
    }

    get(key: number): number {
        if(this.obj[key] >= 0) {
            return this.obj[key]
        }
        return -1;
    }

    remove(key: number): void {
        this.obj[key] = -1;
    }
}
