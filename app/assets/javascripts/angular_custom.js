 spa_app = angular.module('myProject',['ui.bootstrap']);

 spa_app.controller('myAboutController', function($scope){
    $scope.message = "Its About controller"
  });

  spa_app.controller('myContactController', function($scope){
    $scope.message = "Its Contact controller"
  });

  //Display all projects along with pagination
  spa_app.controller('myProjectIndexController', function($scope,$http){
   $http.get("https://angular-with-rails-demo.herokuapp.com/api/v1/list_of_projects").success(function(res){
    $scope.projects = res.records;
    $scope.filteredTodos = []
    ,$scope.currentPage = 1
    ,$scope.numPerPage = 10
    ,$scope.maxSize = 5;
  
  $scope.$watch('currentPage + numPerPage', function() {
    var begin = (($scope.currentPage - 1) * $scope.numPerPage)
    , end = begin + $scope.numPerPage;
    
   $scope.filteredTodos = $scope.projects.slice(begin, end);
  });
  });//GET request completed.
  });

  spa_app.controller('myTermsController', function($scope){
    $scope.message = "Its Terms controller"
  });

  spa_app.controller('myHistoryController', function($scope){
    $scope.message = "Its History controller"
  });

  spa_app.controller('createProjectController', function($scope,$http,$location){
    $scope.update = function(project){
       console.log(project.title);
       console.log(project.description);
     $http({method: "POST", url: "https://angular-with-rails-demo.herokuapp.com/api/v1/create_project", data: {title: project.title, description: project.description} }).success(function(data) {        
          console.log("Successfully Project Created!")  
      }).
      error(function(data, status) {
        console.log("Request failed");
            }); 

  project.title ='';
  project.description='';
        $location.path( "/projects" );
    };
  });

  


 