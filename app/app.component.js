"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.images = ['/resources/mountain_1.jpg', '/resources/mountain_2.jpg', '/resources/mountain_3.jpg'];
        this.current_image = 1;
        this.prev_disabled = false;
        this.next_disabled = false;
    }
    AppComponent.prototype.onPrevious = function () {
        this.next_disabled = false;
        if (this.current_image == 1) {
            this.current_image--;
            this.prev_disabled = true;
        }
        else {
            this.current_image--;
        }
    };
    AppComponent.prototype.onNext = function () {
        this.prev_disabled = false;
        if (this.current_image == 1) {
            this.current_image++;
            this.next_disabled = true;
        }
        else {
            this.current_image++;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <table class=\"jumbotron text-center\" style=\"height:100%;background-color:black\">\n    <tr>\n        <td>    <button (click)=\"onPrevious()\" class=\"btn btn-default\" [disabled]=\"prev_disabled\">Previous</button>   </td>\n        <td>    <img [src]=\"images[current_image]\">  </td>\n        <td>    <button (click)=\"onNext()\" class=\"btn btn-default\" [disabled]=\"next_disabled\">Next</button>   </td>\n    </tr>\n  </table>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map