/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const Sheet: core.serialization.ObjectSchema<serializers.Sheet.Raw, Flatfile.Sheet> = core.serialization.object({
    id: core.serialization.lazy(async () => (await import("../../..")).SheetId),
    workbookId: core.serialization.lazy(async () => (await import("../../..")).WorkbookId),
    name: core.serialization.string(),
    config: core.serialization.lazyObject(async () => (await import("../../..")).SheetConfig),
    countRecords: core.serialization.lazyObject(async () => (await import("../../..")).RecordCounts).optional(),
    namespace: core.serialization.string().optional(),
});

export declare namespace Sheet {
    interface Raw {
        id: serializers.SheetId.Raw;
        workbookId: serializers.WorkbookId.Raw;
        name: string;
        config: serializers.SheetConfig.Raw;
        countRecords?: serializers.RecordCounts.Raw | null;
        namespace?: string | null;
    }
}
