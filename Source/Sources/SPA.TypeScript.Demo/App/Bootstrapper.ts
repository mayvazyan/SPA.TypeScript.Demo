/// <reference path="../modules/jquery-1.8.d.ts" />

import vm = module("App/ViewModels/ExampleViewModel");
import gvm = module("App/ViewModels/GridExampleViewModel");

var initialData = [
    { name: "Well-Travelled Kitten", sales: 352, price: 75.95 },
    { name: "Speedy Coyote", sales: 89, price: 190.00 },
    { name: "Furious Lizard", sales: 152, price: 25.00 },
    { name: "Indifferent Monkey", sales: 1, price: 99.95 },
    { name: "Brooding Dragon", sales: 0, price: 6350 },
    { name: "Ingenious Tadpole", sales: 39450, price: 0.35 },
    { name: "Optimistic Snail", sales: 420, price: 1.50 }
];

export class Bootstrapper {
    public run() {                
        ko.applyBindings(new vm.ExampleViewModel("Planet", "Earth"), $('#basic').get(0)); 
        ko.applyBindings(new gvm.GridExampleViewModel(initialData), $('#grid').get(0)); 
    }
}