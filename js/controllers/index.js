angular.module('blarg', []).controller('main', function($scope) {
    $scope.bornDate = '2015-16';
    $scope.games = [{
        name: 'Incrementia',
        url: '//nathen418.itch.io/incramentia',
        type: 'incremental'
    }, {
        name: 'The Grove',
        url: '//grove-mmo.com',
        type: 'RPG'
    }, {
        name: 'Devteam Idle',
        url: './devteam',
        type: 'incremental, idle'
    }];
});
