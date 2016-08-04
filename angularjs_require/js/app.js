/*global require*/
/* jshint es6:true */
'use strict';

require('todomvc-common/base');

import angular from 'angular';
import todoCtrl from 'controllers/todo'
import todoFocusDir from 'directives/todoFocus';
import todoEscapeDir from 'directives/todoEscape';
import todoStorageSrv from 'services/todoStorage';

angular.module('todomvc', [todoFocusDir, todoEscapeDir, todoStorageSrv]).controller('TodoController', todoCtrl);
angular.bootstrap(document, ['todomvc']);

//window.setTimeout(() => {alert('Hello from ES6')}, 0);
