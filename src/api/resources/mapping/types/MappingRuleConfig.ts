/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * @example
 *     {
 *         name: "Assign mapping rule",
 *         type: Flatfile.MappingRuleType.Assign,
 *         config: {}
 *     }
 */
export interface MappingRuleConfig {
    /** Name of the mapping rule */
    name: string;
    type: Flatfile.MappingRuleType;
    config?: any;
}
