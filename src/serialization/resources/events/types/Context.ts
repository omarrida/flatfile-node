/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const Context: core.serialization.ObjectSchema<serializers.Context.Raw, Flatfile.Context> =
    core.serialization.object({
        namespaces: core.serialization.list(core.serialization.string()).optional(),
        slugs: core.serialization.lazyObject(async () => (await import("../../..")).EventContextSlugs).optional(),
        actionName: core.serialization.lazy(async () => (await import("../../..")).ActionName).optional(),
        accountId: core.serialization.lazy(async () => (await import("../../..")).AccountId),
        environmentId: core.serialization.lazy(async () => (await import("../../..")).EnvironmentId),
        spaceId: core.serialization.lazy(async () => (await import("../../..")).SpaceId).optional(),
        workbookId: core.serialization.lazy(async () => (await import("../../..")).WorkbookId).optional(),
        sheetId: core.serialization.lazy(async () => (await import("../../..")).SheetId).optional(),
        sheetSlug: core.serialization.lazy(async () => (await import("../../..")).SheetSlug).optional(),
        snapshotId: core.serialization.lazy(async () => (await import("../../..")).SnapshotId).optional(),
        versionId: core.serialization.lazy(async () => (await import("../../..")).VersionId).optional(),
        commitId: core.serialization.lazy(async () => (await import("../../..")).CommitId).optional(),
        jobId: core.serialization.lazy(async () => (await import("../../..")).JobId).optional(),
        programId: core.serialization.lazy(async () => (await import("../../..")).ProgramId).optional(),
        fileId: core.serialization.lazy(async () => (await import("../../..")).FileId).optional(),
        documentId: core.serialization.lazy(async () => (await import("../../..")).DocumentId).optional(),
        precedingEventId: core.serialization.lazy(async () => (await import("../../..")).EventId).optional(),
        actorId: core.serialization.string().optional(),
    });

export declare namespace Context {
    interface Raw {
        namespaces?: string[] | null;
        slugs?: serializers.EventContextSlugs.Raw | null;
        actionName?: serializers.ActionName.Raw | null;
        accountId: serializers.AccountId.Raw;
        environmentId: serializers.EnvironmentId.Raw;
        spaceId?: serializers.SpaceId.Raw | null;
        workbookId?: serializers.WorkbookId.Raw | null;
        sheetId?: serializers.SheetId.Raw | null;
        sheetSlug?: serializers.SheetSlug.Raw | null;
        snapshotId?: serializers.SnapshotId.Raw | null;
        versionId?: serializers.VersionId.Raw | null;
        commitId?: serializers.CommitId.Raw | null;
        jobId?: serializers.JobId.Raw | null;
        programId?: serializers.ProgramId.Raw | null;
        fileId?: serializers.FileId.Raw | null;
        documentId?: serializers.DocumentId.Raw | null;
        precedingEventId?: serializers.EventId.Raw | null;
        actorId?: string | null;
    }
}
