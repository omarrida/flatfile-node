/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Flatfile } from "@flatfile/api-beta";

/**
 * The job/plan tuple that contains the full plan and the jobs status
 */
export interface JobPlan {
    job?: Flatfile.Job;
    plan?: Flatfile.JobExecutionPlan;
}
