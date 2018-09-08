"use strict";
function __export_sdk(o, m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(o)) {
            exports[o] = new Object();
        }
        if (!exports[o].hasOwnProperty(p)) {
            exports[o][p] = m[p];
        }
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export_sdk('sdk', require("./js/sdk"));
__export_sdk('bcTypes', require("./js/types"));