/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const ListJobsResponse: core.serialization.ObjectSchema<
    serializers.ListJobsResponse.Raw,
    Flatfile.ListJobsResponse
> = core.serialization.object({
    pagination: core.serialization.lazyObject(async () => (await import("../../..")).Pagination).optional(),
    data: core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).Job)),
});

export declare namespace ListJobsResponse {
    interface Raw {
        pagination?: serializers.Pagination.Raw | null;
        data: serializers.Job.Raw[];
    }
}
