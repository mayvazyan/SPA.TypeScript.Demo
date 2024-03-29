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
require([
    'jquery', 
    'ko'
], function ($, ko) {
    require([
        'app/Bootstrapper'
    ], function (main) {
        var bootstrapper = new main.Bootstrapper();
        bootstrapper.run();
    });
});
