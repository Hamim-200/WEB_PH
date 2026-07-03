const loadUser = () => {
  fetch("https://randomuser.me/api/")
//   fetch("https://randomuser.me/api/?gender=female")
    .then((res) => res.json())
    .then((data) => displayUser(data));
};

const displayUser = (user) => {
  const gendertag = document.getElementById("gender");
  gendertag.innerHTML = user.results[0].gender;

  const name = document.getElementById("name");
  name.innerHTML = user.results[0].name.title +' '+ user.results[0].name.first + ' '+  user.results[0].name.last;

  const location = document.getElementById("location");
  location.innerHTML = user.results[0].location.city;

  console.log(user.results[0]);
};
loadUser();
