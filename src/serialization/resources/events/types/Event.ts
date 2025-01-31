/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const Event: core.serialization.Schema<serializers.Event.Raw, Flatfile.Event> = core.serialization
    .union("topic", {
        "agent:created": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "agent:updated": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "agent:deleted": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "space:created": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "space:updated": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "space:deleted": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "space:archived": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "space:expired": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "space:guestAdded": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "space:guestRemoved": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "document:created": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "document:updated": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "document:deleted": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "workbook:created": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "workbook:updated": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "workbook:deleted": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "workbook:expired": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "sheet:created": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "sheet:updated": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "sheet:deleted": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "snapshot:created": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "records:created": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "records:updated": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "records:deleted": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "file:created": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "file:updated": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "file:deleted": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "file:expired": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "job:created": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "job:updated": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "job:deleted": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "job:failed": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "job:completed": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "job:ready": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "job:scheduled": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "job:outcome-acknowledged": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "job:parts-completed": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "program:created": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "program:updated": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "commit:created": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "commit:updated": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "commit:completed": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "secret:created": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "secret:updated": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "secret:deleted": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "layer:created": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
    })
    .transform<Flatfile.Event>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace Event {
    type Raw =
        | Event.AgentCreated
        | Event.AgentUpdated
        | Event.AgentDeleted
        | Event.SpaceCreated
        | Event.SpaceUpdated
        | Event.SpaceDeleted
        | Event.SpaceArchived
        | Event.SpaceExpired
        | Event.SpaceGuestAdded
        | Event.SpaceGuestRemoved
        | Event.DocumentCreated
        | Event.DocumentUpdated
        | Event.DocumentDeleted
        | Event.WorkbookCreated
        | Event.WorkbookUpdated
        | Event.WorkbookDeleted
        | Event.WorkbookExpired
        | Event.SheetCreated
        | Event.SheetUpdated
        | Event.SheetDeleted
        | Event.SnapshotCreated
        | Event.RecordsCreated
        | Event.RecordsUpdated
        | Event.RecordsDeleted
        | Event.FileCreated
        | Event.FileUpdated
        | Event.FileDeleted
        | Event.FileExpired
        | Event.JobCreated
        | Event.JobUpdated
        | Event.JobDeleted
        | Event.JobFailed
        | Event.JobCompleted
        | Event.JobReady
        | Event.JobScheduled
        | Event.JobOutcomeAcknowledged
        | Event.JobPartsCompleted
        | Event.ProgramCreated
        | Event.ProgramUpdated
        | Event.CommitCreated
        | Event.CommitUpdated
        | Event.CommitCompleted
        | Event.SecretCreated
        | Event.SecretUpdated
        | Event.SecretDeleted
        | Event.LayerCreated;

    interface AgentCreated extends serializers.GenericEvent.Raw {
        topic: "agent:created";
    }

    interface AgentUpdated extends serializers.GenericEvent.Raw {
        topic: "agent:updated";
    }

    interface AgentDeleted extends serializers.GenericEvent.Raw {
        topic: "agent:deleted";
    }

    interface SpaceCreated extends serializers.GenericEvent.Raw {
        topic: "space:created";
    }

    interface SpaceUpdated extends serializers.GenericEvent.Raw {
        topic: "space:updated";
    }

    interface SpaceDeleted extends serializers.GenericEvent.Raw {
        topic: "space:deleted";
    }

    interface SpaceArchived extends serializers.GenericEvent.Raw {
        topic: "space:archived";
    }

    interface SpaceExpired extends serializers.GenericEvent.Raw {
        topic: "space:expired";
    }

    interface SpaceGuestAdded extends serializers.GenericEvent.Raw {
        topic: "space:guestAdded";
    }

    interface SpaceGuestRemoved extends serializers.GenericEvent.Raw {
        topic: "space:guestRemoved";
    }

    interface DocumentCreated extends serializers.GenericEvent.Raw {
        topic: "document:created";
    }

    interface DocumentUpdated extends serializers.GenericEvent.Raw {
        topic: "document:updated";
    }

    interface DocumentDeleted extends serializers.GenericEvent.Raw {
        topic: "document:deleted";
    }

    interface WorkbookCreated extends serializers.GenericEvent.Raw {
        topic: "workbook:created";
    }

    interface WorkbookUpdated extends serializers.GenericEvent.Raw {
        topic: "workbook:updated";
    }

    interface WorkbookDeleted extends serializers.GenericEvent.Raw {
        topic: "workbook:deleted";
    }

    interface WorkbookExpired extends serializers.GenericEvent.Raw {
        topic: "workbook:expired";
    }

    interface SheetCreated extends serializers.GenericEvent.Raw {
        topic: "sheet:created";
    }

    interface SheetUpdated extends serializers.GenericEvent.Raw {
        topic: "sheet:updated";
    }

    interface SheetDeleted extends serializers.GenericEvent.Raw {
        topic: "sheet:deleted";
    }

    interface SnapshotCreated extends serializers.GenericEvent.Raw {
        topic: "snapshot:created";
    }

    interface RecordsCreated extends serializers.GenericEvent.Raw {
        topic: "records:created";
    }

    interface RecordsUpdated extends serializers.GenericEvent.Raw {
        topic: "records:updated";
    }

    interface RecordsDeleted extends serializers.GenericEvent.Raw {
        topic: "records:deleted";
    }

    interface FileCreated extends serializers.GenericEvent.Raw {
        topic: "file:created";
    }

    interface FileUpdated extends serializers.GenericEvent.Raw {
        topic: "file:updated";
    }

    interface FileDeleted extends serializers.GenericEvent.Raw {
        topic: "file:deleted";
    }

    interface FileExpired extends serializers.GenericEvent.Raw {
        topic: "file:expired";
    }

    interface JobCreated extends serializers.GenericEvent.Raw {
        topic: "job:created";
    }

    interface JobUpdated extends serializers.GenericEvent.Raw {
        topic: "job:updated";
    }

    interface JobDeleted extends serializers.GenericEvent.Raw {
        topic: "job:deleted";
    }

    interface JobFailed extends serializers.GenericEvent.Raw {
        topic: "job:failed";
    }

    interface JobCompleted extends serializers.GenericEvent.Raw {
        topic: "job:completed";
    }

    interface JobReady extends serializers.GenericEvent.Raw {
        topic: "job:ready";
    }

    interface JobScheduled extends serializers.GenericEvent.Raw {
        topic: "job:scheduled";
    }

    interface JobOutcomeAcknowledged extends serializers.GenericEvent.Raw {
        topic: "job:outcome-acknowledged";
    }

    interface JobPartsCompleted extends serializers.GenericEvent.Raw {
        topic: "job:parts-completed";
    }

    interface ProgramCreated extends serializers.GenericEvent.Raw {
        topic: "program:created";
    }

    interface ProgramUpdated extends serializers.GenericEvent.Raw {
        topic: "program:updated";
    }

    interface CommitCreated extends serializers.GenericEvent.Raw {
        topic: "commit:created";
    }

    interface CommitUpdated extends serializers.GenericEvent.Raw {
        topic: "commit:updated";
    }

    interface CommitCompleted extends serializers.GenericEvent.Raw {
        topic: "commit:completed";
    }

    interface SecretCreated extends serializers.GenericEvent.Raw {
        topic: "secret:created";
    }

    interface SecretUpdated extends serializers.GenericEvent.Raw {
        topic: "secret:updated";
    }

    interface SecretDeleted extends serializers.GenericEvent.Raw {
        topic: "secret:deleted";
    }

    interface LayerCreated extends serializers.GenericEvent.Raw {
        topic: "layer:created";
    }
}
