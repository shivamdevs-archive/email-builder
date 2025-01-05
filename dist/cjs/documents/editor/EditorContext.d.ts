import { TEditorConfiguration } from "./core";
type TValue = {
    document: TEditorConfiguration;
    selectedBlockId: string | null;
    selectedSidebarTab: "block-configuration" | "styles" | "articles";
    selectedMainTab: "editor" | "preview" | "json" | "html";
    selectedScreenSize: "desktop" | "mobile";
    inspectorDrawerOpen: boolean;
};
export declare function useDocument(): TEditorConfiguration;
export declare function useSelectedBlockId(): string | null;
export declare function useSelectedScreenSize(): "desktop" | "mobile";
export declare function useSelectedMainTab(): "editor" | "preview" | "json" | "html";
export declare function setSelectedMainTab(selectedMainTab: TValue["selectedMainTab"]): void;
export declare function useSelectedSidebarTab(): "styles" | "block-configuration" | "articles";
export declare function useInspectorDrawerOpen(): boolean;
export declare function setSelectedBlockId(selectedBlockId: TValue["selectedBlockId"]): void;
export declare function setSidebarTab(selectedSidebarTab: TValue["selectedSidebarTab"]): void;
export declare function resetDocument(document: TValue["document"]): void;
export declare function setDocument(document: TValue["document"]): void;
export declare function toggleInspectorDrawerOpen(): void;
export declare function setSelectedScreenSize(selectedScreenSize: TValue["selectedScreenSize"]): void;
export {};
//# sourceMappingURL=EditorContext.d.ts.map