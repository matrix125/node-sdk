import { GatewayError, GpApiConnector, IDictionary } from "../../src";
import { Gateway } from "./Gateway";

export abstract class RestGateway extends Gateway {
  public static AUTHORIZATION_HEADER = "Authorization";

  public constructor() {
    super("application/json");
  }

  public async doTransaction(
    verb: string,
    endpoint: string,
    requestData?: string,
    queryStringParams?: IDictionary<string>,
  ): Promise<string> {
    const response = await this.sendRequest(
      verb,
      endpoint,
      requestData,
      queryStringParams,
    );

    const statusCodes = [200, 204, 201];

    if (statusCodes.indexOf(response.statusCode) === -1) {
      const parsed = JSON.parse(response.rawResponse);
      const error = parsed.error ? parsed.error : parsed;
      if (!error) {
        throw new GatewayError(`Status Code: ${response.statusCode}`);
      }

      if (this.isGpApi()) {
        throw new GatewayError(
          `Status Code: ${error.error_code} - ` +
            `${
              error.detailed_error_description ||
              error.detailed_error_code ||
              JSON.stringify(error)
            }`,
          error.detailed_error_code || null,
        );
      } else {
        const errMsgProperty = [
          "error_description",
          "error_detail",
          "message",
          "eos_reason",
        ];
        let errorMessage = "";
        for (const propertyName of errMsgProperty) {
          if (error[propertyName]) {
            errorMessage += error[propertyName] + " ";
          }
        }
        throw new GatewayError(
          `Status Code: ${response.statusCode} - ${
            errorMessage || JSON.stringify(error)
          }`,
        );
      }
    }

    return response.rawResponse;
  }

  private isGpApi() {
    return this instanceof GpApiConnector;
  }
}
