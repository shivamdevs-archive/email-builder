"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const articles_json_1 = __importDefault(require("../articles.json"));
const material_1 = require("@mui/material");
const App_1 = __importDefault(require("./App"));
const theme_1 = __importDefault(require("./theme"));
function Editor({}) {
    return (react_1.default.createElement(material_1.ThemeProvider, { theme: theme_1.default },
        react_1.default.createElement(material_1.CssBaseline, null),
        react_1.default.createElement(App_1.default, { articles: articles_json_1.default, onChange: (design) => {
                console.log(design);
            } })));
}
exports.default = Editor;
//# sourceMappingURL=index.js.map