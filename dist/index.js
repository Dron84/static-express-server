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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const runServer = () => __awaiter(void 0, void 0, void 0, function* () {
    const app = (0, express_1.default)();
    const cssPath = path_1.default.join(__dirname, '..', 'client/css'); // this 'client/css' is a need to get in index.html folder
    const jsPath = path_1.default.join(__dirname, '..', 'client/js'); // this 'client/js' is a need to get in index.html folder
    const imgPath = path_1.default.join(__dirname, '..', 'client/img'); // this 'client/img' is a need to get in index.html folder
    const indexPath = path_1.default.join(__dirname, '..', '/client/index.html');
    app.use('/css', express_1.default.static(cssPath)); // folder name you need to get from index.html file like '/css'
    app.use('/js', express_1.default.static(jsPath)); // folder name you need to get from index.html file like '/js'
    app.use('/img', express_1.default.static(imgPath)); // folder name you need to get from index.html file like '/img'
    app.get('/*', function (req, res) {
        res.sendFile(indexPath);
    });
    app.listen(5000, () => {
        console.log('Running a server at http://localhost:5000');
    });
});
try {
    runServer();
}
catch (e) {
    console.error(`Error: ${e}`);
}
