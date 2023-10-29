// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    if (blocks > 42){
        return blocks - 42;
    }
    if (blocks < 42){
        return 42 - blocks;
    } else {
        return 0
    }
};

function distanceFromHqInFeet(blocks){
    if (blocks > 42){
        return (blocks - 42) * 264;
    }
    if (blocks < 42){
        return (42-blocks)*264;
    } else {
        return 0;
    }
};

function distanceTravelledInFeet(block1, block2){
    if (block1 > block2){
        return (block1-block2) * 264;
    }
    if (block1 < block2){
        return (block2 - block1) * 264;
    }
};

function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start, destination) <= 400){
        return 0;
    } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000){
        return (distanceTravelledInFeet(start, destination) - 400)* 0.02;
    } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500){
        return 25;
    } else if (distanceTravelledInFeet(start, destination) >2500){
        return 'cannot travel that far';
    }
};