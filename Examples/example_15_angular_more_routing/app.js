angular.module('routing', ['ui.router', 'ngMessages']).config(Config);

function Config($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('newtask', {
      url: '/newtask',
      templateUrl: 'templates/newtask.html',
      controller: 'NewTaskController'
    })
    .state('taskslist', {
      url: '/taskslist',
      templateUrl: 'templates/taskslist.html',
      controller: 'TasksListController'
    }).state('taskslist.single', {
      url: '/:task_title',
      templateUrl: 'templates/singletask.html',
      controller:'SingleTaskController'
    });
  $urlRouterProvider.otherwise('/newtask');
}
