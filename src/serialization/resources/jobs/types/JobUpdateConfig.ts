/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const JobUpdateConfig: core.serialization.Schema<serializers.JobUpdateConfig.Raw, Flatfile.JobUpdateConfig> =
    core.serialization.undiscriminatedUnion([
        core.serialization.lazyObject(async () => (await import("../../..")).DeleteRecordsJobConfig),
        core.serialization.lazyObject(async () => (await import("../../..")).FileJobConfig),
        core.serialization.lazyObject(async () => (await import("../../..")).PipelineJobConfig),
        core.serialization.lazyObject(async () => (await import("../../..")).ExportJobConfig),
        core.serialization.lazyObject(async () => (await import("../../..")).MutateJobConfig),
        core.serialization.lazyObject(async () => (await import("../../..")).FindAndReplaceJobConfig),
        core.serialization.lazyObject(async () => (await import("../../..")).EmptyObject),
    ]);

export declare namespace JobUpdateConfig {
    type Raw =
        | serializers.DeleteRecordsJobConfig.Raw
        | serializers.FileJobConfig.Raw
        | serializers.PipelineJobConfig.Raw
        | serializers.ExportJobConfig.Raw
        | serializers.MutateJobConfig.Raw
        | serializers.FindAndReplaceJobConfig.Raw
        | serializers.EmptyObject.Raw;
}
