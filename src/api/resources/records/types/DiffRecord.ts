/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * @example
 *     {
 *         id: "us_rc_YOUR_ID",
 *         values: {
 *             "firstName": {},
 *             "lastName": {},
 *             "email": {}
 *         }
 *     }
 */
export interface DiffRecord extends Flatfile.RecordBase {
    values: Flatfile.DiffData;
}
