"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const block_container_1 = require("@usewaypoint/block-container");
const ContainerPropsSchema = zod_1.z.object({
    style: block_container_1.ContainerPropsSchema.shape.style,
    props: zod_1.z
        .object({
        childrenIds: zod_1.z.array(zod_1.z.string()).optional().nullable(),
    })
        .optional()
        .nullable(),
});
exports.default = ContainerPropsSchema;
//# sourceMappingURL=ContainerPropsSchema.js.map