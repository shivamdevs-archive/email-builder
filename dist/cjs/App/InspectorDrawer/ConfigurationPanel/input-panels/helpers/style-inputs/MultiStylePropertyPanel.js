"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SingleStylePropertyPanel_1 = __importDefault(require("./SingleStylePropertyPanel"));
function MultiStylePropertyPanel({ names, value, onChange }) {
    return (react_1.default.createElement(react_1.default.Fragment, null, names.map((name) => (react_1.default.createElement(SingleStylePropertyPanel_1.default, { key: name, name: name, value: value || {}, onChange: onChange })))));
}
exports.default = MultiStylePropertyPanel;
//# sourceMappingURL=MultiStylePropertyPanel.js.map