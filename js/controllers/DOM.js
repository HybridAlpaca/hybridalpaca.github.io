window.angular.module('devteam', []).controller('main', function($scope) {
    $scope.options = [{
        name: 'Make a Game',
        url: '#/game/create'
    }, {
        name: 'Do Some Stuff',
        url: '#/stuff'
    }];
    $scope.games = [];
});