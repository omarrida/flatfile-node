/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const PipelineJobConfig: core.serialization.ObjectSchema<
    serializers.PipelineJobConfig.Raw,
    Flatfile.PipelineJobConfig
> = core.serialization.object({
    sourceSheetId: core.serialization.lazy(async () => (await import("../../..")).SheetId),
    destinationSheetId: core.serialization.lazy(async () => (await import("../../..")).SheetId),
});

export declare namespace PipelineJobConfig {
    interface Raw {
        sourceSheetId: serializers.SheetId.Raw;
        destinationSheetId: serializers.SheetId.Raw;
    }
}
