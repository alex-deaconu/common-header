angular.module("risevision.common.header")

.controller("SubcompanyBannerCtrl", ["$scope", "$modal",
  "$loading", "userState",
  function ($scope, $modal, $loading, userState) {
    $scope.inRVAFrame = userState.inRVAFrame();

    $scope.$watch(function () {
        return userState.isSubcompanySelected();
      },
      function (value) {
        $scope.isSubcompanySelected = value;
        $scope.selectedCompanyName = userState.getSelectedCompanyName();
      });

    $scope.switchToMyCompany = function () {
      userState.resetCompany();
    };
  }
]);
