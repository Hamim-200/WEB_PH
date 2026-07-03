// SYNTATIC SUGAR

class Instructor {
    name;
    designation = 'Web Instractor'
    team = 'web team'
    location;

    constructor(name,location){
        this.name = name;
        this.location = location;
    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`)
    }
    creatQuiz(module){
        console.log(`please create quiz for module ${module}`)
    }
}

const amir = new Instructor('Amir','mumbai');
console.log(amir);
amir.startSupportSession('9:00');
amir.creatQuiz(60);