/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../..";

/**
 * @example
 *     {
 *         spaceId: "us_sp_YOUR_ID",
 *         includeCounts: true
 *     }
 */
export interface ListWorkbooksRequest {
    /**
     * The associated Space ID of the Workbook.
     */
    spaceId?: Flatfile.SpaceId;
    /**
     * Include counts for the workbook
     */
    includeCounts?: boolean;
}
