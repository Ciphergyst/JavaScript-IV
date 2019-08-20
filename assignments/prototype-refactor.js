/*

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
{
  "esversion": 6
}

class Person {
  constructor (attributes){
    this.name = name.attributes;
    this.age = age.attributes;
    this.location = location.attributes;
  }
  speak() {
  console.log (`Hello my name is ${this.name} I am from ${this.location}`)
 }
}

class Instructor extends Person {
  constructor(attributes) {
    super(attributes)
    this.specialty = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${this.subject}`);
  }
}

grade(student.subject) => (`${student.name}r receives a perfect score on ${this.subject}`)


class student extends Person {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className
    this.favSubjects = attributes.favSubjects
  }
  listSubjects() => subsFunc(subjects){
      console.log(subjects);
      this.favSubjects.forEach(subsFunc);
    }
  }
  PRAssignment() => pullRequest(subjects){
      console.log(`${student.name} has begun a PR for ${subject}`)
    }
  }
  sprintChallenge() => sprintChal(subjects){
      console.log(`${student.name} has begun sprint challenge on ${subject}`)
    }
  }
}

class teamLeads extends Instructor {
  constructor(attr) {
    super(attr);
    this.gradClassName = Attributes.gradClassName;
    this.favInstructor = Attributes.favInstructor;

  }
  standUp() => standfunc(channel){
      console.log(`${name} announces to ${channel}, @channel standy times!`)
    }
  }
}


const fred = new instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});
const Randy = new student({
  name: 'Randy',
  location: 'Australia',
  age: 31,
  favLanguage: 'Python',
  specialty: 'UI/UX',
  catchPhrase: `The players should all wear bras! And instead of helmets, they should wear little tinfoil hats, ‘cause, you know, it’s the future and we shouldn’t be so barbaric!`
});
const Cartmen = new teamlead({
  name: 'Cartmen',
  location: 'South Park',
  age: 38,
  favLanguage: 'Haskell',
  specialty: 'Back-end',
  catchPhrase: `Anything that's fun costs at least $8.`
});
