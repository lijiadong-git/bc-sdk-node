"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Error Code define
var ERROR;
(function (ERROR) {
    ERROR[ERROR["E_NONE"] = 0] = "E_NONE";
    ERROR[ERROR["E_UND"] = -1] = "E_UND";
    ERROR[ERROR["E_OOM"] = -100] = "E_OOM";
    ERROR[ERROR["E_TYPE_UNKNOWN"] = -101] = "E_TYPE_UNKNOWN";
    ERROR[ERROR["E_NULL_POINTER"] = -102] = "E_NULL_POINTER";
    ERROR[ERROR["E_WRONG_STATE"] = -103] = "E_WRONG_STATE";
    ERROR[ERROR["E_NOT_FOUND"] = -104] = "E_NOT_FOUND";
    ERROR[ERROR["E_WRONG_FORMAT"] = -105] = "E_WRONG_FORMAT";
    ERROR[ERROR["E_UNSUPPORTED"] = -106] = "E_UNSUPPORTED";
    ERROR[ERROR["E_OOR"] = -107] = "E_OOR";
    ERROR[ERROR["E_EOS"] = -108] = "E_EOS";
    ERROR[ERROR["E_ILLEGAL"] = -109] = "E_ILLEGAL";
    ERROR[ERROR["E_INIT_FAIL"] = -110] = "E_INIT_FAIL";
    ERROR[ERROR["E_ALLOC_FAIL"] = -111] = "E_ALLOC_FAIL";
    ERROR[ERROR["E_REPEAT"] = -112] = "E_REPEAT";
    ERROR[ERROR["E_BUSY"] = -113] = "E_BUSY";
    ERROR[ERROR["E_NOT_READY"] = -114] = "E_NOT_READY";
    ERROR[ERROR["E_NOT_ENOUGH"] = -115] = "E_NOT_ENOUGH";
    ERROR[ERROR["E_LOGIN_FAIL"] = -200] = "E_LOGIN_FAIL";
    ERROR[ERROR["E_AUTH_FAIL"] = -201] = "E_AUTH_FAIL";
    ERROR[ERROR["E_TASK_EXIST"] = -202] = "E_TASK_EXIST";
    ERROR[ERROR["E_NETIO_FAIL"] = -203] = "E_NETIO_FAIL";
    ERROR[ERROR["E_CONN_FAIL"] = -204] = "E_CONN_FAIL";
    ERROR[ERROR["E_SEND_FAIL"] = -205] = "E_SEND_FAIL";
    ERROR[ERROR["E_RECV_FAIL"] = -206] = "E_RECV_FAIL";
    ERROR[ERROR["E_INVALID"] = -207] = "E_INVALID";
    ERROR[ERROR["E_OP_TIMEOUT"] = -208] = "E_OP_TIMEOUT";
})(ERROR = exports.ERROR || (exports.ERROR = {}));
//# sourceMappingURL=error.js.map