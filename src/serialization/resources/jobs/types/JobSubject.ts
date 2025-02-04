/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const JobSubject: core.serialization.Schema<serializers.JobSubject.Raw, Flatfile.JobSubject> = core.serialization
    .union("type", {
        resource: core.serialization.lazyObject(async () => (await import("../../..")).ResourceJobSubject),
        collection: core.serialization.lazyObject(async () => (await import("../../..")).CollectionJobSubject),
    })
    .transform<Flatfile.JobSubject>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace JobSubject {
    type Raw = JobSubject.Resource | JobSubject.Collection;

    interface Resource extends serializers.ResourceJobSubject.Raw {
        type: "resource";
    }

    interface Collection extends serializers.CollectionJobSubject.Raw {
        type: "collection";
    }
}
