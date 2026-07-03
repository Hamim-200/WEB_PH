// alert('How are you');
//ALERT
const showAlert = () => {
  alert("Hello everyone!");
};

//CONFIRMATION
const confirmBtn = () => {
  const result = confirm("Will you go there?");
  console.log(result);
  if (result === true) {
    alert("Lets Go today");
  }
  else{
    console.log('WHY?');
  }
};

//Take Information
const getInfo = () => {
    const name = prompt('Tell us your name')
    console.log(name);

    if (name === null) {
        alert('No name no work');
    }
    else{
        console.log('Welcome Here', name);
    }
}
