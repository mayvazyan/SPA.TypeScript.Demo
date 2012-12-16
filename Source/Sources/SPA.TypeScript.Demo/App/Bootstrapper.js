define(["require", "exports", "App/ViewModels/ExampleViewModel", "App/ViewModels/GridExampleViewModel"], function(require, exports, __vm__, __gvm__) {
    var vm = __vm__;

    var gvm = __gvm__;

    var initialData = [
        {
            name: "Well-Travelled Kitten",
            sales: 352,
            price: 75.95
        }, 
        {
            name: "Speedy Coyote",
            sales: 89,
            price: 190.0
        }, 
        {
            name: "Furious Lizard",
            sales: 152,
            price: 25.0
        }, 
        {
            name: "Indifferent Monkey",
            sales: 1,
            price: 99.95
        }, 
        {
            name: "Brooding Dragon",
            sales: 0,
            price: 6350
        }, 
        {
            name: "Ingenious Tadpole",
            sales: 39450,
            price: 0.35
        }, 
        {
            name: "Optimistic Snail",
            sales: 420,
            price: 1.5
        }
    ];
    var Bootstrapper = (function () {
        function Bootstrapper() { }
        Bootstrapper.prototype.run = function () {
            ko.applyBindings(new vm.ExampleViewModel("Planet", "Earth"), $('#basic').get(0));
            ko.applyBindings(new gvm.GridExampleViewModel(initialData), $('#grid').get(0));
        };
        return Bootstrapper;
    })();
    exports.Bootstrapper = Bootstrapper;    
})
