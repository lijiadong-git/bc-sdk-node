"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ref = require("ref-napi");
const refStruct = require("ref-struct-di");
const refArray = require("ref-array-di");
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
        let buf = Buffer.from(data);
        return Array.prototype.slice.call(buf);
    }
    return data;
}
exports.refCast = refCast;
const refArrayName = refArray('int').name;
const refStructName = refStruct({}).name;
function derefCast(data, type) {
    var t = data.__proto__.constructor.name;
    var obj;
    if (t && t === refArrayName) {
        if (type && type.hasOwnProperty('type')
            && type.type.hasOwnProperty('name')
            && type.type.name === 'byte') {
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
    if (t && t === refStructName) {
        obj = {};
        for (var k in type.fields) {
            obj[k] = derefCast(data[k], type.fields[k].type);
        }
        return obj;
    }
    if (t && t === 'Buffer') {
        if (type && type.hasOwnProperty('name')
            && type.name === 'byte*') {
            obj = ref.readCString(data, 0);
        }
        return obj;
    }
    return data;
}
exports.derefCast = derefCast;
/*
export function derefCast(data: any, type: any): any {
    if (!type) {
        return data;
    }
    var obj: any;
    if (type.hasOwnProperty('fixedLength')) {
        if (type && type.hasOwnProperty('type')
            && type.type.hasOwnProperty('name')
            && type.type.name === 'char') {
            obj = ref.readCString(data.buffer, 0);
        }
        else {
            obj = [];
            for(var i = 0, len = data.length; i < len; i++){
                obj.push(derefCast(data[i], type.type));
            }
        }
        return obj;
    }
    if (type.hasOwnProperty('fields')) {
        obj = {};
        for(var k in type.fields){
            obj[k] = derefCast(data[k], type.fields[k].type);
        }
        return obj;
    }
    return data;
}*/ 
//# sourceMappingURL=_cast.js.map