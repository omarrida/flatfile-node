/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * @example
 *     {
 *         data: {
 *             id: "us_sh_YOUR_ID",
 *             workbookId: "us_wb_YOUR_ID",
 *             name: "Contacts",
 *             slug: "contacts",
 *             config: {
 *                 name: "Contacts",
 *                 slug: "contacts",
 *                 fields: [{
 *                         type: "string",
 *                         key: "firstName",
 *                         label: "First Name"
 *                     }, {
 *                         type: "string",
 *                         key: "lastName",
 *                         label: "Last Name"
 *                     }, {
 *                         type: "string",
 *                         key: "email",
 *                         label: "Email"
 *                     }],
 *                 mappingConfidenceThreshold: 0.5
 *             },
 *             countRecords: {
 *                 valid: 1000,
 *                 error: 0,
 *                 total: 1000
 *             },
 *             lockedBy: "Example0",
 *             updatedAt: new Date("2021-08-31T18:00:00.000Z"),
 *             createdAt: new Date("2021-08-31T18:00:00.000Z")
 *         }
 *     }
 */
export interface SheetResponse {
    data: Flatfile.Sheet;
}
