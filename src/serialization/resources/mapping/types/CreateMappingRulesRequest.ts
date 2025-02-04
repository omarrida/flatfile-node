/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const CreateMappingRulesRequest: core.serialization.Schema<
    serializers.CreateMappingRulesRequest.Raw,
    Flatfile.CreateMappingRulesRequest
> = core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).MappingRuleConfig));

export declare namespace CreateMappingRulesRequest {
    type Raw = serializers.MappingRuleConfig.Raw[];
}
