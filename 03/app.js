import {files} from './data.js';

const convertToBytes = function (length, unit) {

    const data = {

        'B': 1,
        'KB': Math.pow(1024, 1),
        'MB': Math.pow(1024, 2),
        'GB': Math.pow(1024, 3),

    }

    return data[unit] * length

}

const calculateSpace = () => {

    let space = 0
    files.forEach(

        ({size: {length, unit = "B"}}) => {
            
            space += convertToBytes(length, unit)

        }

    )

    const newSpace = (space * 0.000001).toFixed(2)
    
    if (space < Math.pow(1024, 2)) {

        console.log(`${newSpace} KB`)

    } else if (space < Math.pow(1024, 3)) {

        console.log(`${newSpace} MB`)

    } else {

        console.log(`${newSpace} GB`)

    }

}

calculateSpace()