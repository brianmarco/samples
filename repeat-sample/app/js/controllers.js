'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('MyCtrl1', function ($scope) {
        $scope.books = [
            {
                id: 'id',
                content: {
                    name: 'name',
                    price: 'price',
                    date: 'date'
                }
            },
            {
                id: 'id2',
                content: {
                    name: 'name2',
                    price: 'price2',
                    date: 'date2'
                }
            },
            {
                id: 'id3',
                content: {
                    name: 'name3',
                    price: 'price3',
                    date: 'date3'
                }
            }
        ];

        $scope.singleBook = {
            id: 'singleId',
            content: {
                name: 'singleName',
                price: 'singlePrice',
                date: 'singleDate'
            }
        }
    })

    .controller('MyCtrl2', [function () {

    }]);
