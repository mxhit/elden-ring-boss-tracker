class Boss {
    constructor(id, name, location, isKilled = false) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.isKilled = isKilled;
    }
}

export default Boss;