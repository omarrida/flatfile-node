/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

export interface RecordsResponseData extends Flatfile.SuccessData {
    records?: Flatfile.RecordsWithLinks;
    counts?: Flatfile.RecordCounts;
    versionId?: Flatfile.VersionId;
}
