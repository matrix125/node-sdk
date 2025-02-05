export enum AccountType {
  Checking = "CHECKING",
  Savings = "SAVINGS",
  Credit = "Credit",
}

export enum AddressType {
  Billing,
  Shipping,
}

export enum AliasAction {
  Create = "CREATE",
  Add = "ADD",
  Delete = "DELETE",
}

export enum AlternativePaymentType {
  Paypal = "paypal",
  PayByBankApp = "paybybankapp",
}

export enum ApplicationCryptogramType {
  TC,
  ARQC,
}

export enum BankPaymentType {
  FASTERPAYMENTS = "FASTERPAYMENTS",
  SEPA = "SEPA",
}

export enum CardDataInputCapability {
  Unknown = "UNKNOWN",
  NoTerminalManual = "NO_TERMINAL_MANUAL",
  MagstripeReadOnly = "MAGSTRIPE_READ_ONLY",
  Ocr = "OCR",
  IccChipReadOnly = "ICC_CHIP_READ_ONLY",
  KeyedEntryOnly = "KEYED_ENTRY_ONLY",
  MagstripeContactlessOnly = "MAGSTRIPE_CONTACTLESS_ONLY",
  MagstripeKeyedEntryOnly = "MAGSTRIPE_KEYED_ENTRY_ONLY",
  MagstripeIccKeyedEntryOnly = "MAGSTRIPE_ICC_KEYED_ENTRY_ONLY",
  MagstripeIccOnly = "MAGSTRIPE_ICC_ONLY",
  IccKeyedEntryOnly = "ICC_KEYED_ENTRY_ONLY",
  IccChipConctactContactless = "ICC_CHIP_CONTACT_CONTACTLESS",
  IccContactlessOnly = "ICC_CONTACTLESS_ONLY",
  OtherCapabilityForMastercard = "OTHER_CAPABILITY_FOR_MASTERCARD",
  MagstripeSignatureForAmexOnly = "MAGSTRIPE_SIGNATURE_FOR_AMEX_ONLY",
}

export enum CardDataOutputCapability {
  None = "NONE",
  MagneticStripeWrite = "MAGNETIC_STRIPE_WRITE",
  Icc = "ICC",
  Other = "OTHER",
}

export enum CardHolderAuthenticationCapability {
  NoCapability = "NO_CAPABILITY",
  PinEntry = "PIN_ENTRY",
  SignatureAnalysis = "SIGNATURE_ANALYSIS",
  SignatureAnalysisInoperative = "SIGNATURE_ANALYSIS_INOPERATIVE",
  MposSoftwareBasedPinEntryCapability = "MPOS_SOFTWARE_BASED_PIN_ENTRY_CAPABILITY",
  Other = "OTHER",
  Unknown = "UNKNOWN",
}

export enum CardHolderAuthenticationEntity {
  NotAuthenticated = "NOT_AUTHENTICATED",
  IccOfflinePin = "ICC_OFFLINE_PIN",
  CardAcceptanceDevice = "CARD_ACCEPTANCE_DEVICE",
  AuthorizingAgentOnlinePin = "AUTHORIZING_AGENT_ONLINE_PIN",
  MerchantCardAcceptorSignature = "MERCHANT_CARD_ACCEPTOR_SIGNATURE",
  Other = "OTHER",
}

export enum CardType {
  VISA = "VISA",
  MASTERCARD = "MASTERCARD",
  DISCOVER = "DISCOVER",
  AMEX = "AMEX",
  JCB = "JCB",
  DINERS = "DINERS",
}

export enum CaptureMode {
  AUTO = "AUTO",
  LATER = "LATER",
  MULTIPLE = "MULTIPLE",
}

export enum Channel {
  CardNotPresent = "CNP",
  CardPresent = "CP",
}

export enum CheckType {
  Personal = "PERSONAL",
  Business = "BUSINESS",
  Payroll = "PAYROLL",
}

