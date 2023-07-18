/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const GuestConfigUpdate: core.serialization.ObjectSchema<
    serializers.GuestConfigUpdate.Raw,
    Flatfile.GuestConfigUpdate
> = core.serialization.object({
    environmentId: core.serialization.lazy(async () => (await import("../../..")).EnvironmentId).optional(),
    email: core.serialization.string().optional(),
    name: core.serialization.string().optional(),
    spaces: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).GuestSpace))
        .optional(),
});

export declare namespace GuestConfigUpdate {
    interface Raw {
        environmentId?: serializers.EnvironmentId.Raw | null;
        email?: string | null;
        name?: string | null;
        spaces?: serializers.GuestSpace.Raw[] | null;
    }
}
