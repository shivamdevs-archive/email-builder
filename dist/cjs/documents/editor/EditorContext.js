"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSelectedScreenSize = exports.toggleInspectorDrawerOpen = exports.setDocument = exports.resetDocument = exports.setSidebarTab = exports.setSelectedBlockId = exports.useInspectorDrawerOpen = exports.useSelectedSidebarTab = exports.setSelectedMainTab = exports.useSelectedMainTab = exports.useSelectedScreenSize = exports.useSelectedBlockId = exports.useDocument = void 0;
const zustand_1 = require("zustand");
const editorStateStore = (0, zustand_1.create)(() => ({
    document: {
        root: {
            type: "EmailLayout",
            data: {
                backdropColor: "#F5F5F5",
                canvasColor: "#FFFFFF",
                textColor: "#262626",
                fontFamily: "MODERN_SANS",
                childrenIds: [],
            },
        },
    },
    selectedBlockId: null,
    selectedSidebarTab: "styles",
    selectedMainTab: "editor",
    selectedScreenSize: "desktop",
    inspectorDrawerOpen: true,
}));
function useDocument() {
    return editorStateStore((s) => s.document);
}
exports.useDocument = useDocument;
function useSelectedBlockId() {
    return editorStateStore((s) => s.selectedBlockId);
}
exports.useSelectedBlockId = useSelectedBlockId;
function useSelectedScreenSize() {
    return editorStateStore((s) => s.selectedScreenSize);
}
exports.useSelectedScreenSize = useSelectedScreenSize;
function useSelectedMainTab() {
    return editorStateStore((s) => s.selectedMainTab);
}
exports.useSelectedMainTab = useSelectedMainTab;
function setSelectedMainTab(selectedMainTab) {
    return editorStateStore.setState({ selectedMainTab });
}
exports.setSelectedMainTab = setSelectedMainTab;
function useSelectedSidebarTab() {
    return editorStateStore((s) => s.selectedSidebarTab);
}
exports.useSelectedSidebarTab = useSelectedSidebarTab;
function useInspectorDrawerOpen() {
    return editorStateStore((s) => s.inspectorDrawerOpen);
}
exports.useInspectorDrawerOpen = useInspectorDrawerOpen;
function setSelectedBlockId(selectedBlockId) {
    const selectedSidebarTab = selectedBlockId === "articles"
        ? "articles"
        : selectedBlockId === "styles"
            ? "styles"
            : "block-configuration";
    const options = {};
    if (selectedBlockId !== null) {
        options.inspectorDrawerOpen = true;
    }
    return editorStateStore.setState(Object.assign({ selectedBlockId,
        selectedSidebarTab }, options));
}
exports.setSelectedBlockId = setSelectedBlockId;
function setSidebarTab(selectedSidebarTab) {
    return editorStateStore.setState({ selectedSidebarTab });
}
exports.setSidebarTab = setSidebarTab;
function resetDocument(document) {
    return editorStateStore.setState({
        document,
        selectedSidebarTab: "styles",
        selectedBlockId: null,
    });
}
exports.resetDocument = resetDocument;
function setDocument(document) {
    const originalDocument = editorStateStore.getState().document;
    return editorStateStore.setState({
        document: Object.assign(Object.assign({}, originalDocument), document),
    });
}
exports.setDocument = setDocument;
function toggleInspectorDrawerOpen() {
    const inspectorDrawerOpen = !editorStateStore.getState().inspectorDrawerOpen;
    return editorStateStore.setState({ inspectorDrawerOpen });
}
exports.toggleInspectorDrawerOpen = toggleInspectorDrawerOpen;
function setSelectedScreenSize(selectedScreenSize) {
    return editorStateStore.setState({ selectedScreenSize });
}
exports.setSelectedScreenSize = setSelectedScreenSize;
//# sourceMappingURL=EditorContext.js.map