const URL = "https://covid19.mathdro.id/api";

let app = angular.module("myApp", []);

app.controller("myCtrl", ($scope, $http) => {
  // this is controller
  $scope.title = "Stay Home Stay Safe";

  console.log("APP Loaded");

  //calling API

  $http.get(URL).then(
    (response) => {
      //success
      console.log("Inside Success");

      console.log(response.data);

      $scope.all_data = response.data;
    },
    (error) => {
      //error
      console.log(error.data);
    }
  );

  //get country data

  $scope.get_c_data = () => {
    console.log($scope.c);
    let country = $scope.c;
    if (country == "") {
      $scope.c_data = undefined;
      return;
    }

    $http.get(`${URL}/countries/${country}`).then(
      (response) => {
        console.log(response.data);

        $scope.c_data = response.data;
        //success
      },
      (error) => {
        //error
        console.log(error);
      }
    );
  };
});
