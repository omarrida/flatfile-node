/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api-beta";
import * as core from "../../../../core";

export const UserAddedEvent: core.serialization.ObjectSchema<serializers.UserAddedEvent.Raw, Flatfile.UserAddedEvent> =
    core.serialization
        .object({})
        .extend(core.serialization.lazyObject(async () => (await import("../../..")).BaseEvent));

export declare namespace UserAddedEvent {
    interface Raw extends serializers.BaseEvent.Raw {}
}
