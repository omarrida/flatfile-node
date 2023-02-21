/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api-beta";
import * as core from "../../../../core";

export const SpaceRemovedEvent: core.serialization.ObjectSchema<
    serializers.SpaceRemovedEvent.Raw,
    Flatfile.SpaceRemovedEvent
> = core.serialization
    .object({})
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).BaseEvent));

export declare namespace SpaceRemovedEvent {
    interface Raw extends serializers.BaseEvent.Raw {}
}