export enum CurrencyType {
  CURRENCY,
  POINTS,
  CASH_BENEFITS,
  FOODSTAMPS,
  VOUCHER,
}

export enum CustomerDocumentType {
  NATIONAL = "NATIONAL",
  CPF = "CPF",
  CPNJ = "CPNJ",
  CURP = "CURP",
  SSN = "SSN",
  DRIVER_LICENSE = "DRIVER_LICENSE",
  PASSPORT = "PASSPORT",
}

export enum CvnPresenceIndicator {
  Present = 1,
  Illegible = 2,
  NotOnCard = 3,
  NotRequested = 4,
}

export enum DataServiceCriteria {
  Amount = "amount",
  BankAccountNumber = "bankAccountNumber",
  CaseId = "caseId",
  CardNumberFirstSix = "cardNumberFirstSix",
  CardNumberLastFour = "cardNumberLastFour",
  CaseNumber = "caseNumber",
  Country = "country",
  Currency = "currency",
  DepositReference = "depositReference",
  EndDepositDate = "endDepositDate",
  EndStageDate = "endStageDate",
  Hierarchy = "hierarchy",
  LocalTransactionEndTime = "localTransactionEndTime",
  LocalTransactionStartTime = "localTransactionStartTime",
  MerchantId = "merchantId",
  OrderId = "orderId",
  StartDepositDate = "startDepositDate",
  StartStageDate = "startStageDate",
  SystemHierarchy = "systemHierarchy",
  Timezone = "timezone",
  StartBatchDate = "startBatchDate",
  EndBatchDate = "endBatchDate",
}

export enum DeviceType {
  /// <summary>
  /// Indicates PAX device.
  /// </summary>
  PAX_DEVICE,
  /// <summary>
  /// Indicates PAX D200 device.
  /// </summary>
  PAX_D200,
  /// <summary>
  /// INdicates PAX D210 device.
  /// </summary>
  PAX_D210,
  /// <summary>
  /// Indicates a Pax S300 device.
  /// </summary>
  PAX_S300,
  /// <summary>
  /// Indicates PAX PX5 device.
  /// </summary>
  PAX_PX5,
  /// <summary>
  /// Indicates PAX PX7 device.
  /// </summary>
  PAX_PX7,

  /// <summary>
  /// Indicates a HeeartSIP iSC250 device.
  /// </summary>
  HPA_ISC250,

  /// <summary>
  /// Indicates a HeartSIP Lane 3000 device
  /// </summary>
  HPA_LANE3000,
  /// <summary>
  /// Indicates a UPA device
  /// </summary>
  UPA_DEVICE,
  /// <summary>
  /// Indicates a genius terminal
  /// </summary>
  GENIUS,

  /// <summary>
  /// Indicates a Nucleus terminal
  /// </summary>
  NUCLEUS_SATURN_1000,
  /// <summary>
  /// Indicates a genius verifone P400
  /// </summary>
  GENIUS_VERIFONE_P400,
}

export enum DigitalWalletTokenFormat {
  CARD_NUMBER = "CARD_NUMBER",
  CARD_TOKEN = "CARD_TOKEN",
}

export enum EcommerceChannel {
  Ecom = "ECOM",
  Moto = "MOTO",
}

export enum EmailReceipt {
  Never = "Never",
  All = "All",
  Approvals = "Approvals",
  Declines = "Declines",
}

export enum EncyptedMobileType {
  ApplePay = "apple-pay",
  GooglePay = "pay-with-google",
  ClickToPay = "click-to-pay",
}

export enum EntryMethod {
  Swipe = "SWIPE",
  Proximity = "PROXIMITY",
  Manual = "MANUAL",
}

export enum Environment {
  Test = "TEST",
  Production = "PRODUCTION",
  Qa = "QA",
}

