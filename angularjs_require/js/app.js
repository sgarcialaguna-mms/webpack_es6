/*global require*/
'use strict';

require('todomvc-common/base');
var angular = require('angular');
var todoCtrl = require('controllers/todo');
var todoFocusDir = require('directives/todoFocus');
var todoEscapeDir = require('directives/todoEscape');
var todoStorageSrv = require('services/todoStorage');

angular.module('todomvc', [todoFocusDir, todoEscapeDir, todoStorageSrv]).controller('TodoController', todoCtrl);
angular.bootstrap(document, ['todomvc']);
