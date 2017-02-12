var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider
    .when('/',{
        templateUrl: 'partials/login.html',
        controller: 'loginCON'
    })
    .when('/index',{
        templateUrl: 'partials/index.html',
        controller: 'indexcontroller'
    })
    .when('/show/:id',{
        templateUrl: 'partials/show.html',
        controller: 'showcontroller'
    })
    .when('/new',{
        templateUrl: 'partials/new.html',
        controller: 'newcontroller'
    })
    .when('/edit/',{
        templateUrl: 'partials/edit.html',
        controller: 'editcontroller'
    })
    .otherwise({
      redirectTo: '/'
    });
});

myApp.run( function($rootScope, $location) {

    // register listener to watch route changes
    $rootScope.$on( "$locationChangeStart", function(event, next, current) {
        if ( $rootScope.loggedUser == null ) {
            console.log('please log in');
            $location.url( "/" );
        }
        // else if ( next.templateUrl == "partials/login.html" && $rootScope.loggedUser != null) {
        //             console.log('already logged in');
        //             $location.url( "/new" );
        // }
        // else {
        //         // not going to #login, we should redirect now
        //             console.log('pass');
        // }
    })
})
