/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * Configurations for the guests
 */
export interface GuestConfig {
    environmentId: Flatfile.EnvironmentId;
    email: string;
    name: string;
    spaces: Flatfile.GuestSpace[];
}
