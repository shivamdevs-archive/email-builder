"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const EditorContext_1 = require("../../../documents/editor/EditorContext");
const material_1 = require("@mui/material");
const ImportArticleDialog_1 = __importDefault(require("./ImportArticleDialog"));
const icons_material_1 = require("@mui/icons-material");
function ArticlesPanel({ articles }) {
    const block = (0, EditorContext_1.useDocument)();
    const [open, setOpen] = (0, react_1.useState)(false);
    const [article, setArticle] = (0, react_1.useState)(null);
    if (!articles || articles.length === 0) {
        return react_1.default.createElement("p", null, "No articles found.");
    }
    function addArticle(atBottom = false) {
        if (!article) {
            return;
        }
        const newTemplate = buildArticleTemplate(block, article, atBottom);
        (0, EditorContext_1.setDocument)(newTemplate);
    }
    let dialog = null;
    if (open) {
        dialog = (react_1.default.createElement(ImportArticleDialog_1.default, { articles: articles, onClose: (article) => {
                setOpen(false);
                if (article) {
                    setArticle(article);
                }
                else {
                    setArticle(null);
                }
            } }));
    }
    return (react_1.default.createElement(material_1.Box, { p: 2 },
        react_1.default.createElement(material_1.Typography, { variant: "h6" }, "Articles"),
        react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.secondary" }, "Please select an article to edit."),
        react_1.default.createElement(material_1.Box, { my: 3, display: "flex", justifyContent: "center" },
            react_1.default.createElement(material_1.Button, { onClick: () => setOpen(true), variant: "contained", color: "primary" }, "Import Article")),
        !article ? (react_1.default.createElement(material_1.Typography, { variant: "body2", color: "text.secondary" },
            "After selecting an article, you can choose to insert its content into the editor manually or insert the complete article as a block.",
            react_1.default.createElement("br", null),
            "We will load the article in the editor at the start or end of the document depending on your selection.")) : (react_1.default.createElement(material_1.Box, null,
            react_1.default.createElement(material_1.Card, { sx: {
                    cursor: "pointer",
                    padding: 1,
                    border: 1,
                    borderColor: "divider",
                    borderRadius: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
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
                    }, image: article.poster_url, alt: article.title })),
            react_1.default.createElement(material_1.Divider, { sx: { my: 2 } }),
            react_1.default.createElement(material_1.Box, { my: 2 },
                react_1.default.createElement(material_1.Typography, { variant: "body2", color: "text.secondary", mb: 1 }, "Select where to insert the article content:"),
                react_1.default.createElement(material_1.Box, { display: "flex", gap: 1 },
                    react_1.default.createElement(material_1.Button, { variant: "outlined", fullWidth: true, color: "secondary", onClick: () => addArticle() }, "Insert at Start"),
                    react_1.default.createElement(material_1.Button, { variant: "outlined", color: "success", fullWidth: true, onClick: () => addArticle(true) }, "Insert at End"))),
            react_1.default.createElement(material_1.Divider, { sx: { my: 2 } }),
            react_1.default.createElement(material_1.Box, { my: 2, display: "flex", flexDirection: "column", gap: 2, sx: {
                    border: 1,
                    borderColor: "divider",
                    borderRadius: 1,
                    boxShadow: 1,
                    padding: 1,
                } },
                react_1.default.createElement(material_1.Typography, { variant: "body2", color: "text.secondary", mb: 1 }, "Or insert the article content manually:"),
                react_1.default.createElement(ArticlesPanelManualItem, { title: "TITLE", value: article.title }),
                react_1.default.createElement(ArticlesPanelManualItem, { title: "AUTHOR", value: article.author }),
                react_1.default.createElement(ArticlesPanelManualItem, { title: "SUMMARY", value: article.content }),
                react_1.default.createElement(ArticlesPanelManualItem, { title: "POSTER", value: article.poster_url }),
                react_1.default.createElement(ArticlesPanelManualItem, { title: "PUBLISHED ON", value: new Date(article.published_at).toLocaleString("en-GB", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                    }) }),
                react_1.default.createElement(ArticlesPanelManualItem, { title: "CATEGORY", value: article.category }),
                react_1.default.createElement(ArticlesPanelManualItem, { title: "LINK", value: article.source_url })))),
        dialog));
}
exports.default = ArticlesPanel;
const buildArticleTemplate = (template, article, atBottom = false) => {
    const tz = Date.now();
    const articleBlock = {
        [`block-${tz}`]: {
            type: "Container",
            data: {
                style: {
                    backgroundColor: "#FFFFFF",
                    borderRadius: 8,
                    padding: {
                        top: 8,
                        bottom: 8,
                        right: 8,
                        left: 8,
                    },
                },
                props: {
                    childrenIds: [
                        `block-${tz}_title`,
                        `block_${tz}_content`,
                        `block-${tz}_column`,
                        `block-${tz}_image`,
                        `block-${tz}_button`,
                    ],
                },
            },
        },
        [`block-${tz}_title`]: {
            type: "Heading",
            data: {
                props: {
                    text: article.title,
                    level: "h3",
                },
                style: {
                    padding: {
                        top: 4,
                        bottom: 4,
                        right: 4,
                        left: 4,
                    },
                },
            },
        },
        [`block_${tz}_content`]: {
            type: "Text",
            data: {
                style: {
                    fontSize: 14,
                    fontWeight: "normal",
                    padding: {
                        top: 4,
                        bottom: 4,
                        right: 4,
                        left: 4,
                    },
                },
                props: {
                    text: article.content,
                },
            },
        },
        [`block-${tz}_column`]: {
            type: "ColumnsContainer",
            data: {
                style: {
                    padding: {
                        top: 4,
                        bottom: 4,
                        right: 4,
                        left: 4,
                    },
                },
                props: {
                    columnsCount: 2,
                    columnsGap: 16,
                    columns: [
                        {
                            childrenIds: [`block-${tz}_author`],
                        },
                        {
                            childrenIds: [`block-${tz}_published`],
                        },
                        {
                            childrenIds: [],
                        },
                    ],
                },
            },
        },
        [`block-${tz}_author`]: {
            type: "Text",
            data: {
                style: {
                    color: "#737373",
                    fontSize: 12,
                    fontWeight: "normal",
                    padding: {
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                    },
                },
                props: {
                    text: `By ${article.author} in ${article.category}`,
                },
            },
        },
        [`block-${tz}_published`]: {
            type: "Text",
            data: {
                style: {
                    color: "#737373",
                    fontSize: 12,
                    fontWeight: "normal",
                    textAlign: "right",
                    padding: {
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                    },
                },
                props: {
                    text: `Published on ${new Date(article.published_at).toLocaleString("en-GB", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                    })}`,
                },
            },
        },
        [`block-${tz}_image`]: {
            type: "Image",
            data: {
                style: {
                    padding: {
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                    },
                },
                props: {
                    url: article.poster_url,
                    alt: article.title,
                    linkHref: article.source_url,
                    contentAlignment: "middle",
                },
            },
        },
        [`block-${tz}_button`]: {
            type: "Button",
            data: {
                style: {
                    fontWeight: "normal",
                    textAlign: "center",
                    padding: {
                        top: 8,
                        bottom: 8,
                        right: 8,
                        left: 8,
                    },
                },
                props: {
                    buttonStyle: "pill",
                    fullWidth: true,
                    size: "small",
                    text: "Read full Article",
                    url: article.source_url,
                },
            },
        },
    };
    template["root"].data.childrenIds = atBottom
        ? [...template["root"].data.childrenIds, `block-${tz}`]
        : [`block-${tz}`, ...template["root"].data.childrenIds];
    template = Object.assign(Object.assign({}, template), articleBlock);
    return template;
};
const ArticlesPanelManualItem = ({ title, value, }) => {
    const [copied, setCopied] = (0, react_1.useState)(false);
    return (react_1.default.createElement(material_1.Box, { display: "flex", alignItems: "center", gap: 1 },
        react_1.default.createElement(material_1.Box, { flexGrow: 1 },
            react_1.default.createElement(material_1.Typography, { variant: "body2", color: "gray", fontWeight: 600, fontSize: 10, sx: { userSelect: "none" } }, title),
            react_1.default.createElement(material_1.Typography, { variant: "body1", sx: { wordBreak: "break-word" } }, value)),
        react_1.default.createElement(material_1.Tooltip, { title: copied ? "Copied! ✓" : "Copy to clipboard" },
            react_1.default.createElement(material_1.IconButton, { onClick: () => {
                    navigator.clipboard.writeText(value);
                    setCopied(true);
                    setTimeout(() => {
                        setCopied(false);
                    }, 2000);
                }, sx: { padding: 0 } },
                react_1.default.createElement(icons_material_1.ContentCopy, { sx: {
                        width: 16,
                        height: 16,
                    } })))));
};
//# sourceMappingURL=index.js.map