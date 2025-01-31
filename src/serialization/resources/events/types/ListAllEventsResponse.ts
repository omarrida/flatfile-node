/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const ListAllEventsResponse: core.serialization.ObjectSchema<
    serializers.ListAllEventsResponse.Raw,
    Flatfile.ListAllEventsResponse
> = core.serialization.object({
    data: core.serialization.list(core.serialization.lazy(async () => (await import("../../..")).Event)),
});

export declare namespace ListAllEventsResponse {
    interface Raw {
        data: serializers.Event.Raw[];
    }
}
