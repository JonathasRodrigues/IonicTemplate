angular.module('ionicTemplate.controllers')
.controller('TimeLineController', function($scope, TimeLineService) {

  $scope.chats = TimeLineService.all();
  $scope.remove = function(chat) {
    TimeLineService.remove(chat);
  };
})

.controller('TimeLineDetailsController', function($scope, $stateParams, TimeLineService) {
  console.log('Opa');
  $scope.chat = TimeLineService.get($stateParams.chatId);
});