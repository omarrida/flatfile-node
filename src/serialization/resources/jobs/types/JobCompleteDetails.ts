/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const JobCompleteDetails: core.serialization.ObjectSchema<
    serializers.JobCompleteDetails.Raw,
    Flatfile.JobCompleteDetails
> = core.serialization.object({
    outcome: core.serialization.lazyObject(async () => (await import("../../..")).JobOutcome).optional(),
    info: core.serialization.string().optional(),
});

export declare namespace JobCompleteDetails {
    interface Raw {
        outcome?: serializers.JobOutcome.Raw | null;
        info?: string | null;
    }
}
