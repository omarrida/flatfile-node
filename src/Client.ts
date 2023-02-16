/**
 * This file was auto-generated by Fern from our API Definition.
 */

import urlJoin from "url-join";
import * as environments from "./environments";
import * as core from "./core";
import { Client as AgentsClient } from "./api/resources/agents/client/Client";
import { Client as DocumentsClient } from "./api/resources/documents/client/Client";
import { Client as EnvironmentsClient } from "./api/resources/environments/client/Client";
import { Client as EventsClient } from "./api/resources/events/client/Client";
import { Client as FilesClient } from "./api/resources/files/client/Client";
import { Client as GuestsClient } from "./api/resources/guests/client/Client";
import { Client as JobsClient } from "./api/resources/jobs/client/Client";
import { Client as SheetsClient } from "./api/resources/sheets/client/Client";
import { Client as SpacesClient } from "./api/resources/spaces/client/Client";
import { Client as UsersClient } from "./api/resources/users/client/Client";
import { Client as WorkbooksClient } from "./api/resources/workbooks/client/Client";

export declare namespace FlatfileClient {
    interface Options {
        environment?: environments.FlatfileEnvironment | string;
        clientId?: core.Supplier<string>;
        clientSecret?: core.Supplier<string>;
    }
}

export class FlatfileClient {
    private token: string | undefined;
    private options: { environment?: string; token: () => Promise<string | undefined> };

    constructor(options: FlatfileClient.Options) {
        this.options = {
            environment: options.environment,
            token: async () => {
                if (this.token == null && options.clientId != null && options.clientSecret != null) {
                    const response = await core.fetcher({
                        url: urlJoin(
                            this.options.environment ?? environments.FlatfileEnvironment.Production,
                            "/auth/access-token"
                        ),
                        method: "POST",
                        body: {
                            clientId: options.clientId,
                            clientSecret: options.clientSecret,
                        },
                    });
                    if (response.ok) {
                        this.token = (response.body as any)?.data?.accessToken;
                    }
                }
                return this.token;
            },
        };
    }

    private _agents: AgentsClient | undefined;

    public get agents(): AgentsClient {
        return (this._agents ??= new AgentsClient(this.options));
    }

    private _documents: DocumentsClient | undefined;

    public get documents(): DocumentsClient {
        return (this._documents ??= new DocumentsClient(this.options));
    }

    private _environments: EnvironmentsClient | undefined;

    public get environments(): EnvironmentsClient {
        return (this._environments ??= new EnvironmentsClient(this.options));
    }

    private _events: EventsClient | undefined;

    public get events(): EventsClient {
        return (this._events ??= new EventsClient(this.options));
    }

    private _files: FilesClient | undefined;

    public get files(): FilesClient {
        return (this._files ??= new FilesClient(this.options));
    }

    private _guests: GuestsClient | undefined;

    public get guests(): GuestsClient {
        return (this._guests ??= new GuestsClient(this.options));
    }

    private _jobs: JobsClient | undefined;

    public get jobs(): JobsClient {
        return (this._jobs ??= new JobsClient(this.options));
    }

    private _sheets: SheetsClient | undefined;

    public get sheets(): SheetsClient {
        return (this._sheets ??= new SheetsClient(this.options));
    }

    private _spaces: SpacesClient | undefined;

    public get spaces(): SpacesClient {
        return (this._spaces ??= new SpacesClient(this.options));
    }

    private _users: UsersClient | undefined;

    public get users(): UsersClient {
        return (this._users ??= new UsersClient(this.options));
    }

    private _workbooks: WorkbooksClient | undefined;

    public get workbooks(): WorkbooksClient {
        return (this._workbooks ??= new WorkbooksClient(this.options));
    }
}
