"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var handler = __importStar(require("../Handlers/user"));
var router = express_1.Router();
router.post('/login', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var username, password, res;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                username = String((_a = request.query.username) === null || _a === void 0 ? void 0 : _a.toString());
                password = String((_b = request.query.password) === null || _b === void 0 ? void 0 : _b.toString());
                if ((username === '' && password === '') || (username === 'undefined' && password === 'undefined')) {
                    res = {
                        success: false,
                        error: 'Invalid Query Parameters',
                        message: 'Bad request'
                    };
                    return [2 /*return*/, response.status(400).json(res)];
                }
                return [4 /*yield*/, handler.login(username, password)
                        .then(function (data) {
                        if (data == null) {
                            var res = {
                                success: false,
                                error: 'User not found',
                                message: 'Invalid Credentials'
                            };
                            return response.status(400).json(res);
                        }
                        var res = {
                            success: true,
                            data: data === null || data === void 0 ? void 0 : data.toJSON()
                        };
                        return response.json(res);
                    }).catch(function (e) {
                        var res = {
                            success: false,
                            error: 'Server error',
                            message: e
                        };
                        return response.status(500).json(res);
                    })];
            case 1:
                _c.sent();
                return [2 /*return*/];
        }
    });
}); });
//handle
router.post('/register', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var username, password, name, phone, res;
    var _a, _b, _c, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                username = String((_a = request.query.username) === null || _a === void 0 ? void 0 : _a.toString());
                password = String((_b = request.query.password) === null || _b === void 0 ? void 0 : _b.toString());
                name = String((_c = request.query.name) === null || _c === void 0 ? void 0 : _c.toString());
                phone = String((_d = request.query.phone) === null || _d === void 0 ? void 0 : _d.toString());
                if ((username === '' && password === '' && name === '' && phone === '') || (username === 'undefined' && password === 'undefined' && name === 'undefined' && phone === 'undefined')) {
                    res = {
                        success: false,
                        error: 'Invalid Query Parameters',
                        message: 'Bad request'
                    };
                    return [2 /*return*/, response.status(400).json(res)];
                }
                return [4 /*yield*/, handler.register(username, password, name, phone)
                        .then(function (data) {
                        var res = {
                            success: true
                        };
                        response.json(res);
                    })
                        .catch(function (e) {
                        var res = {
                            success: false,
                            error: 'User already exists',
                            message: e
                        };
                        return response.status(400).json(res);
                    })];
            case 1:
                _e.sent();
                return [2 /*return*/];
        }
    });
}); });
exports.default = router;
