/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api-beta";
import * as core from "../../../../core";

export const RecordWithLinks: core.serialization.ObjectSchema<
    serializers.RecordWithLinks.Raw,
    Flatfile.RecordWithLinks
> = core.serialization.object({
    id: core.serialization.lazy(async () => (await import("../../..")).RecordId),
    workbookId: core.serialization.lazy(async () => (await import("../../..")).WorkbookId),
    sheetId: core.serialization.lazy(async () => (await import("../../..")).SheetId),
    values: core.serialization.lazy(async () => (await import("../../..")).RecordDataWithLinks),
});

export declare namespace RecordWithLinks {
    interface Raw {
        id: serializers.RecordId.Raw;
        workbookId: serializers.WorkbookId.Raw;
        sheetId: serializers.SheetId.Raw;
        values: serializers.RecordDataWithLinks.Raw;
    }
}
