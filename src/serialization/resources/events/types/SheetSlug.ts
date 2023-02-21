/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api-beta";
import * as core from "../../../../core";

export const SheetSlug: core.serialization.Schema<serializers.SheetSlug.Raw, Flatfile.SheetSlug> =
    core.serialization.string();

export declare namespace SheetSlug {
    type Raw = string;
}
