/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api-beta";
import * as core from "../../../../core";

export const EnumPropertyOption: core.serialization.ObjectSchema<
    serializers.EnumPropertyOption.Raw,
    Flatfile.EnumPropertyOption
> = core.serialization.object({
    label: core.serialization.string().optional(),
    color: core.serialization.string().optional(),
    icon: core.serialization.string().optional(),
    meta: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    value: core.serialization.unknown(),
});

export declare namespace EnumPropertyOption {
    interface Raw {
        label?: string | null;
        color?: string | null;
        icon?: string | null;
        meta?: Record<string, unknown> | null;
        value?: unknown;
    }
}
