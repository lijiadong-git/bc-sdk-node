"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
function refClone(data) {
    var type = getType(data);
    var obj;
    if (type === 'array') {
        obj = [];
        for (var i = 0, len = data.length; i < len; i++) {
            obj.push(refClone(data[i]));
        }
        return obj;
    }
    if (type === 'object') {
        obj = {};
        for (var key in data) {
            obj[key] = refClone(data[key]);
        }
        return obj;
    }
    if (type === 'string') {
        return data.split('');
    }
    return data;
}
exports.refClone = refClone;
function derefClone(data, type) {
    var t = (type && type.hasOwnProperty('name')) ? type.name : type;
    var obj;
    if (t === 'ArrayType') {
        if (type && type.hasOwnProperty('type')
            && type.type.hasOwnProperty('name')
            && type.type.name === 'byte') {
            obj = String.fromCharCode.apply(null, data);
        }
        else {
            obj = [];
            for (var i = 0, len = data.length; i < len; i++) {
                obj.push(derefClone(data[i], type.type));
            }
        }
        return obj;
    }
    if (t === 'StructType') {
        obj = {};
        for (var k in type.fields) {
            obj[k] = derefClone(data[k], type.fields[k].type);
        }
        return obj;
    }
    return data;
}
exports.derefClone = derefClone;
//# sourceMappingURL=_clone.js.map