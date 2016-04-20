angular.module('blarg', []).controller('main', function($scope) {
    $scope.bornDate = '2015-16';
    $scope.games = [{
        name: 'Incrementia',
        url: '//nathen418.itch.io/incramentia',
        type: 'incremental'
    }, {
        name: 'The Grove',
        url: '//grove-tramans.c9users.io',
        type: 'RPG'
    }];
});