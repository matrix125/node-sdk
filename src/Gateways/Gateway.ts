import { RequestOptions } from "https";
import * as url from "url";

import { IDictionary } from "../Builders";
import { request } from "./https-wrapper";
import { GatewayResponse } from "./GatewayResponse";

export abstract class Gateway {
  public headers: IDictionary<string>;
  public timeout: number;
  public serviceUrl: string;
  protected contentType: string;
  public maskedRequestData: string[];

  public constructor(contentType: string) {
    this.contentType = contentType;
    this.headers = {};
    this.headers["Content-Type"] = this.contentType;
  }

  public sendRequest(
    httpMethod: string,
    endpoint: string,
    data?: string,
    queryStringParams?: IDictionary<string>,
  ): Promise<GatewayResponse> {
    const uri = url.parse(this.serviceUrl);
    const queryString = this.buildQueryString(queryStringParams);
    const options: RequestOptions = {
      headers: this.headers,
      host: uri.host,
      method: httpMethod,
      path: uri.path + endpoint + queryString,
      port: uri.port ? parseInt(uri.port, 10) : 443,
      timeout: this.timeout || 100000,
    };

    if (data !== undefined && options && options.headers) {
      options.headers["Content-Length"] = data.length;
    }

    return request(data, options);
  }

  protected buildQueryString(queryStringParams?: IDictionary<string>) {
    if (queryStringParams === undefined) {
      return "";
    }
    const params: string[] = [];
    for (const param in queryStringParams) {
      if (queryStringParams.hasOwnProperty(param)) {
        params.push(
          `${encodeURIComponent(param)}=${encodeURIComponent(
            queryStringParams[param],
          )}`,
        );
      }
    }

    return `?${params.join("&")}`;
  }
}
