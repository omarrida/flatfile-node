/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api-beta";
import * as core from "../../../../core";

export const EnumDetails: core.serialization.ObjectSchema<serializers.EnumDetails.Raw, Flatfile.EnumDetails> =
    core.serialization.object({
        mapping: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).CategoryMapping))
            .optional(),
        unusedSourceValues: core.serialization.list(core.serialization.string()).optional(),
        unusedDestinationValues: core.serialization.list(core.serialization.string()).optional(),
    });

export declare namespace EnumDetails {
    interface Raw {
        mapping?: serializers.CategoryMapping.Raw[] | null;
        unusedSourceValues?: string[] | null;
        unusedDestinationValues?: string[] | null;
    }
}
