/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Flatfile from "../../..";
import URLSearchParams from "@ungap/url-search-params";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Agents {
    interface Options {
        environment?: environments.FlatfileEnvironment | string;
        token: core.Supplier<core.BearerToken>;
        fetcher?: core.FetchFunction;
    }
}

export class Agents {
    constructor(protected readonly options: Agents.Options) {}

    public async list(request: Flatfile.ListAgentsRequest): Promise<Flatfile.ListAgentsResponse> {
        const { environmentId } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("environmentId", environmentId);
        const _response = await (this.options.fetcher ?? core.fetcher)({
            url: urlJoin(this.options.environment ?? environments.FlatfileEnvironment.Production, "/agents"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.ListAgentsResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.FlatfileError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FlatfileError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FlatfileTimeoutError();
            case "unknown":
                throw new errors.FlatfileError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @throws {Flatfile.BadRequestError}
     */
    public async create(request: Flatfile.CreateAgentsRequest): Promise<Flatfile.AgentResponse> {
        const { environmentId, body: _body } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("environmentId", environmentId);
        const _response = await (this.options.fetcher ?? core.fetcher)({
            url: urlJoin(this.options.environment ?? environments.FlatfileEnvironment.Production, "/agents"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: await serializers.AgentConfig.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.AgentResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Flatfile.BadRequestError(
                        await serializers.BadRequestError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                        })
                    );
                default:
                    throw new errors.FlatfileError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FlatfileError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FlatfileTimeoutError();
            case "unknown":
                throw new errors.FlatfileError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @throws {Flatfile.BadRequestError}
     * @throws {Flatfile.NotFoundError}
     */
    public async get(agentId: Flatfile.AgentId, request: Flatfile.GetAgentRequest): Promise<Flatfile.AgentResponse> {
        const { environmentId } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("environmentId", environmentId);
        const _response = await (this.options.fetcher ?? core.fetcher)({
            url: urlJoin(
                this.options.environment ?? environments.FlatfileEnvironment.Production,
                `/agents/${await serializers.AgentId.jsonOrThrow(agentId)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.AgentResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Flatfile.BadRequestError(
                        await serializers.BadRequestError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                        })
                    );
                case 404:
                    throw new Flatfile.NotFoundError(
                        await serializers.NotFoundError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                        })
                    );
                default:
                    throw new errors.FlatfileError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FlatfileError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FlatfileTimeoutError();
            case "unknown":
                throw new errors.FlatfileError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @throws {Flatfile.BadRequestError}
     * @throws {Flatfile.NotFoundError}
     */
    public async getAgentLogs(
        agentId: Flatfile.AgentId,
        request: Flatfile.GetAgentLogsRequest
    ): Promise<Flatfile.GetAgentLogsResponse> {
        const { environmentId } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("environmentId", environmentId);
        const _response = await (this.options.fetcher ?? core.fetcher)({
            url: urlJoin(
                this.options.environment ?? environments.FlatfileEnvironment.Production,
                `/agents/${await serializers.AgentId.jsonOrThrow(agentId)}/logs`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.GetAgentLogsResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Flatfile.BadRequestError(
                        await serializers.BadRequestError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                        })
                    );
                case 404:
                    throw new Flatfile.NotFoundError(
                        await serializers.NotFoundError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                        })
                    );
                default:
                    throw new errors.FlatfileError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FlatfileError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FlatfileTimeoutError();
            case "unknown":
                throw new errors.FlatfileError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @throws {Flatfile.BadRequestError}
     * @throws {Flatfile.NotFoundError}
     */
    public async getEnvironmentAgentLogs(
        request: Flatfile.GetEnvironmentAgentLogsRequest
    ): Promise<Flatfile.GetAgentLogsResponse> {
        const { environmentId, pageSize, pageNumber } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("environmentId", environmentId);
        if (pageSize != null) {
            _queryParams.append("pageSize", pageSize.toString());
        }

        if (pageNumber != null) {
            _queryParams.append("pageNumber", pageNumber.toString());
        }

        const _response = await (this.options.fetcher ?? core.fetcher)({
            url: urlJoin(
                this.options.environment ?? environments.FlatfileEnvironment.Production,
                "/agents/agents/logs"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.GetAgentLogsResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Flatfile.BadRequestError(
                        await serializers.BadRequestError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                        })
                    );
                case 404:
                    throw new Flatfile.NotFoundError(
                        await serializers.NotFoundError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                        })
                    );
                default:
                    throw new errors.FlatfileError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FlatfileError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FlatfileTimeoutError();
            case "unknown":
                throw new errors.FlatfileError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Deletes a single agent
     * @throws {Flatfile.BadRequestError}
     * @throws {Flatfile.NotFoundError}
     */
    public async delete(agentId: Flatfile.AgentId, request: Flatfile.DeleteAgentRequest): Promise<Flatfile.Success> {
        const { environmentId, body: _body } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("environmentId", environmentId);
        const _response = await (this.options.fetcher ?? core.fetcher)({
            url: urlJoin(
                this.options.environment ?? environments.FlatfileEnvironment.Production,
                `/agents/${await serializers.AgentId.jsonOrThrow(agentId)}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: await serializers.AgentConfig.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.Success.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Flatfile.BadRequestError(
                        await serializers.BadRequestError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                        })
                    );
                case 404:
                    throw new Flatfile.NotFoundError(
                        await serializers.NotFoundError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                        })
                    );
                default:
                    throw new errors.FlatfileError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FlatfileError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FlatfileTimeoutError();
            case "unknown":
                throw new errors.FlatfileError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader() {
        const bearer = await core.Supplier.get(this.options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
