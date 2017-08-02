let siteMain = document.getElementById("siteMain");

let template = "";

  template += `<section class="bio">`

  template += `<img src=${customers.results[0].picture.large} class="headshot" />`

  template += `<h2 class="cap">${customers.results[0].name.title}. ${customers.results[0].name.first} ${customers.results[0].name.last}</h2>`

  template += `<p class="email">${customers.results[0].email}</p>`

  template += `<p class="address cap">${customers.results[0].location.street}
  <br>
  ${customers.results[0].location.city}, ${customers.results[0].location.state} ${customers.results[0].location.postcode}`

  template += `<p class="phone">${customers.results[0].phone}`

  template += `</section>`

siteMain.innerHTML += template;
