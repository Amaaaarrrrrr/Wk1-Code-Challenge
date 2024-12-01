function carSpeed(speed){
    const speedLimit =70;
    const perKm =5;

// validate input
    if (isNaN(speed) || speed < 0) {
        console.log("Invalid speed. Please enter a positive number.");
        return;
    }
 
// Check speed and calculate demerit points
    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / perKm);
        
        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }

}