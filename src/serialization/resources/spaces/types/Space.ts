/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const Space: core.serialization.ObjectSchema<serializers.spaces.Space.Raw, Flatfile.spaces.Space> =
    core.serialization
        .object({
            id: core.serialization.lazy(async () => (await import("../../..")).SpaceId),
            workbooksCount: core.serialization.number().optional(),
            filesCount: core.serialization.number().optional(),
            createdByUserId: core.serialization.lazy(async () => (await import("../../..")).UserId).optional(),
            createdByUserName: core.serialization.string().optional(),
            createdAt: core.serialization.date(),
            updatedAt: core.serialization.date(),
            archivedAt: core.serialization.date().optional(),
            guestLink: core.serialization.string().optional(),
            name: core.serialization.string(),
            displayOrder: core.serialization.number().optional(),
            accessToken: core.serialization.string().optional(),
            isCollaborative: core.serialization.boolean().optional(),
            size: core.serialization.lazyObject(async () => (await import("../../..")).spaces.SpaceSize).optional(),
            upgradedAt: core.serialization.date().optional(),
        })
        .extend(core.serialization.lazyObject(async () => (await import("../../..")).spaces.InternalSpaceConfigBase));

export declare namespace Space {
    interface Raw extends serializers.spaces.InternalSpaceConfigBase.Raw {
        id: serializers.SpaceId.Raw;
        workbooksCount?: number | null;
        filesCount?: number | null;
        createdByUserId?: serializers.UserId.Raw | null;
        createdByUserName?: string | null;
        createdAt: string;
        updatedAt: string;
        archivedAt?: string | null;
        guestLink?: string | null;
        name: string;
        displayOrder?: number | null;
        accessToken?: string | null;
        isCollaborative?: boolean | null;
        size?: serializers.spaces.SpaceSize.Raw | null;
        upgradedAt?: string | null;
    }
}
