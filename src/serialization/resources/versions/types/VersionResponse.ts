/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const VersionResponse: core.serialization.ObjectSchema<
    serializers.VersionResponse.Raw,
    Flatfile.VersionResponse
> = core.serialization.object({
    data: core.serialization.lazyObject(async () => (await import("../../..")).Version),
});

export declare namespace VersionResponse {
    interface Raw {
        data: serializers.Version.Raw;
    }
}
