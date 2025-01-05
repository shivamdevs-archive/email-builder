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
exports.json = exports.html = void 0;
const highlight_js_1 = __importDefault(require("highlight.js"));
const json_1 = __importDefault(require("highlight.js/lib/languages/json"));
const xml_1 = __importDefault(require("highlight.js/lib/languages/xml"));
const babel_1 = __importDefault(require("prettier/plugins/babel"));
const estree_1 = __importDefault(require("prettier/plugins/estree"));
const html_1 = __importDefault(require("prettier/plugins/html"));
const standalone_1 = require("prettier/standalone");
highlight_js_1.default.registerLanguage('json', json_1.default);
highlight_js_1.default.registerLanguage('html', xml_1.default);
function html(value) {
    return __awaiter(this, void 0, void 0, function* () {
        const prettyValue = yield (0, standalone_1.format)(value, {
            parser: 'html',
            plugins: [html_1.default],
        });
        return highlight_js_1.default.highlight(prettyValue, { language: 'html' }).value;
    });
}
exports.html = html;
function json(value) {
    return __awaiter(this, void 0, void 0, function* () {
        const prettyValue = yield (0, standalone_1.format)(value, {
            parser: 'json',
            printWidth: 0,
            trailingComma: 'all',
            plugins: [babel_1.default, estree_1.default],
        });
        return highlight_js_1.default.highlight(prettyValue, { language: 'javascript' }).value;
    });
}
exports.json = json;
//# sourceMappingURL=highlighters.js.map