export enum EmvLastChipRead {
  SUCCESSFUL = "Successful",
  FAILED = "Failed",
  NOT_A_CHIP_TRANSACTION = "NotAChipTransaction",
  UNKNOWN = "Unknown",
}

export enum ExceptionCodes {
  // general codes
  AuthenticationError,
  InvalidConfiguration,

  // input codes
  InvalidAmount,
  MissingCurrency,
  InvalidCurrency,
  InvalidDate,
  MissingCheckName,
  InvalidPhoneNumber,
  InvalidZipCode,
  InvalidEmailAddress,
  InvalidInputLength,

  // gateway codes
  UnknownGatewayError,
  InvalidOriginalTransaction,
  NoOpenBatch,
  InvalidCpcData,
  InvalidCardData,
  InvalidNumber,
  GatewayTimeout,
  UnexpectedGatewayResponse,
  GatewayTimeoutReversalError,
  GatewayError,
  UnexpectedGatewayError,

  // credit issuer codes
  IncorrectNumber,
  ExpiredCard,
  InvalidPin,
  PinEntriesExceeded,
  InvalidExpiry,
  PinVerification,
  IssuerTimeout,
  IncorrectCvc,
  CardDeclined,
  ProcessingError,
  IssuerTimeoutReversalError,
  UnknownCreditError,
  PossibleFraudDetected,

  // gift codes
  UnknownGiftError,
  PartialApproval,
}

export enum FraudFilterMode {
  None = "NONE",
  Off = "OFF",
  Active = "ACTIVE",
  Passive = "PASSIVE",
}

export enum GatewayProvider {
  GpApi = "GP-API",
  GpEcom = "GP_ECOM",
  Portico = "PORTICO",
}

export enum GiftEntryMethod {
  Swipe,
  Alias,
  Manual,
}

export enum HppVersion {
  Version1 = "1",
  Version2 = "2",
}

export enum InquiryType {
  Standard = "STANDARD",
  Foodstamp = "FOODSTAMP",
  Cash = "CASH",
  Points = "POINTS",
}

export enum IntervalToExpire {
  WEEK = "WEEK",
  DAY = "DAY",
  TWELVE_HOURS = "12_HOURS",
  SIX_HOURS = "6_HOURS",
  THREE_HOURS = "3_HOURS",
  ONE_HOUR = "1_HOUR",
  THIRTY_MINUTES = "30_MINUTES",
  TEN_MINUTES = "10_MINUTES",
  FIVE_MINUTES = "5_MINUTES",
}

export enum LodgingItemType {
  RESTAURANT = "RESTAURANT",
  GIFT_SHOP = "GIFT_SHOP",
  MINI_BAR = "MINI_BAR",
  PHONE = "PHONE",
  LAUNDRY = "LAUNDRY",
  OTHER = "OTHER",
  NO_SHOW = "NO_SHOW",
}

export enum ManualEntryMethod {
  MOTO = 0,
  MAIL = 1,
  PHONE = 2,
  KEYED = 3,
}

export enum PayByLinkStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  CLOSED = "CLOSED",
  EXPIRED = "EXPIRED",
  PAID = "PAID",
}

export enum PaymentEntryMode {
  MOTO = "MOTO",
  ECOM = "ECOM",
  IN_APP = "IN_APP",
  CHIP = "CHIP",
  SWIPE = "SWIPE",
  MANUAL = "MANUAL",
  CONTACTLESS_CHIP = "CONTACTLESS_CHIP",
  CONTACTLESS_SWIPE = "CONTACTLESS_SWIPE",
  PHONE = "PHONE",
  MAIL = "MAIL",
}
export enum PaymentMethodName {
  APM = "APM",
  DIGITAL_WALLET = "DIGITAL WALLET",
  CARD = "CARD",
  /**
   * ACH transaction
   */
  BANK_TRANSFER = "BANK TRANSFER",

  /** Open Banking transaction */
  BANK_PAYMENT = "BANK PAYMENT",

