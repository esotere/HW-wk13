const peopleArray = [{
    name:"Ahmed",
    photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores:[ 5, 1, 4, 4, 5, 1, 2, 5, 4, 1 ]
  },
  {
    name:"Sarah",
    photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores:[ 5, 1, 3, 5, 5, 3, 2, 5, 4, 1 ]
  }
]

let potential = [PeopleArray[i].scores];
let potential2 = []
let user1;
let test;
const match =[] 
console.log(potential)

    for (let x = 0 ; x < peopleArray.length ; x++) {
        for (let y = 0 ; y < peopleArray[i].scores.length ; y++) {
          test = user1.scores - potential
           if (test === 0) {
               match.push(peopleArray[i])
           }
            
        }
    }

module.exports = peopleArray;