let siteMain = document.createElement("main");
siteMain.id = "siteMain";

let pageHead = document.createElement("h1");
pageHead.id = "pageHead";
pageHead.setAttribute("class", "upper");
pageHead.textContent = "Internal Company Directory";

siteMain.appendChild(pageHead);

document.body.appendChild(siteMain);

for (var i = 0; i < customers.results.length; i++) {
  let template = "";

    template += `<section class="bio">`

    template += `<img src=${customers.results[i].picture.large} class="headshot" />`

    template += `<h2 class="upper">${customers.results[i].name.first} ${customers.results[i].name.last}</h2>`

    template += `<p class="email upper">${customers.results[i].email}</p>`

    template += `<p class="address cap">${customers.results[i].location.street}
    <br>
    ${customers.results[i].location.city}, ${customers.results[i].location.state} ${customers.results[i].location.postcode}`

    template += `<p class="phone">${customers.results[i].phone}`

    template += `<p class="blur">${customers.results[i].id.value}</p>`

    template += `</section>`

  siteMain.innerHTML += template;
}
// let template = "";
//
//   template += `<section class="bio">`
//
//   template += `<img src=${customers.results[0].picture.large} class="headshot" />`
//
//   template += `<h2 class="upper">${customers.results[0].name.first} ${customers.results[0].name.last}</h2>`
//
//   template += `<p class="email">${customers.results[0].email}</p>`
//
//   template += `<p class="address cap">${customers.results[0].location.street}
//   <br>
//   ${customers.results[0].location.city}, ${customers.results[0].location.state} ${customers.results[0].location.postcode}`
//
//   template += `<p class="phone">${customers.results[0].phone}`
//
//   template += `<p class="blur">${customers.results[0].id.value}</p>`
//
//   template += `</section>`
//
// siteMain.innerHTML += template;
