/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const RecordWithLinks: core.serialization.ObjectSchema<
    serializers.RecordWithLinks.Raw,
    Flatfile.RecordWithLinks
> = core.serialization.object({
    id: core.serialization.lazy(async () => (await import("../../..")).RecordId),
    values: core.serialization.lazy(async () => (await import("../../..")).RecordDataWithLinks),
    valid: core.serialization.boolean().optional(),
    messages: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).ValidationMessage))
        .optional(),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.any()).optional(),
});

export declare namespace RecordWithLinks {
    interface Raw {
        id: serializers.RecordId.Raw;
        values: serializers.RecordDataWithLinks.Raw;
        valid?: boolean | null;
        messages?: serializers.ValidationMessage.Raw[] | null;
        metadata?: Record<string, any> | null;
    }
}
