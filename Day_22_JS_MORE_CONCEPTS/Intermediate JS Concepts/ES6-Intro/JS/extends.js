class TeamMember{
    name;
    location;
    constructor(name,location){
        this.name = name;
        this.location = location;
    }
    provideFeedback(){
        console.log(`${this.name} Thank you for your feedback`)
    }

}

class Instructor extends TeamMember {
    designation = 'Web Instractor'
    team = 'web team'
    constructor(name,location){
        super(name,location);
    }

    startSupportSession(time){
        console.log(`start the support session at ${time}`)
    }
    creatQuiz(module){
        console.log(`please create quiz for module ${module}`)
    }
    provideFeedback(){
        console.log(`${this.name} Thank you for your feedback`)
    }
}

class developer extends TeamMember {

    designation = 'Web Developer'
    team = 'web team'
    tech;
    constructor(name,location,tech){
        super(name,location);
        this.tech = tech
    }

    developFeature(feature){
        console.log(`Please develop the  ${feature}`)
    }
    release(version){
        console.log(`please relase the ${version}`)
    }
}

class JobPlacement extends TeamMember {

    designation = 'Job Placement Comandos'
    team = 'job Placement'
    region;
    constructor(name,location,region){
        super(name,location);
        this.region = region;
    }

    developFeature(feature){
        console.log(`Please develop the  ${feature}`)
    }
    release(version){
        console.log(`please relase the ${version}`)
    }
}

const alia = new developer('Alia','Dhaka','react');
console.log(alia);
alia.provideFeedback();

