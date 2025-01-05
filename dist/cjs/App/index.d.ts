import React from "react";
export type EditorProps = {
    articles?: any[];
    template?: any;
    onChange?: ({ html, design }: {
        html: string;
        design: any;
    }) => void;
};
export default function Editor({ articles, template, onChange }: EditorProps): React.JSX.Element;
//# sourceMappingURL=index.d.ts.map