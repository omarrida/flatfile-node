/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const Commit: core.serialization.ObjectSchema<serializers.Commit.Raw, Flatfile.Commit> =
    core.serialization.object({
        id: core.serialization.lazy(async () => (await import("../../..")).CommitId),
        sheetId: core.serialization.lazy(async () => (await import("../../..")).SheetId),
        createdBy: core.serialization.string(),
        completedBy: core.serialization.string().optional(),
        createdAt: core.serialization.date(),
        completedAt: core.serialization.date().optional(),
    });

export declare namespace Commit {
    interface Raw {
        id: serializers.CommitId.Raw;
        sheetId: serializers.SheetId.Raw;
        createdBy: string;
        completedBy?: string | null;
        createdAt: string;
        completedAt?: string | null;
    }
}
