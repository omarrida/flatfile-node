/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const GetDatabaseResponse: core.serialization.ObjectSchema<
    serializers.GetDatabaseResponse.Raw,
    Flatfile.GetDatabaseResponse
> = core.serialization.object({
    task: core.serialization.lazyObject(async () => (await import("../../..")).DatabaseTask),
});

export declare namespace GetDatabaseResponse {
    interface Raw {
        task: serializers.DatabaseTask.Raw;
    }
}
