define(["require", "exports"], function(require, exports) {
    var ExampleViewModel = (function () {
        function ExampleViewModel(first, last) {
            this.firstName = ko.observable(first);
            this.lastName = ko.observable(last);
            this.fullName = ko.computed(function () {
                return this.firstName() + " " + this.lastName();
            }, this);
        }
        return ExampleViewModel;
    })();
    exports.ExampleViewModel = ExampleViewModel;    
})