  /** @var Buy Now Pay Later (BNPL) transaction */
  BNPL = "BNPL",
}

export enum PaymentMethodProgram {
  ASSURED_RESERVATION = "ASSURED_RESERVATION",
  CARD_DEPOSIT = "CARD_DEPOSIT",
  PURCHASE = "PURCHASE",
  OTHER = "OTHER",
}

export enum PaymentMethodType {
  Reference = 1 << 0,
  Credit = 1 << 1,
  Debit = 1 << 2,
  EBT = 1 << 3,
  Cash = 1 << 4,
  ACH = 1 << 5,
  Gift = 1 << 6,
  Recurring = 1 << 7,
  Other = 1 << 8,
  APM = 1 << 9,
  Ewic = 1 << 10,
  BankPayment = 1 << 11,
  BNPL = 1 << 12,
  Account_Funds = 1 << 13,
}

export enum PaymentMethodUsageMode {
  SINGLE = "SINGLE",
  MULTIPLE = "MULTIPLE",
}

export enum PaymentProvider {
  OPEN_BANKING = "OPEN_BANKING",
}

export enum PaymentSchedule {
  Dynamic,
  FirstDayOfTheMonth,
  LastDayOfTheMonth,
}

export enum PaymentType {
  REFUND = "REFUND",
  SALE = "SALE",
}

export enum PhoneNumberType {
  HOME = "HOME",
  WORK = "WORK",
  SHIPPING = "SHIPPING",
  MOBILE = "MOBILE",
}

export enum ReasonCode {
  Fraud = "FRAUD",
  FalsePositive = "FALSEPOSITIVE",
  OutOfStock = "OUTOFSTOCK",
  InStock = "INSTOCK",
  Other = "OTHER",
  NotGiven = "NOTGIVEN",
}

export enum RecurringSequence {
  First,
  Subsequent,
  Last,
}

export enum RecurringType {
  Fixed,
  Variable,
}

export enum ReportType {
  FindTransactions = 1 << 0,
  Activity = 1 << 1,
  BatchDetail = 1 << 2,
  BatchHistory = 1 << 3,
  BatchSummary = 1 << 4,
  OpenAuths = 1 << 5,
  Search = 1 << 6,
  TransactionDetail = 1 << 7,
  DepositDetail = 1 << 11,
  FindTransactionsPaged = 1 << 15,
  FindSettlementTransactionsPaged = 1 << 16,
  FindDepositsPaged = 1 << 17,
  FindStoredPaymentMethodsPaged = 1 << 20,
  StoredPaymentMethodDetail = 1 << 21,
}

export enum ScheduleFrequency {
  Weekly = "Weekly",
  BiWeekly = "Bi-Weekly",
  BiMonthly = "Bi-Monthly",
  SemiMonthly = "Semi-Monthly",
  Monthly = "Monthly",
  Quarterly = "Quarterly",
  SemiAnnually = "Semi-Annually",
  Annually = "Annually",
}

