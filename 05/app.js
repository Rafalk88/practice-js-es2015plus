import Programmer from './classes/Programmer.js';
import Junior from './classes/Junior.js';
import Mid from './classes/Mid.js';
import Senior from './classes/Senior.js';

const features = {
    skills: 10, 
    experience: 10, 
    willingness: 10,
}

const task = {
    difficult: 1,
    size: 1,
}

const features2 = {}
const task2 = {difficult: 2, size: 1,}

const programmer = new Programmer( features );
const time = programmer.getApproximateTimeTaskDoneInHours( task );
console.log(time);

const junior = new Junior(features2)
const mid = new Mid(features2)
const senior = new Senior(features2)

const time2 = junior.getApproximateTimeTaskDoneInHours( task2 )
const time3 = mid.getApproximateTimeTaskDoneInHours( task2 )
const time4 = senior.getApproximateTimeTaskDoneInHours( task2 )

console.log(time2)
console.log(time3)
console.log(time4)