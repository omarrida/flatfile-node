/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * @example
 *     {
 *         data: {
 *             topic: "workbook:updated",
 *             id: "us_evt_YOUR_ID",
 *             createdAt: new Date("2023-11-07T20:46:04.300Z"),
 *             payload: {
 *                 "recordsAdded": 100
 *             },
 *             domain: Flatfile.Domain.Workbook,
 *             context: {
 *                 accountId: "us_acc_YOUR_ID",
 *                 actorId: "us_key_SOME_KEY",
 *                 environmentId: "us_env_YOUR_ID",
 *                 spaceId: "us_sp_YOUR_ID",
 *                 workbookId: "us_wb_YOUR_ID"
 *             },
 *             callbackUrl: "",
 *             dataUrl: "",
 *             namespaces: ["workbook"],
 *             origin: {
 *                 id: "us_wb_YOUR_ID"
 *             }
 *         }
 *     }
 */
export interface EventResponse {
    data: Flatfile.Event;
}
