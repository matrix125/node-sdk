# Changelog

## Latest - v3.5.0 (04/10/24):

### Enhancements:

- [GP-API] Add Transaction API methods

## v3.4.0 (03/12/24):

### Enhancements:

- [GP-API] Add stored payments and reports for stored payments

## v3.3.3 (02/27/24):

### Enhancements:
- PayPlan Enhancements: - Added payment methods to customer response
                        - Cardtype, NameOnAccount , and Last4 of both credit card and ACH are included in payment response 
                        - Fix for Processor Configuration error response message
                        - Added 204 as a success code when Request is successful; but response contains no data

## v3.3.2 (02/22/24):

### Enhancements:

- Code cleanup

## v3.3.1 (02/08/24):

### Enhancements:

- [RequestLogger] Backfill request logger on missing places

## v3.3.0 (01/31/24):

### Enhancements:

- [RequestLogger] Add request logger implementation on GpEcom and GpApi

## v3.2.0 (01/18/24):

### Enhancements:

- [UPA-MIC] Add MiC connector for UPA via GP-API

## v3.1.0 (10/31/23)

### Enhancements:

- [GP-API] Generate Access Token for GP API users
  - https://developer.globalpay.com/api/access-token

### Bug Fixes:

- Change tslint with eslint and fix existing lint errors

## v3.0.0 (10/03/23)

### Enhancements:

- Upgrade Typescript to v5 to use latest functionalities

## v2.0.0 (09/21/23)

### Enhancements:

- [GP-ECOM] Add configuration and use it in existing functionality
- From now on we are going to use containers in order to configure the services in Node SDK.

## v1.4.9 (05/17/23)

#### Profac Enhancements

- Profac Implementation - Implement profac functionality.

#### Reporting Enhancements

- SdkNameVersion Identifier: Name and Version of the SDK used for integration, where applicable. 

## v1.4.8 (12/13/22)

#### Enhancements

- Portico Connector: WalletData element added to process ApplePay/GooglePay Transactions using 
  Digital Tokens

## v1.4.7 (11/17/22)
