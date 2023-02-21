/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api-beta";
import * as core from "../../../../core";

export const JobExecutionPlan: core.serialization.ObjectSchema<
    serializers.JobExecutionPlan.Raw,
    Flatfile.JobExecutionPlan
> = core.serialization.object({
    fieldMapping: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).Edge))
        .optional(),
    unmappedSourceFields: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).SourceField))
        .optional(),
    unmappedDestinationFields: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).DestinationField))
        .optional(),
    headerRowCount: core.serialization.number().optional(),
});

export declare namespace JobExecutionPlan {
    interface Raw {
        fieldMapping?: serializers.Edge.Raw[] | null;
        unmappedSourceFields?: serializers.SourceField.Raw[] | null;
        unmappedDestinationFields?: serializers.DestinationField.Raw[] | null;
        headerRowCount?: number | null;
    }
}
