/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const SourceField: core.serialization.ObjectSchema<serializers.SourceField.Raw, Flatfile.SourceField> =
    core.serialization.object({
        sourceField: core.serialization.lazy(async () => (await import("../../..")).Property),
        preview: core.serialization.list(core.serialization.string()).optional(),
    });

export declare namespace SourceField {
    interface Raw {
        sourceField: serializers.Property.Raw;
        preview?: string[] | null;
    }
}
