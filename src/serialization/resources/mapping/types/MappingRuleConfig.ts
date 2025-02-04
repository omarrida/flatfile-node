/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const MappingRuleConfig: core.serialization.ObjectSchema<
    serializers.MappingRuleConfig.Raw,
    Flatfile.MappingRuleConfig
> = core.serialization.object({
    name: core.serialization.string(),
    type: core.serialization.string(),
    config: core.serialization.any().optional(),
    acceptedAt: core.serialization.date().optional(),
    acceptedBy: core.serialization.lazy(async () => (await import("../../..")).UserId).optional(),
});

export declare namespace MappingRuleConfig {
    interface Raw {
        name: string;
        type: string;
        config?: any | null;
        acceptedAt?: string | null;
        acceptedBy?: serializers.UserId.Raw | null;
    }
}