export enum SearchCriteria {
  AccountName = "accountName",
  AccountNumberLastFour = "accountNumberLastFour",
  AltPaymentStatus = "altPaymentStatus",
  AquirerReferenceNumber = "aquirerReferenceNumber",
  AuthCode = "authCode",
  BankRoutingNumber = "bankRoutingNumber",
  BatchId = "batchId",
  BatchSequenceNumber = "batchSequenceNumber",
  BrandReference = "brandReference",
  BuyerEmailAddress = "buyerEmailAddress",
  CardBrand = "cardBrand",
  CardHolderFirstName = "cardHolderFirstName",
  CardHolderLastName = "cardHolderLastName",
  CardHolderPoNumber = "cardHolderPoNumber",
  CardNumberFirstSix = "cardNumberFirstSix",
  CardNumberLastFour = "cardNumberLastFour",
  Channel = "channel",
  CheckFirstName = "checkFirstName",
  CheckLastName = "checkLastName",
  CheckName = "checkName",
  CheckNumber = "checkNumber",
  ClerkId = "clerkId",
  ClientTransactionId = "clientTransactionId",
  CustomerId = "customerId",
  DepositReference = "",
  DepositStatus = "depositStatus",
  DisplayName = "displayName",
  EndDate = "endDate",
  FullyCaptured = "fullyCaptured",
  GiftCurrency = "giftCurrency",
  GiftMaskedAlias = "giftMaskedAlias",
  InvoiceNumber = "invoiceNumber",
  IssuerResult = "issuerResult",
  IssuerTransactionId = "issuerTransactionId",
  OneTime = "oneTime",
  PaymentEntryMode = "paymentEntryMode",
  PaymentMethodKey = "paymentMethodKey",
  PaymentMethodType = "paymentMethodType",
  PaymentType = "paymentType",
  PaymentMethod = "paymentMethod",
  PaymentMethodName = "paymentMethodName",
  PaymentMethodUsageMode = "paymentMethodUsageMode",
  PaymentProvider = "paymentProvider",
  ReferenceNumber = "referenceNumber",
  SettlementAmount = "settlementAmount",
  ScheduleId = "scheduleId",
  SiteTrace = "siteTrace",
  StartDate = "startDate",
  TokenFirstSix = "tokenFirstSix",
  TokenLastFour = "tokenLastFour",
  TransactionStatus = "transactionStatus",
  DisputeStage = "disputeStage",
  DisputeStatus = "disputeStatus",
  DisputeDocumentId = "disputeDocumentId",
  UniqueDeviceId = "uniqueDeviceId",
  UserName = "username",
  Name = "name",
  DepositId = "depositId",
  FromTimeLastUpdated = "fromTimeLastUpdated",
  ToTimeLastUpdated = "toTimeLastUpdated",
  StoredPaymentMethodId = "storedPaymentMethodId",
  StoredPaymentMethodStatus = "storedPaymentMethodStatus",
  ActionType = "actionType",
  ActionId = "actionId",
  Resource = "resource",
  ResourceStatus = "resourceStatus",
  ResourceId = "resourceId",
  MerchantName = "merchantName",
  AppName = "appName",
  Version = "version",
  ResponseCode = "responseCode",
  HttpResponseCode = "httpResponseCode",
  ReturnPii = "returnPii",
  RiskAssessmentMode = "riskAssessmentMode",
  RiskAssessmentResult = "riskAssessmentResult",
  RiskAssessmentReasonCode = "riskAssessmentReasonCode",
  PayByLinkStatus = "payByLinkStatus",
  Description = "description",
  ExpirationDate = "expirationDate",
  AccountStatus = "accountStatus",
  Address = "address",
}

export enum SecCode {
  PPD = "PPD",
  CCD = "CCD",
  POP = "POP",
  WEB = "WEB",
  TEL = "TEL",
  EBronze = "EBronze",
}

export enum Secure3dVersion {
  NONE = "NONE",
  ONE = "ONE",
  TWO = "TWO",
  ANY = "ANY",
}

export enum SendFileType {
  Banner,
  Logo,
}

export enum ShaHashType {
  SHA1 = "SHA1",
  SHA256 = "SHA256",
  SHA512 = "SHA512",
}

export enum SortDirection {
  Asc = "ASC",
  Desc = "DESC",
}

export enum StoredCredentialInitiator {
  CardHolder = "C",
  Merchant = "M",
  Payer = "Payer",
}

export enum StoredCredentialReason {
  INCREMENTAL = "INCREMENTAL",
  RESUBMISSION = "RESUBMISSION",
  REAUTHORIZATION = "REAUTHORIZATION",
  DELAYED = "DELAYED",
  NO_SHOW = "NO_SHOW",
}

export enum StoredCredentialSequence {
  FIRST = "first",
  SUBSEQUENT = "subsequent",
  LAST = "last",
}

