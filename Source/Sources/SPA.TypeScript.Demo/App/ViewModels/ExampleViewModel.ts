/// <reference path="../../modules/knockout-2.2.d.ts" />

export class ExampleViewModel {
    firstName: KnockoutObservableString;
    lastName: KnockoutObservableString;
    fullName: KnockoutObservableString;

    constructor(first:string, last: string) {
        this.firstName = ko.observable(first);
        this.lastName = ko.observable(last);

        this.fullName = ko.computed(function() {
            // Knockout tracks dependencies automatically. It knows that fullName depends on firstName and lastName, because these get called when evaluating fullName.
            return this.firstName() + " " + this.lastName();
        }, this);
    }       
}