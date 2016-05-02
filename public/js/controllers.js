'use strict';

var app = angular.module('routerApp');

app.controller('navControl', function($scope) {
  $scope.reloadPage= () => {
    console.log('page reload');
    location.reload();
  };
});


app.controller('listCtrl', function($scope, $stateParams, $state, pageObj, People) {
  console.log('listCtrl!');
  //$scope.page = [{},{},{},{}] array of person objects on that page
  console.log('pageObj: ', pageObj);
  $scope.num = $stateParams.num;
  $scope.page = pageObj;


  // $scope.goToDetail = person => {
  //   var id = person.id;
  //   $scope.status = 'Getting your product details! One moment!'
  //   $state.go('detail', {
  //     id: id
  //   });
  // }
});


app.controller('detailCtrl', function($scope, $state, person) {
  console.log('detailCtrl!');

  console.log('person: ', person );
  $scope.person = person;

});

app.controller('homeCtrl', function($scope) {
  console.log('homeCtrl!');

});

app.controller('aboutCtrl', function($scope, $state, SweetAlert) {
  console.log('aboutCtrl!');
  //  Show information like how many products there are, and their total value. Also show that kind of information for each category.


  $scope.showAlert = () => {
    SweetAlert.swal({
      title: "Are you sure?",
      text: "You want to leave this page and go to Producs List?",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, go to Products List!",
      closeOnConfirm: true
    }, function(isConfirm) {
      if(isConfirm) {
        // window.location.href = 'http://swapi.co/';
          $state.go('list', {
            
          });

      };
    });
  };
});
