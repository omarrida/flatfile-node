/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const DestinationField: core.serialization.ObjectSchema<
    serializers.DestinationField.Raw,
    Flatfile.DestinationField
> = core.serialization.object({
    destinationField: core.serialization.lazy(async () => (await import("../../..")).Property),
    preview: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace DestinationField {
    interface Raw {
        destinationField: serializers.Property.Raw;
        preview?: string[] | null;
    }
}
