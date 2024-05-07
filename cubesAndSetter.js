class Cube {
    constructor(length) {
        this.length = length
    }
    get surfaceArea() {
        return 6 * this.length ** 2
    }
    get volume() {
        return this.length ** 3
    }
    set surfaceArea(sa) {
        this.length = (sa / 6) ** 0.5
    }
    set volume(vol) {
        this.length = vol ** (1 / 3)
    }
}