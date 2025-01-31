/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const Request: core.serialization.Schema<serializers.guests.create.Request.Raw, Flatfile.GuestConfig[]> =
    core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).GuestConfig));

export declare namespace Request {
    type Raw = serializers.GuestConfig.Raw[];
}
