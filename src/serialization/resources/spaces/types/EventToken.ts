/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api-beta";
import * as core from "../../../../core";

export const EventToken: core.serialization.ObjectSchema<
    serializers.spaces.EventToken.Raw,
    Flatfile.spaces.EventToken
> = core.serialization.object({
    accountId: core.serialization.lazy(async () => (await import("../../..")).AccountId).optional(),
    subscribeKey: core.serialization.string().optional(),
    ttl: core.serialization.number().optional(),
    token: core.serialization.string().optional(),
});

export declare namespace EventToken {
    interface Raw {
        accountId?: serializers.AccountId.Raw | null;
        subscribeKey?: string | null;
        ttl?: number | null;
        token?: string | null;
    }
}
