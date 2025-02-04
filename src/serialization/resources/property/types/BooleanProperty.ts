/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const BooleanProperty: core.serialization.ObjectSchema<
    serializers.BooleanProperty.Raw,
    Flatfile.BooleanProperty
> = core.serialization
    .object({
        config: core.serialization.lazyObject(async () => (await import("../../..")).BooleanPropertyConfig).optional(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).BaseProperty));

export declare namespace BooleanProperty {
    interface Raw extends serializers.BaseProperty.Raw {
        config?: serializers.BooleanPropertyConfig.Raw | null;
    }
}
