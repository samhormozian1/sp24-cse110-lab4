const statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2,
};

for (const carType in statistics) {
    const carCount = statistics[carType];
    const isKeyStartingWithR = carType.startsWith('r');
    const isOddCount = carCount % 2 !== 0;

    if (isKeyStartingWithR || isOddCount) {
        console.log(carCount);
    }
}
