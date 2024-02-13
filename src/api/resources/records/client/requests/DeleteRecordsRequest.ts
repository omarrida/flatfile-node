/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../..";

/**
 * @example
 *     {
 *         ids: "us_rc_YOUR_ID"
 *     }
 */
export interface DeleteRecordsRequest {
    /**
     * A list of record IDs to delete. Maximum of 100 allowed.
     */
    ids: Flatfile.RecordId | Flatfile.RecordId[];
}
