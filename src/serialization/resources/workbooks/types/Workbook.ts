/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const Workbook: core.serialization.ObjectSchema<serializers.Workbook.Raw, Flatfile.Workbook> =
    core.serialization.object({
        id: core.serialization.lazy(async () => (await import("../../..")).WorkbookId),
        name: core.serialization.string().optional(),
        spaceId: core.serialization.lazy(async () => (await import("../../..")).SpaceId),
        environmentId: core.serialization.lazy(async () => (await import("../../..")).EnvironmentId),
        sheets: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).Sheet))
            .optional(),
        labels: core.serialization.list(core.serialization.string()).optional(),
        actions: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).Action))
            .optional(),
        namespace: core.serialization.string().optional(),
        updatedAt: core.serialization.date(),
        createdAt: core.serialization.date(),
    });

export declare namespace Workbook {
    interface Raw {
        id: serializers.WorkbookId.Raw;
        name?: string | null;
        spaceId: serializers.SpaceId.Raw;
        environmentId: serializers.EnvironmentId.Raw;
        sheets?: serializers.Sheet.Raw[] | null;
        labels?: string[] | null;
        actions?: serializers.Action.Raw[] | null;
        namespace?: string | null;
        updatedAt: string;
        createdAt: string;
    }
}
