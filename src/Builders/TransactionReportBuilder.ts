import {
  NotImplementedError,
  ReportType,
  SearchCriteriaBuilder,
  SortDirection,
  StoredPaymentMethodSortProperty,
  TransactionSortProperty,
} from "../";
import { ReportBuilder } from "./ReportBuilder";
import { IDictionary } from "./BaseBuilder";

export class TransactionReportBuilder<T> extends ReportBuilder<T> {
  public deviceId: string;
  public endDate: Date;
  public startDate: Date;
  public transactionId: string;
  public searchCriteria: IDictionary<string>;

  constructor(type: ReportType) {
    super(type);
    this.searchBuilder = new SearchCriteriaBuilder(this);
  }

  public setupValidations() {
    this.validations
      .of("reportType", ReportType.TransactionDetail)
      .check("transactionId")
      .isNotNull()
      .check("transactionId")
      .isNotEmpty()
      .check("deviceId")
      .isNull()
      .check("startDate")
      .isNull()
      .check("endDate")
      .isNull();

    this.validations
      .of("reportType", ReportType.Activity)
      .check("transactionId")
      .isNull();
  }

  public withDeviceId(deviceId?: string) {
    if (deviceId !== undefined) {
      this.deviceId = deviceId;
    }
    return this;
  }

  public withEndDate(endDate?: Date) {
    if (endDate !== undefined) {
      this.endDate = endDate;
    }
    return this;
  }

  public withStartDate(startDate?: Date) {
    if (startDate !== undefined) {
      this.startDate = startDate;
    }
    return this;
  }

  public withStoredPaymentMethodId(storedPaymentMethodId?: string) {
    if (storedPaymentMethodId !== undefined) {
      this.searchBuilder.storedPaymentMethodId = storedPaymentMethodId;
    }
    return this;
  }

  public withTransactionId(transactionId?: string) {
    if (transactionId !== undefined) {
      this.transactionId = transactionId;
    }
    return this;
  }

  public where(criteria: string, value: any) {
    if (criteria !== undefined && value !== undefined) {
      if (this.searchCriteria == undefined) {
        this.searchCriteria = {};
      }
      this.searchCriteria[criteria] = value;
      this.searchBuilder.andWith(
        criteria as keyof SearchCriteriaBuilder<T>,
        value,
      );
    }
    return this.searchBuilder;
  }

  public orderBy(
    sortProperty: StoredPaymentMethodSortProperty | TransactionSortProperty,
    sortDirection: SortDirection = SortDirection.Desc,
  ) {
    this.order = sortDirection;

    switch (this.reportType) {
      case ReportType.FindStoredPaymentMethodsPaged:
        this.storedPaymentMethodOrderBy = sortProperty;
        break;
      case ReportType.FindTransactions:
      case ReportType.FindTransactionsPaged:
      case ReportType.FindSettlementTransactionsPaged:
        this.transactionOrderBy = sortProperty;
        break;
      default:
        throw new NotImplementedError();
    }

    return this;
  }
}
