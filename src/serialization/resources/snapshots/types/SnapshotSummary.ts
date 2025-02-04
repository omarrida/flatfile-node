/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const SnapshotSummary: core.serialization.ObjectSchema<
    serializers.SnapshotSummary.Raw,
    Flatfile.SnapshotSummary
> = core.serialization.object({
    createdSince: core.serialization.lazyObject(async () => (await import("../../..")).SummarySection),
    updatedSince: core.serialization.lazyObject(async () => (await import("../../..")).SummarySection),
    deletedSince: core.serialization.lazyObject(async () => (await import("../../..")).SummarySection),
});

export declare namespace SnapshotSummary {
    interface Raw {
        createdSince: serializers.SummarySection.Raw;
        updatedSince: serializers.SummarySection.Raw;
        deletedSince: serializers.SummarySection.Raw;
    }
}
