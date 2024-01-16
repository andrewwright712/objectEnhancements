//function createInstructor(firstName, lastName){
  //  return {
   //   firstName: firstName,
      //lastName: lastName
    //}
  //}

  /* Write an ES2015 Version */

  let createInstructor = (firstName, lastName) => {
    return {
        firstName,
        lastName,
    }
  }


//var favoriteNumber = 42;

//var instructor = {
//  firstName: "Colt"
//}

//instructor[favoriteNumber] = "That is my favorite!"

//ES2015 Version

let favoriteNumber = 42;
let instructor = {
    firstName: 'Colt'
}
instructor[favoriteNumber] = 'That is my favorite!';

//Object Methods
//var instructor = {
//  firstName: "Colt",
//  sayHi: function(){
//    return "Hi!";
//  },
//  sayBye: function(){
//    return this.firstName + " says bye!";
// }
//}
//​
//Object Methods ES2015
/* Write an ES2015 Version */
//
let instructor = {
    firstname: "Colt",
    sayHi: function(){
        return 'Hi!';
    },
    sayBye: function(){
        return this.firstName + " says bye!";
      }
    }

    const d = createAnimal("dog", "bark", "Woooof!")
d.bark()
const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
s.bleet()
function createAnimal(species, verb, noise){
  return {
    species,
    [verb](){
      return noise;
    }
  }
}