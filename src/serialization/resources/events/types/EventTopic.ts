/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const EventTopic: core.serialization.Schema<serializers.EventTopic.Raw, Flatfile.EventTopic> =
    core.serialization.enum_([
        "agent:created",
        "agent:updated",
        "agent:deleted",
        "space:created",
        "space:updated",
        "space:deleted",
        "document:created",
        "document:updated",
        "document:deleted",
        "workbook:created",
        "workbook:updated",
        "workbook:deleted",
        "sheet:created",
        "sheet:updated",
        "sheet:deleted",
        "records:created",
        "records:updated",
        "records:deleted",
        "file:created",
        "file:updated",
        "file:deleted",
        "job:created",
        "job:updated",
        "job:deleted",
        "job:completed",
        "job:ready",
        "job:scheduled",
        "job:outcome-acknowledged",
        "job:failed",
        "commit:created",
        "commit:updated",
        "layer:created",
    ]);

export declare namespace EventTopic {
    type Raw =
        | "agent:created"
        | "agent:updated"
        | "agent:deleted"
        | "space:created"
        | "space:updated"
        | "space:deleted"
        | "document:created"
        | "document:updated"
        | "document:deleted"
        | "workbook:created"
        | "workbook:updated"
        | "workbook:deleted"
        | "sheet:created"
        | "sheet:updated"
        | "sheet:deleted"
        | "records:created"
        | "records:updated"
        | "records:deleted"
        | "file:created"
        | "file:updated"
        | "file:deleted"
        | "job:created"
        | "job:updated"
        | "job:deleted"
        | "job:completed"
        | "job:ready"
        | "job:scheduled"
        | "job:outcome-acknowledged"
        | "job:failed"
        | "commit:created"
        | "commit:updated"
        | "layer:created";
}
