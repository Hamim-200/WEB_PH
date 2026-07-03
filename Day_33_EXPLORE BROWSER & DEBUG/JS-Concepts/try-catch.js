function checkAge(){
    const ageField = document.getElementById('age');
    const ageText = ageField.value ;
    const errorTag = document.getElementById('error');
    try{
        const age =parseInt(ageText);

        if(isNaN(age)){
            throw "Please enter a valid age";
        }
        else if(age < 18){
            throw "You can't do this"
        }
        else if(age >30){
            throw "Too Much old"
        }
        errorTag.innerHTML = '';

    }
    catch(err){
        console.log('ERROR:',err);
        errorTag.innerHTML = 'ERROR:' + err;
    }
    finally{
        console.log('All done inside try catch');
    }

}