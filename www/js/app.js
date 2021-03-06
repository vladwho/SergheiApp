angular.module('starter', ['ionic', 'ionMdInput', 'ionic-material','starter.controllers', 'starter.services', 'angucomplete-alt'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

  $httpProvider.defaults.useXDomain = true;
      delete $httpProvider.defaults.headers.common["X-Requested-With"];
      $httpProvider.defaults.headers.common["Accept"] = "application/json";
      $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
      $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
      $httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
      $httpProvider.defaults.headers.common['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS, PUT';
      $httpProvider.defaults.headers.common['Access-Control-Allow-Credentials'] = true;

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
    controller: 'AppCtrl'
  })

  .state('tab.search', {
        url: '/search',
        views: {
          'tab-search': {
            templateUrl: 'templates/tab-search.html',
            controller: 'SearchCtrl'
          }
        }
    })

    .state('tab.results', {
          url: '/results/:search',
          views: {
            'tab-results': {
              templateUrl: 'templates/search-results.html',
              controller: 'SearchResultsCtrl'
            }
          }
      });

  $urlRouterProvider.otherwise('/tab/search');

});
