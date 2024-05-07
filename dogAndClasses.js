class Labrador {
    constructor(name, age, gender, master) {
        Object.assign(this, { name, age, gender, master })
        this.species = "Labrador";
        this.legs = 4;
        this.size = "Large";
        this.loyal = true;
    }
}