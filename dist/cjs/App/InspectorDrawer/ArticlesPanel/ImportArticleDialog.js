"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
function ImportArticleDialog({ onClose, articles, }) {
    return (react_1.default.createElement(material_1.Dialog, { open: true, onClose: () => onClose() },
        react_1.default.createElement(material_1.DialogTitle, null, "Select Article"),
        react_1.default.createElement(material_1.DialogContent, null,
            react_1.default.createElement(material_1.Box, { display: "grid", gap: 2, gridTemplateColumns: "repeat(2, minmax(40%, 1fr))", padding: 2 }, articles.map((article, index) => (react_1.default.createElement(material_1.Card, { key: index, onClick: () => onClose(article), sx: {
                    "cursor": "pointer",
                    "padding": 2,
                    "border": 1,
                    "borderColor": "divider",
                    "borderRadius": 3,
                    "display": "flex",
                    "flexDirection": "column",
                    "gap": 1,
                    "transition": "transform 0.2s",
                    "&:hover": {
                        transform: "scale(1.05)",
                    },
                } },
                react_1.default.createElement(material_1.CardContent, { sx: { p: 0 } },
                    react_1.default.createElement(material_1.Box, { display: "flex", justifyContent: "space-between" },
                        react_1.default.createElement(material_1.Box, null,
                            react_1.default.createElement(material_1.Typography, { variant: "body2", fontWeight: 600 }, article.author),
                            react_1.default.createElement(material_1.Typography, { variant: "body2", color: "hsla(34, 100%, 50%, 1)", fontWeight: 600 }, article.category)),
                        react_1.default.createElement(material_1.Typography, { variant: "caption", color: "text.secondary", fontSize: 10 }, new Date(article.published_at).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "2-digit",
                        }))),
                    react_1.default.createElement(material_1.Typography, { variant: "h6", fontSize: 14, noWrap: true }, article.title),
                    react_1.default.createElement(material_1.Typography, { variant: "body2", color: "text.secondary", sx: {
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 2,
                            overflow: "hidden",
                        } }, article.content)),
                react_1.default.createElement(material_1.CardMedia, { component: "img", sx: {
                        width: "100%",
                        aspectRatio: "16/9",
                        borderRadius: 1,
                    }, image: article.poster_url, alt: article.title }))))))));
}
exports.default = ImportArticleDialog;
//# sourceMappingURL=ImportArticleDialog.js.map