// import './index.css';

// import numeral from 'numeral';

// const courseValue = numeral(1000).format('$0,0.00');

// console.log(`I would pay ${courseValue} for this awesom course`); // eslint-disable-line no-console

import {getUsers,deleteUser} from './api/userApi';

//  populate table of users via API call
getUsers().then(result => {

  let usersBody = "";

  result.forEach(user => {
    usersBody += `<tr>
      <td><a href="#" data-id="${user.id}" class="deleteUser" > Delete </a> </td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</th>
      <th>${user.email}</th>
      </tr>`
  });

  global.document.getElementById('users').innerHTML = usersBody;

  const deleteLinks = global.document.getElementsByClassName('deleteUser');

  // Must user array. from to create a real array from DOM collection
  // getElementsByclassName only returns an "array like" object
  Array.from(deleteLinks, link => {

    link.onclick = function(event){

      const element = event.target;
      event.preventDefault();
      deleteUser(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  });
});
