function carSpeed(speed){
    const speedLimit =70; //ensures the speedLimit does not exceed 70
    const perKm =5; 

// validate input
    if (isNaN(speed) || speed < 0) //ensures the speed entered is not less than 0 and the value of speed entered is a number
        {
        console.log("Invalid speed. Please enter a positive number.");
        return;
    }
 
// Check speed and calculate demerit points
    if (speed <= speedLimit) {
        console.log("Ok"); //if speed is less or equal to the speedLimit it returns ok
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / perKm); //demeritPoints are calculated by finding the difference between speed and speedLimit and dividing it by 5km
        
        if (demeritPoints > 12) {
            console.log("License suspended"); // if demeritPoints calculated is greater than 12 then it returns License suspended
        } else {
            console.log(`Points: ${demeritPoints}`); //if demeritPoints is less than 12 then it returns the value of the demeritPoint
        }
    }

}