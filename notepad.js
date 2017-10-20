angular.module('app', [])
  .controller('mainCtrl', mainCtrl)
  .directive('entry', entryDirective);
function mainCtrl ($scope) {

  $scope.notes = [];
  $scope.addNew = function (notepad) {
    $scope.notes.push({
      url: notepad.url
    });
    notepad.url='';
  }
}

function entryDirective() {
  return {
    scope: {
      notepad: '='
    },
    restrict: 'E',
    replace: 'true',
    template: (
      '<div class="entry">' +
        '<img ng-src="{{notepad.url}}" />' +
        '<input type="checkbox" ng-click="check" style="display: table-cell; padding: 10px;"/>' +
      '</div>'
    ),
    link:link
  };

  function link (scope) {
    if(!scope.notepad.url) {
      scope.notepad.url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuXfv8-BRuloEovfIJsqo5JP5vLTKJzvARhLbfI97t_7pwQXOEPw';
    }
  }

}
