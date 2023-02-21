/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api-beta";
import * as core from "../../../../core";

export const JobType: core.serialization.Schema<serializers.JobType.Raw, Flatfile.JobType> = core.serialization.enum_([
    "file",
    "workbook",
]);

export declare namespace JobType {
    type Raw = "file" | "workbook";
}
