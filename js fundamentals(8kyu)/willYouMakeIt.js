const zeroFuel = (dist, mpg, fuelLeft) => {
    return mpg*fuelLeft>=dist?true:false
};