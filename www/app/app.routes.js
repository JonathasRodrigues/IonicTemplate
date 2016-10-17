angular.module('ionicTemplate', ['ionic', 'ionicTemplate.controllers', 'ionicTemplate.services'])
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'app/components/tab/tab.view.html'
  })

  
  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'app/components/home/home.view.html',
        controller: 'HomeController'
      }
    }
  })

  .state('tab.timeline', {
      url: '/timeline',
      views: {
        'tab-timeline': {
          templateUrl: 'app/components/timeline/timeline.view.html',
          controller: 'TimeLineController'
        }
      }
    })
    .state('tab.timeline-details', {
      url: '/timeline-details/:chatId',
      views: {
        'tab-timeline': {
          templateUrl: 'app/components/timeline/timeline-details.view.html',
          controller: 'TimeLineDetailsController'
        }
      }
    })

  .state('tab.options', {
    url: '/options',
    views: {
      'tab-options': {
        templateUrl: 'app/components/options/options.view.html',
        controller: 'OptionsController'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});