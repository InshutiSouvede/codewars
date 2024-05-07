class Cuboid {
    constructor(length, width, height) {
        Object.assign(this, { length, width, height })
    }
    get surfaceArea() {
        return 2 * (this.length * this.width + this.height * this.width + this.length * this.height)
    }
    get volume() {
        return this.length * this.width * this.height
    }
}
class Cube extends Cuboid {
    constructor(length) {
        super(length, length, length)
    }
}