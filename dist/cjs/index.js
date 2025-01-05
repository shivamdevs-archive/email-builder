"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailEditor = void 0;
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const App_1 = __importDefault(require("./App"));
exports.EmailEditor = App_1.default;
const theme_1 = __importDefault(require("./theme"));
function Editor({ articles, onChange, template }) {
    return (react_1.default.createElement(material_1.ThemeProvider, { theme: theme_1.default },
        react_1.default.createElement(material_1.CssBaseline, null),
        react_1.default.createElement(App_1.default, { articles: articles, onChange: onChange, template: template })));
}
exports.default = Editor;
//# sourceMappingURL=index.js.map