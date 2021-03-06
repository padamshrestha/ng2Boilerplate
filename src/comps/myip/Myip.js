System.register(["@angular/core", 'rxjs/Observable', 'rxjs/add/operator/do', "rxjs/AsyncSubject", '@angular/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Observable_1, AsyncSubject_1, http_1;
    var MyIp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (AsyncSubject_1_1) {
                AsyncSubject_1 = AsyncSubject_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            MyIp = (function () {
                function MyIp(http) {
                    var _this = this;
                    this.http = http;
                    this.getMyIp('https://secure.digitalsignage.com/getIp').subscribe(function (result) {
                        _this.ipAddress = JSON.parse(result._body).ip;
                    });
                    setTimeout(function (e) {
                        _this.getMyIp('https://secure.digitalsignage.com/getIp').subscribe(function (result) {
                            _this.ipAddress = JSON.parse(result._body).ip;
                        });
                    }, 2000);
                }
                MyIp.prototype.getMyIp = function (url) {
                    var _this = this;
                    var self = this;
                    return Observable_1.Observable.create(function (observer) {
                        if (!_this.subject) {
                            _this.subject = new AsyncSubject_1.AsyncSubject();
                            self.http.get(url).subscribe((_this.subject));
                        }
                        return _this.subject.subscribe(observer);
                    });
                };
                MyIp = __decorate([
                    core_1.Component({
                        selector: 'MyIp',
                        template: "\n                <h3>Your ip address is: {{ipAddress}}</h3>\n                <small>I am MyIp component</small>\n                <!--\n                 This is an example of providing a default template only if one is not provided by consumer of\n                 the component's ng-content template \n                -->\n                total children in ng-content: {{contentWrap.childNodes.length}}\n                <div #contentWrap><ng-content></ng-content></div>\n                <div class=\"timer\" *ngIf=\"contentWrap.childNodes.length === 1\">\n                  <div class=\"time\"> TOTAL {{contentWrap.childNodes.length}}</div></div>"
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], MyIp);
                return MyIp;
            }());
            exports_1("MyIp", MyIp);
        }
    }
});
//# sourceMappingURL=Myip.js.map