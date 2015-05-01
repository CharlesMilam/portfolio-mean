var app = angular.module("portfolio", [])

app.controller("MainCtrl", [
    "$scope",
    function  ($scope) {
        $scope.projects = [
           {
                name: "Tatalog",
                about: "organize your ink",
                devDate: "March 2015",
                repo: "https://github.com/CharlesMilam/tatalog",
                status: "active development",
                image: "/app/assets/images/tatalog.png",
                sortNum: 0
            },
            {
                name: "Portfolio",
                about: "this portfolio",
                devDate: "March 2015",
                repo: "https://github.com/CharlesMilam/portfolio",
                status: "active development",
                image: "/app/assets/images/portfolio.png",
                sortNum: 1
            }
        ]

        $scope.addProject = function  () {
            // basic form validation
            if (!$scope.name || $scope.name === "") {return}

            $scope.projects.push(
                {
                    name: $scope.name,
                    about: $scope.about,
                    devDate: $scope.devDate,
                    repo: $scope.repo,
                    status: $scope.status,
                    image: $scope.image,
                    sortNum: $scope.sortNum
                }
            )
            // clear the form
            {
                    $scope.name = "",
                    $scope.about = "",
                    $scope.devDate = "",
                    $scope.repo = "",
                    $scope.status = "",
                    $scope.image = "",
                    $scope.sortNum = ""
            }
        }
    }
])