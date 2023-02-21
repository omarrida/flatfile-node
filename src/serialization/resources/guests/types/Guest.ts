/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api-beta";
import * as core from "../../../../core";

export const Guest: core.serialization.ObjectSchema<serializers.Guest.Raw, Flatfile.Guest> = core.serialization
    .object({
        id: core.serialization.lazy(async () => (await import("../../..")).GuestId),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).GuestConfig));

export declare namespace Guest {
    interface Raw extends serializers.GuestConfig.Raw {
        id: serializers.GuestId.Raw;
    }
}