export enum StoredCredentialType {
  ONEOFF = "oneoff",
  INSTALLMENT = "installment",
  RECURRING = "recurring",
  UNSCHEDULED = "UNSCHEDULED",
  SUBSCRIPTION = "SUBSCRIPTION",
  MAINTAIN_PAYMENT_METHOD = "MAINTAIN_PAYMENT_METHOD",
  MAINTAIN_PAYMENT_VERIFICATION = "MAINTAIN_PAYMENT_VERIFICATION",
  ADD_PAYMENT_METHOD = "ADD_PAYMENT_METHOD",
  SPLIT_OR_DELAYED_SHIPMENT = "SPLIT_OR_DELAYED_SHIPMENT",
  TOP_UP = "TOP_UP",
  MAIL_ORDER = "MAIL_ORDER",
  TELEPHONE_ORDER = "TELEPHONE_ORDER",
  WHITELIST_STATUS_CHECK = "WHITELIST_STATUS_CHECK",
  OTHER_PAYMENT = "OTHER_PAYMENT",
  BILLING_AGREEMENT = "BILLING_AGREEMENT",
}

export enum StoredPaymentMethodSortProperty {
  TimeCreated = "TIME_CREATED",
}

export enum TaxType {
  NotUsed,
  SalesTax,
  TaxExempt,
}

export enum TimeZoneConversion {
  UTC,
  Merchant,
  Datacenter,
}
export enum TrackNumber {
  UNKNOWN,
  TRACK_ONE,
  TRACK_TWO,
  BOTH_ONE_AND_TWO,
}

export enum TransactionModifier {
  None = 1 << 0,
  Incremental = 1 << 1,
  Additional = 1 << 2,
  Offline = 1 << 3,
  LevelII = 1 << 4,
  FraudDecline = 1 << 5,
  ChipDecline = 1 << 6,
  CashBack = 1 << 7,
  Voucher = 1 << 8,
  Secure3D = 1 << 9,
  HostedRequest = 1 << 10,
  Recurring = 1 << 11,
  EncryptedMobile = 1 << 12,
  AlternativePaymentMethod = 1 << 13,
  DecryptedMobile = 1 << 14,
}

export enum TransactionSortProperty {
  TIME_CREATED = "TIME_CREATED",
  STATUS = "STATUS",
  TYPE = "TYPE",
  DEPOSIT_ID = "DEPOSIT_ID",
  ID = "ID",
}

export enum TransactionType {
  Decline = 1 << 0,
  Verify = 1 << 1,
  Capture = 1 << 2,
  Auth = 1 << 3,
  Refund = 1 << 4,
  Reversal = 1 << 5,
  Sale = 1 << 6,
  Edit = 1 << 7,
  Void = 1 << 8,
  AddValue = 1 << 9,
  Balance = 1 << 10,
  Activate = 1 << 11,
  EncryptedMobile = 1 << 11,
  Alias = 1 << 12,
  Replace = 1 << 13,
  Reward = 1 << 14,
  DecryptedMobile = 1 << 14,
  Deactivate = 1 << 15,
  BatchClose = 1 << 16,
  Create = 1 << 17,
  Delete = 1 << 18,
  BenefitWithDrawal = 1 << 32,
  Fetch = 1 << 19,
  Search = 1 << 20,
  Hold = 1 << 21,
  Release = 1 << 23,
  VerifySignature = 1 << 25,
  TokenDelete = 1 << 26,
  TokenUpdate = 1 << 31,
  Tokenize = 1 << 33,
  /// <summary>
  ///
  /// ProPay: Create Account
  /// </summary>
  CreateAccount = 1 << 40,

  /// <summary>
  /// ProPay: Edit Account
  /// </summary>
  EditAccount = 1 << 41,

  /// <summary>
  /// ProPay: Reset Account Password
  /// </summary>
  ResetPassword = 1 << 42,

