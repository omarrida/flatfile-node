/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api-beta";
import * as core from "../../../../core";

export const NotFoundError: core.serialization.Schema<serializers.NotFoundError.Raw, Flatfile.Error[]> =
    core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).Error));

export declare namespace NotFoundError {
    type Raw = serializers.Error.Raw[];
}
