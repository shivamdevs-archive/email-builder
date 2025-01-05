import React from "react";
import articles from "../articles.json";
import { CssBaseline, ThemeProvider } from "@mui/material";
import EmailEditor from "./App";
import theme from "./theme";
export default function Editor({}) {
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(CssBaseline, null),
        React.createElement(EmailEditor, { articles: articles, onChange: (design) => {
                console.log(design);
            } })));
}
//# sourceMappingURL=index.js.map