/// <reference path="../../modules/knockout-2.2.d.ts" />

export class GridExampleViewModel {
    items: KnockoutObservableArray;
    gridViewModel: any;

    constructor(items: any) {
        this.items = ko.observableArray(items);
        this.gridViewModel = new ko.simpleGrid.viewModel({
            data: this.items,
            columns: [
                { headerText: "Item Name", rowText: <any>"name" },
                { headerText: "Sales Count", rowText: "sales" },
                { headerText: "Price", rowText: function (item) { return "$" + item.price.toFixed(2) } }
            ],
            pageSize: 4
        });
    }

    addItem() {
        this.items.push({ name: "New item", sales: 0, price: 100 });
    };
 
    sortByName() {
        this.items.sort(function(a, b) {
            return a.name < b.name ? -1 : 1;
        });
    };
 
    jumpToFirstPage() {
        this.gridViewModel.currentPageIndex(0);
    };    
}