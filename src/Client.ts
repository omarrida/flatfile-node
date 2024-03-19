/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Agents } from "./api/resources/agents/client/Client";
import { Apps } from "./api/resources/apps/client/Client";
import { Auth } from "./api/resources/auth/client/Client";
import { Cells } from "./api/resources/cells/client/Client";
import { Commits } from "./api/resources/commits/client/Client";
import { DataRetentionPolicies } from "./api/resources/dataRetentionPolicies/client/Client";
import { Documents } from "./api/resources/documents/client/Client";
import { Entitlements } from "./api/resources/entitlements/client/Client";
import { Environments } from "./api/resources/environments/client/Client";
import { Events } from "./api/resources/events/client/Client";
import { Files } from "./api/resources/files/client/Client";
import { Foreigndb } from "./api/resources/foreigndb/client/Client";
import { Guests } from "./api/resources/guests/client/Client";
import { Jobs } from "./api/resources/jobs/client/Client";
import { Mapping } from "./api/resources/mapping/client/Client";
import { Records } from "./api/resources/records/client/Client";
import { Roles } from "./api/resources/roles/client/Client";
import { Secrets } from "./api/resources/secrets/client/Client";
import { Sheets } from "./api/resources/sheets/client/Client";
import { Snapshots } from "./api/resources/snapshots/client/Client";
import { Spaces } from "./api/resources/spaces/client/Client";
import { Users } from "./api/resources/users/client/Client";
import { Versions } from "./api/resources/versions/client/Client";
import { Workbooks } from "./api/resources/workbooks/client/Client";

export declare namespace FlatfileClient {
    interface Options {
        environment?: core.Supplier<environments.FlatfileEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class FlatfileClient {
    constructor(protected readonly _options: FlatfileClient.Options = {}) {}

    protected _agents: Agents | undefined;

    public get agents(): Agents {
        return (this._agents ??= new Agents(this._options));
    }

    protected _apps: Apps | undefined;

    public get apps(): Apps {
        return (this._apps ??= new Apps(this._options));
    }

    protected _auth: Auth | undefined;

    public get auth(): Auth {
        return (this._auth ??= new Auth(this._options));
    }

    protected _cells: Cells | undefined;

    public get cells(): Cells {
        return (this._cells ??= new Cells(this._options));
    }

    protected _commits: Commits | undefined;

    public get commits(): Commits {
        return (this._commits ??= new Commits(this._options));
    }

    protected _dataRetentionPolicies: DataRetentionPolicies | undefined;

    public get dataRetentionPolicies(): DataRetentionPolicies {
        return (this._dataRetentionPolicies ??= new DataRetentionPolicies(this._options));
    }

    protected _documents: Documents | undefined;

    public get documents(): Documents {
        return (this._documents ??= new Documents(this._options));
    }

    protected _entitlements: Entitlements | undefined;

    public get entitlements(): Entitlements {
        return (this._entitlements ??= new Entitlements(this._options));
    }

    protected _environments: Environments | undefined;

    public get environments(): Environments {
        return (this._environments ??= new Environments(this._options));
    }

    protected _events: Events | undefined;

    public get events(): Events {
        return (this._events ??= new Events(this._options));
    }

    protected _files: Files | undefined;

    public get files(): Files {
        return (this._files ??= new Files(this._options));
    }

    protected _foreigndb: Foreigndb | undefined;

    public get foreigndb(): Foreigndb {
        return (this._foreigndb ??= new Foreigndb(this._options));
    }

    protected _guests: Guests | undefined;

    public get guests(): Guests {
        return (this._guests ??= new Guests(this._options));
    }

    protected _jobs: Jobs | undefined;

    public get jobs(): Jobs {
        return (this._jobs ??= new Jobs(this._options));
    }

    protected _mapping: Mapping | undefined;

    public get mapping(): Mapping {
        return (this._mapping ??= new Mapping(this._options));
    }

    protected _records: Records | undefined;

    public get records(): Records {
        return (this._records ??= new Records(this._options));
    }

    protected _roles: Roles | undefined;

    public get roles(): Roles {
        return (this._roles ??= new Roles(this._options));
    }

    protected _secrets: Secrets | undefined;

    public get secrets(): Secrets {
        return (this._secrets ??= new Secrets(this._options));
    }

    protected _sheets: Sheets | undefined;

    public get sheets(): Sheets {
        return (this._sheets ??= new Sheets(this._options));
    }

    protected _snapshots: Snapshots | undefined;

    public get snapshots(): Snapshots {
        return (this._snapshots ??= new Snapshots(this._options));
    }

    protected _spaces: Spaces | undefined;

    public get spaces(): Spaces {
        return (this._spaces ??= new Spaces(this._options));
    }

    protected _users: Users | undefined;

    public get users(): Users {
        return (this._users ??= new Users(this._options));
    }

    protected _versions: Versions | undefined;

    public get versions(): Versions {
        return (this._versions ??= new Versions(this._options));
    }

    protected _workbooks: Workbooks | undefined;

    public get workbooks(): Workbooks {
        return (this._workbooks ??= new Workbooks(this._options));
    }
}
