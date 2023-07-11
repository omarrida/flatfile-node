/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const JobExecutionPlan: core.serialization.ObjectSchema<
    serializers.JobExecutionPlan.Raw,
    Flatfile.JobExecutionPlan
> = core.serialization.object({
    fieldMapping: core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).Edge)),
    unmappedSourceFields: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).SourceField)
    ),
    unmappedDestinationFields: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).DestinationField)
    ),
});

export declare namespace JobExecutionPlan {
    interface Raw {
        fieldMapping: serializers.Edge.Raw[];
        unmappedSourceFields: serializers.SourceField.Raw[];
        unmappedDestinationFields: serializers.DestinationField.Raw[];
    }
}
