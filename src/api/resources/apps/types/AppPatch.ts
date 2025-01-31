/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Update an app
 *
 * @example
 *     {
 *         name: "Nightly Data Loads",
 *         namespace: "nightly-data",
 *         entity: "Sync",
 *         entityPlural: "Syncs",
 *         icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" class=\"bi bi-bar-chart-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z\"/>\n</svg>",
 *         metadata: {
 *             "foo": "bar"
 *         }
 *     }
 */
export interface AppPatch {
    name?: string;
    namespace?: string;
    entity?: string;
    entityPlural?: string;
    icon?: string;
    metadata?: any;
    activatedAt?: Date;
}
