app.controller('DashboardCtrl', function($scope, $stateParams, $http, $localStorage, Authentication) {
  // console.log('ueser', Authentication.getUser());
  $scope.getUser = function() {

    $scope.signedIn = true;
    var userId = JSON.parse($localStorage.userId).id;
    $http.get('user/me/' + userId).success(function(response) {
      $scope.user = response;
    }).error(function(error) {
      $scope.error = error;
    });
  };

  $scope.selectedIndex = 0;
  $scope.selectedTabForApp = 0;

  $scope.tabViews = ['MY APPS', 'MY KEYS'];
  $scope.switchTab = function(index) {
    $scope.selectedIndex = index;
  };

  $scope.tabForAppViews = ['ADD APP', 'SAMPLE APP'];
  $scope.switchTabForApp = function(index) {
    $scope.selectedTabForApp = index;
  };

  $scope.addKey = function(){
    $http.get('').success(function(response){
      $scope.newKey = response.data;
    }).error(function(error){
      $scope.error = error;
    });
  };

  // $scope.onFileSelect = function($files) {
  //   $scope.files = $files;
  //   $scope.imageFiles = [];
  //   $scope.stringFiles = [];
  //   if ($scope.files) {
  //     for (var i in $scope.files) {
  //       if ($scope.files[0].type === 'application/pdf' || $scope.files[0].type === 'application/msword' || $scope.files[0].type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || $scope.files[i].size < 600000) {
  //         $scope.correctFormat = true;
  //       } else {
  //         alert('error');
  //         alert('Wrong file format...');
  //         $scope.correctFormat = false;
  //       }
  //       $scope.start(i);

  //     }
  //   }
  // };
});
