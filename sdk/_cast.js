"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ref = require("ref");
function getType(obj) {
    var toString = Object.prototype.toString;
    var map = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object'
    };
    return map[toString.call(obj)];
}
function refCast(data) {
    var type = getType(data);
    var obj;
    if (type === 'array') {
        obj = [];
        for (var i = 0, len = data.length; i < len; i++) {
            obj.push(refCast(data[i]));
        }
        return obj;
    }
    if (type === 'object') {
        obj = {};
        for (var key in data) {
            obj[key] = refCast(data[key]);
        }
        return obj;
    }
    if (type === 'string') {
        return data.split('');
    }
    return data;
}
exports.refCast = refCast;
function derefCast(data, type) {
    var t = (type && type.hasOwnProperty('name')) ? type.name : type;
    var obj;
    if (t === 'ArrayType') {
        if (type && type.hasOwnProperty('type')
            && type.type.hasOwnProperty('name')
            && type.type.name === 'char') {
            obj = ref.readCString(data.buffer, 0);
        }
        else {
            obj = [];
            for (var i = 0, len = data.length; i < len; i++) {
                obj.push(derefCast(data[i], type.type));
            }
        }
        return obj;
    }
    if (t === 'StructType') {
        obj = {};
        for (var k in type.fields) {
            obj[k] = derefCast(data[k], type.fields[k].type);
        }
        return obj;
    }
    return data;
}
exports.derefCast = derefCast;
//# sourceMappingURL=_cast.js.map