define(["require", "exports"], function(require, exports) {
    var GridExampleViewModel = (function () {
        function GridExampleViewModel(items) {
            this.items = ko.observableArray(items);
            this.gridViewModel = new ko.simpleGrid.viewModel({
                data: this.items,
                columns: [
                    {
                        headerText: "Item Name",
                        rowText: "name"
                    }, 
                    {
                        headerText: "Sales Count",
                        rowText: "sales"
                    }, 
                    {
                        headerText: "Price",
                        rowText: function (item) {
                            return "$" + item.price.toFixed(2);
                        }
                    }
                ],
                pageSize: 4
            });
        }
        GridExampleViewModel.prototype.addItem = function () {
            this.items.push({
                name: "New item",
                sales: 0,
                price: 100
            });
        };
        GridExampleViewModel.prototype.sortByName = function () {
            this.items.sort(function (a, b) {
                return a.name < b.name ? -1 : 1;
            });
        };
        GridExampleViewModel.prototype.jumpToFirstPage = function () {
            this.gridViewModel.currentPageIndex(0);
        };
        return GridExampleViewModel;
    })();
    exports.GridExampleViewModel = GridExampleViewModel;    
})
