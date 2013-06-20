'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('MyCtrl1', [function () {
        this.categories = ["AA", "AD", "BC", "CB", "ZD", "DD", "EH"];
    }])
    .controller('MyCtrl2', [function () {
        this.categories = ["A", "B", "C", "Z", "D", "D"];
    }])
    .controller('MyCtrl3', [function () {
        this.categories = [
            {id: "1", name: "A"},
            {id: "2", name: "B"},
            {id: "3", name: "C"},
            {id: "4", name: "Z"},
            {id: "5", name: "D"},
            {id: "6", name: "D"},
            {id: "7", name: "D"}
        ];
    }]);
