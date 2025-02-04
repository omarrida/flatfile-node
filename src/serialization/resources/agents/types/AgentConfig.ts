/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const AgentConfig: core.serialization.ObjectSchema<serializers.AgentConfig.Raw, Flatfile.AgentConfig> =
    core.serialization.object({
        topics: core.serialization
            .list(core.serialization.lazy(async () => (await import("../../..")).EventTopic))
            .optional(),
        compiler: core.serialization.lazy(async () => (await import("../../..")).Compiler).optional(),
        source: core.serialization.string().optional(),
        slug: core.serialization.string().optional(),
    });

export declare namespace AgentConfig {
    interface Raw {
        topics?: serializers.EventTopic.Raw[] | null;
        compiler?: serializers.Compiler.Raw | null;
        source?: string | null;
        slug?: string | null;
    }
}
