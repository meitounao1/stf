describe('GeneralCtrl', function () {

  beforeEach(angular.mock.module(require('./index').name))

  var scope, ctrl

  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new()
    ctrl = $controller('GeneralCtrl', {$scope: scope})
  }))

  it('should ...', inject(function () {
    expect(1).toEqual(1)

  }))

})
