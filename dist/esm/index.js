import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import EmailEditor from "./App";
import theme from "./theme";
export default function Editor({ articles, onChange, template }) {
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(CssBaseline, null),
        React.createElement(EmailEditor, { articles: articles, onChange: onChange, template: template })));
}
export { EmailEditor };
//# sourceMappingURL=index.js.map