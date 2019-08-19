// CODE here for your Lambda Classes
{ "esversion":6 }

class Person {
  constructor (attr){
    this.name = name.Attributes;
    this.age = age.Attributes;
    this.location = location.Attributes;
  }
}
speak() {
  console.log (`Hello my name is ${this.name} I am from ${this.location}`)
}

class Instructor extends Person {
  constructor(attr) {
    super(attr)
    this.specialty = Attributes.specialty;
    this.favLanguage = Attributes.favLanguage;
    this.catchPhrase = Attributes.catchPhrase;
  }
}
demo(subject) {
  return (`Today we are learning about ${this.subject}`);
}
 grade(student,subject) {
  return(`${student.name}r receives a perfect score on ${this.subject}`)
}

class student extends Person {
  constructor(attr) {
    super(attr);
    this.previousBackground = Attributes.previousBackground;
    this.className = Attributes.className
    this.favSubjects = Attributes.favSubjects
  }
  listSubjects(){
    function subsFunc(subjects){
      console.log(subjects);
      this.favSubjects.forEach(subsFunc);
    }
  }
  PRAssignment(){
    function pullRequest(subjects){
      console.log(`${student.name} has begun a PR for ${subject}`)
    }
  }
  sprintChallenge(){
    function sprintChal(subjects){
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
  standUp(){
    function standfunc(channel){
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
