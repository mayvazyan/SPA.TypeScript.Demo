/// <reference path="../modules/require.d.ts" />

require.config({
    baseUrl: '../',
    paths: {
        'jquery': 'Scripts/jquery-1.7.1.min',
        'ko': 'Scripts/knockout-2.1.0'
    }, 
    shim: {
        jquery: {
            exports: '$'
        },
        ko: {
            exports: 'ko'
        }
    }
});

declare var exports;
require(['jquery','ko'
     ], 
    ($, ko) => {      
        require(['app/Bootstrapper'], function (main) {            
            var bootstrapper = new main.Bootstrapper();            
            bootstrapper.run();
        });
});