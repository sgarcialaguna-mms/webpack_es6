/*global require*/
'use strict';

require.config({
	paths: {
		angular: 'angular/angular'
	},
	shim: {
		angular: {
			exports: 'angular'
		}
	},
	deps: ['app']
});