  /// <summary>
  /// ProPay: Renew Account
  /// </summary>
  RenewAccount = 1 << 43,

  /// <summary>
  /// ProPay: Update Beneficial Ownership Information
  /// </summary>
  UpdateBeneficialOwnership = 1 << 44,

  /// <summary>
  /// ProPay: Disown an account
  /// </summary>
  DisownAccount = 1 << 45,

  /// <summary>
  /// ProPay: Upload a document to a ProPay account related to a chargeback
  /// </summary>
  UploadDocumentChargeback = 1 << 46,

  /// <summary>
  /// ProPay: Upload a document to a ProPay account
  /// </summary>
  UploadDocument = 1 << 47,

  /// <summary>
  /// ProPay: Obtain a single-sign-on key
  /// </summary>
  ObtainSSOKey = 1 << 48,

  /// <summary>
  /// ProPay: Update bank account ownership information
  /// </summary>
  UpdateBankAccountOwnership = 1 << 49,

  /// <summary>
  /// ProPay: Add funds to a ProPay account (EFT)
  /// </summary>
  AddFunds = 1 << 50,

  /// <summary>
  /// ProPay: Sweep funds from a ProPay account (EFT)
  /// </summary>
  SweepFunds = 1 << 51,

  /// <summary>
  /// ProPay: Add a card for Flash Funds
  /// </summary>
  AddCardFlashFunds = 1 << 52,
  Detokenize = 1 << 52,

  /// <summary>
  /// ProPay: Move money out via Flash Funds
  /// </summary>
  PushMoneyFlashFunds = 1 << 53,

  /// <summary>
  /// ProPay: Disburse funds to a ProPay account
  /// </summary>
  DisburseFunds = 1 << 54,

  /// <summary>
  /// ProPay: SpendBack Transaction
  /// </summary>
  SpendBack = 1 << 55,

  /// <summary>
  /// ProPay: Roll back a SplitPay transaction
  /// </summary>
  ReverseSplitPay = 1 << 56,
  Confirm = 1 << 56,

  /// <summary>
  /// ProPay: Split funds from an existing transaction
  /// </summary>
  SplitFunds = 1 << 57,

  /// <summary>
  /// ProPay: Get Account details
  /// </summary>
  GetAccountDetails = 1 << 58,

  /// <summary>
  /// ProPay: Get Account balance
  /// </summary>
  GetAccountBalance = 1 << 59,

  /// <summary>
  /// Indicates a transaction reauthorization
  /// </summary>
  Reauth = 1 << 60,

  /// <summary>
  ///
  /// </summary>
  SiteConfig = 1 << 61,

  /// <summary>
  ///
  /// </summary>
  TimeRequest = 1 << 62,

  /// <summary>
  /// Get Token Information for the given token
  /// </summary>
  GetTokenInfo = 1 << 63,

  PayLinkUpdate = 1 << 63,
  OrderDevice = 1 << 64,
}

export enum ProPayAccountStatus {
  ReadyToProcess,
  FraudAccount,
  RiskwiseDeclined,
  Hold,
  Canceled,
  FraudVictim,
  ClosedEula,
  ClosedExcessiveChargeback,
}

export enum MobilePaymentMethodType {
  APPLEPAY = "apple-pay",
  GOOGLEPAY = "pay-with-google",
}

export enum PaymentDataSourceType {
  APPLEPAY = "ApplePay",
  APPLEPAYAPP = "ApplePayApp",
  APPLEPAYWEB = "ApplePayWeb",
  GOOGLEPAYAPP = "GooglePayApp",
  GOOGLEPAYWEB = "GooglePayWeb",
  DISCOVER3DSECURE = "Discover 3DSecure",
}

export enum PropayTermsVersion {
  merchantUS = 1,
  paymentUS = 2,
  merchantCA = 3,
  merchantUK = 4,
  merchantAU = 5,
}
