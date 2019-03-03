const calculateDistancePoints = (distance, hillSize, kPoint) => {
    let totalDistancePoints;

    if  (
        isNaN(kPoint) ||
        isNaN(distance) ||
        distance < 0 ||
        hillSize < 0 ||
        kPoint < 0 ||
        distance == null ||
        hillSize == null ||
        kPoint == null
    ) return 'Wrong data';

    switch (true) {
        case (hillSize === 'normal'):
            totalDistancePoints;
            return 60 + (2 * (distance - kPoint));
            break;
        case (hillSize === 'big'):
            totalDistancePoints;
            return 60 + (1.8 * (distance - kPoint));
            break;
        case (hillSize === 'mammoth'):
            totalDistancePoints;
            return 120 + (1.2 * (distance - kPoint));
            break;
        default:
            return 'Wrong data';
            break;
    }
};

module.exports = calculateDistancePoints;