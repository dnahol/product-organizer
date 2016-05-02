'use strict';

var app = angular.module('routerApp');

app.service('People', function($http, $q) {

  var people = [{
    id: '919b92d5-48e6-4bef-925e-e377242597e1',
    name:'blueberry',
    desc: '1lb local and organic',
    price: '5.99',
    category: 'food',
    image: 'http://img3.cliparto.com/pic/s/213035/4100838-cartoon-blueberry.jpg'
  },
  {
    id: '335eaca6-54de-4af4-b593-df8792755b74',
    name:'purse',
    desc: 'american flag',
    price: '30.99',
    category: 'clothes',
    image: 'http://ep.yimg.com/ay/yhst-80159626440831/american-flag-super-cyclone-purse-5.gif'
  },
  {
    id: '2fdfbda8-027d-4afd-9286-66abd8e5c028',
    name:'watermelon',
    desc: '1 small seedless',
    price: '1.50',
    category: 'food',
    image: 'http://vignette3.wikia.nocookie.net/chefville/images/8/8c/Ingredient-Watermelon.png/revision/latest?cb=20130715191206'
  },
  {
    id:'b38285ca-a93d-497e-a56b-12ce35a6cd66',
    name:'sunglasses',
    desc: 'aviators',
    price: '35.50',
    category: 'clothes',
    image: 'http://incentre.in/media/catalog/product/cache/1/thumbnail/100x100/9df78eab33525d08d6e5fb8d27136e95/f/a/fastrack_aviator_sunglasses_m083gy1f_incentre1.jpg'

  },
  {
    id:'c838bd4c-ad76-4da6-b7db-e82c656e4be8',
    name:'mug',
    desc: 'doctor who disappearing tardis',
    price: '22.50',
    category: 'dishes',
    image: 'http://www.abitofhome.ca/images/thumbnails/8/100/100/tardis-20oz-heat-reactive-ceramic-travel-mug-16251.jpg'
  }
]


//the get all function. kept template name.
this.getByPage = num => {
  // return whole list of products (here people = products);
  // var pageUrl = `//swapi.co/api/people/?page=${num}`
  return $q(function(resolve, reject) {

      if (true) {
        resolve(people);
      }

  })
  .then(res => {
    return $q.resolve(people);
  });
};


this.getById = id => {

  return $q(function(resolve, reject) {
    var person = {}
    console.log('id in service :', id);
    person = people.filter(function(v){ return v.id === id; })[0];
    console.log('person in service', person);

      if (person) {
        resolve(person);
      } else {
        console.log('You must enter a product ID.')
      }

  });
};



// this.getById = id => {
//   // returning a promise
//   // var personUrl = `//swapi.co/api/people/${id}`
//   var personUrl = `https://swapi.co/api/people/${id}`
//   return $http({
//     method: 'GET',
//     url: personUrl,
//     cache: true
//   })
//   .then(res => {
//     return $q.resolve(res.data);
//   });
// };


});
