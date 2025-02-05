import { ParsedUrlQuery } from "querystring";
import {
  CreditCardData,
  GpApiConfig,
  GpApiRequest,
  IRequestBuilder,
  NotImplementedError,
  ReportBuilder,
  ReportType,
  StringUtils,
  TransactionSummary,
} from "../../../../src";

export class GpApiReportRequestBuilder implements IRequestBuilder {
  canProcess(builder: ReportBuilder<TransactionSummary>): boolean {
    return builder instanceof ReportBuilder;
  }

  buildRequest(
    builder: ReportBuilder<TransactionSummary>,
    config: GpApiConfig,
  ): GpApiRequest {
    let queryParams: ParsedUrlQuery = this.addBasicParams(builder);
    let payload: any;
    let endpoint: string;
    let verb: string;
    switch (builder.reportType) {
      case ReportType.TransactionDetail:
        endpoint = `${GpApiRequest.TRANSACTION_ENDPOINT}/${builder.transactionId}`;
        verb = "GET";
        break;
      case ReportType.FindStoredPaymentMethodsPaged:
        if (builder?.searchBuilder?.paymentMethod instanceof CreditCardData) {
          endpoint = `${GpApiRequest.PAYMENT_METHODS_ENDPOINT}/search`;
          verb = "POST";

          const paymentMethod = builder.searchBuilder?.paymentMethod;
          const card = {
            number: paymentMethod.number,
            expiry_month: paymentMethod.expMonth?.toString().padStart(2, "0"),
            expiry_year: paymentMethod.expYear
              ?.toString()
              .padStart(4, "0")
              .substring(2, 4),
          };

          payload = {
            account_name: config.accessTokenInfo.tokenizationAccountName,
            account_id: config.accessTokenInfo.tokenizationAccountID,
            reference: builder.searchBuilder?.referenceNumber,
            card: card || null,
          };
          break;
        }
        endpoint = GpApiRequest.PAYMENT_METHODS_ENDPOINT;
        verb = "GET";

        let from_time_last_updated = "";
        if (builder?.searchBuilder?.fromTimeLastUpdated) {
          from_time_last_updated = builder.searchBuilder.fromTimeLastUpdated;
        }

        let to_time_last_updated = "";
        if (builder?.searchBuilder?.toTimeLastUpdated) {
          to_time_last_updated = builder.searchBuilder.toTimeLastUpdated;
        }

        queryParams = {
          ...queryParams,
          order_by: builder.storedPaymentMethodOrderBy,
          order: builder.order,
          number_last4: builder?.searchBuilder?.cardNumberLastFour,
          reference: builder?.searchBuilder?.referenceNumber,
          status: builder?.searchBuilder?.storedPaymentMethodStatus,
          from_time_created: builder?.searchBuilder?.startDate
            ? builder.searchBuilder?.startDate
            : undefined,
          to_time_created: builder?.searchBuilder?.endDate
            ? builder.searchBuilder?.endDate
            : undefined,
          from_time_last_updated,
          to_time_last_updated,
          id: builder.searchBuilder?.storedPaymentMethodId || undefined,
        };
        break;
      case ReportType.StoredPaymentMethodDetail:
        endpoint =
          GpApiRequest.PAYMENT_METHODS_ENDPOINT +
          "/" +
          builder.searchBuilder.storedPaymentMethodId;
        verb = "GET";
        break;
      case ReportType.FindTransactionsPaged:
        endpoint = GpApiRequest.TRANSACTION_ENDPOINT;
        verb = "GET";
        queryParams = {
          ...queryParams,
          id: builder.transactionId,
          type: builder.searchBuilder.paymentType,
          channel: builder.searchBuilder.channel,
          amount: StringUtils.toNumeric(
            builder.searchBuilder.amount?.toString() || null,
          ),
          currency: builder.searchBuilder.currency,
          token_first6: builder.searchBuilder.tokenFirstSix,
          token_last4: builder.searchBuilder.tokenLastFour,
          account_name: builder.searchBuilder.accountName,
          country: builder.searchBuilder.country,
          batch_id: builder.searchBuilder.batchId,
          entry_mode: builder.searchBuilder.paymentEntryMode,
          name: builder.searchBuilder.name,
          payment_method: builder.searchBuilder.paymentMethodName,
        };

        Object.assign(queryParams, this.getTransactionParams(builder));

        break;
      case ReportType.FindSettlementTransactionsPaged:
        endpoint = GpApiRequest.SETTLEMENT_TRANSACTIONS_ENDPOINT;
        verb = "GET";
        queryParams["account_name"] = config.accessTokenInfo.dataAccountName;
        queryParams["account_id"] = config.accessTokenInfo.dataAccountID;
        queryParams["deposit_status"] = builder.searchBuilder.depositStatus;
        queryParams["arn"] = builder.searchBuilder.aquirerReferenceNumber;
        queryParams["deposit_id"] =
          builder.searchBuilder.depositId ||
          builder.searchBuilder.depositReference;
        queryParams["from_deposit_time_created"] = builder.searchBuilder
          .startDepositDate
          ? builder.searchBuilder.startDepositDate.toISOString().split("T")[0]
          : undefined;
        queryParams["to_deposit_time_created"] = builder.searchBuilder
          .endDepositDate
          ? builder.searchBuilder.endDepositDate.toISOString().split("T")[0]
          : undefined;
        queryParams["from_batch_time_created"] = builder.searchBuilder
          .startBatchDate
          ? builder.searchBuilder.startBatchDate.toISOString().split("T")[0]
          : undefined;
        queryParams["to_batch_time_created"] = builder.searchBuilder
          .endBatchDate
          ? builder.searchBuilder.endBatchDate.toISOString().split("T")[0]
          : undefined;
        queryParams["system.mid"] = builder.searchBuilder.merchantId;
        queryParams["system.hierarchy"] = builder.searchBuilder.systemHierarchy;
        queryParams = { ...queryParams, ...this.getTransactionParams(builder) };
        break;
      default:
        throw new NotImplementedError();
    }

    return new GpApiRequest(
      endpoint,
      verb,
      JSON.stringify(payload),
      queryParams,
    );
  }

  private getTransactionParams(builder: any): any {
    const queryParams: { [key: string]: any } = {};
    queryParams["order_by"] = builder.transactionOrderBy;
    queryParams["order"] = builder.order;
    queryParams["number_first6"] = builder.searchBuilder.cardNumberFirstSix;
    queryParams["number_last4"] = builder.searchBuilder.cardNumberLastFour;
    queryParams["brand"] = builder.searchBuilder.cardBrand;
    queryParams["brand_reference"] = builder.searchBuilder.brandReference;
    queryParams["authcode"] = builder.searchBuilder.authCode;
    queryParams["reference"] = builder.searchBuilder.referenceNumber;
    queryParams["status"] = builder.searchBuilder.transactionStatus;
    queryParams["from_time_created"] = builder.searchBuilder.startDate
      ? builder.searchBuilder.startDate.toISOString().split("T")[0]
      : null;
    queryParams["to_time_created"] = builder.searchBuilder.endDate
      ? builder.searchBuilder.endDate.toISOString().split("T")[0]
      : null;

    return queryParams;
  }

  public buildRequestFromJson(jsonRequest: string, config: GpApiConfig) {
    // TODO: Implement buildRequestFromJson() method.
    jsonRequest;
    config;
  }

  public addBasicParams(builder: ReportBuilder<TransactionSummary>) {
    return {
      page: builder.page,
      page_size: builder.pageSize,
    };
  }
}
