import test from "ava";
import { PayFacService } from "../../../../../src/Services/PayFacService";
import {
  ServicesConfig, ServicesContainer
} from "../../../../../src/";

import { TestAccountData } from "./TestData/TestAccountData";
import { BankAccountData } from "../../../../../src/Entities/ProFac/BankAccountData";
import { DocumentUploadData } from "../../../../../src/Entities/DocumentUploadData";
import { SSORequestData } from "../../../../../src/Entities/SSORequestData";

const config = new ServicesConfig();
config.serviceUrl = "https://xmltest.propay.com/API/PropayAPI.aspx";
config.certificationStr = "d17d770d4734341aaedab32b7a7763";
config.terminalID = "7a7763";
config.x509CertificationPath = "test/Integration/Gateways/ProPayConnector/Certifications/TestData/selfSignedCertificate.crt";
const _service = new PayFacService();

test.before((_t) => {
  ServicesContainer.configure(config);
});

test("create account", async (t) => {
  t.plan(5);
  var accountPersonalInfo = TestAccountData.GetUserPersonalData();
  var ownersInfo = TestAccountData.GetBeneficialOwnerData();
  var response = await _service.createAccount()
    .withUserPersonalData(accountPersonalInfo)
    .withBeneficialOwnerData(ownersInfo)
    .execute();
  
  t.truthy(response);
  t.is("00", response.responseCode);
  t.truthy(response.payFacData.accountNumber);
  t.truthy(response.payFacData.password);
  t.truthy(response.payFacData.sourceEmail);
});

test("Order a new device", async (t) => {
  t.plan(2);
  var orderDeviceInfo = TestAccountData.GetOrderNewDeviceData();
  var deviceData = TestAccountData.GetDeviceDataForPhysicalDevice(1, false);
  var response = await _service.orderDevice()
    .withOrderDevice(orderDeviceInfo)
    .withDeviceData(deviceData)
    .execute();
  
  t.truthy(response);
  t.is("00", response.responseCode);
});

test("create account Device Order", async (t) => {
  t.plan(5);
  var bankAccountInfo = TestAccountData.GetBankAccountForBoardingData();
  var accountPersonalInfo = TestAccountData.GetUserPersonalForBoadingData();
  var deviceData = TestAccountData.GetDeviceData(1, false);
  var userBusinessInfo = TestAccountData.GetBusinessForBoardingData();
  var mailingAddressInfo = TestAccountData.GetMailingAddressForBoarding();

  var ownersInfo = TestAccountData.GetBeneficialOwnerData();
  var response = await _service.createAccount()
    .withBankAccountData(bankAccountInfo)
    .withUserPersonalData(accountPersonalInfo)
    .withBusinessData(userBusinessInfo)
    .withDeviceData(deviceData)
    .withMailingAddress(mailingAddressInfo)
    .withBeneficialOwnerData(ownersInfo)
    .withTimeZone("UTC")
    .execute();
  
  t.truthy(response);
  t.is("00", response.responseCode);
  t.truthy(response.payFacData.accountNumber);
  t.truthy(response.payFacData.password);
  t.truthy(response.payFacData.sourceEmail);
});

test("create account Physical Device", async (t) => {
  t.plan(5);
  var bankAccountInfo = TestAccountData.GetBankAccountForBoardingData();
  var accountPersonalInfo = TestAccountData.GetUserPersonalForBoadingData();
  var deviceData = TestAccountData.GetDeviceDataForPhysicalDevice(1, false);
  var userBusinessInfo = TestAccountData.GetBusinessForBoardingData();
  var mailingAddressInfo = TestAccountData.GetMailingAddressForBoarding();

  var ownersInfo = TestAccountData.GetBeneficialOwnerData();
  var response = await _service.createAccount()
    .withBankAccountData(bankAccountInfo)
    .withUserPersonalData(accountPersonalInfo)
    .withBusinessData(userBusinessInfo)
    .withDeviceData(deviceData)
    .withMailingAddress(mailingAddressInfo)
    .withBeneficialOwnerData(ownersInfo)
    .withTimeZone("UTC")
    .execute();
  
  t.truthy(response);
  t.is("00", response.responseCode);
  t.truthy(response.payFacData.accountNumber);
  t.truthy(response.payFacData.password);
  t.truthy(response.payFacData.sourceEmail);
});

test("Test Failed KYC (Status 66)", async (t) => {
  t.plan(2);
  var bankAccountInfo = TestAccountData.GetBankAccountForBoardingData();
  var accountPersonalInfo = TestAccountData.GetUserPersonalForBoadingData("01-01-1971");
  var deviceData = TestAccountData.GetDeviceData(1, false);
  var userBusinessInfo = TestAccountData.GetBusinessForBoardingData();
  var mailingAddressInfo = TestAccountData.GetMailingAddressForBoarding();

  var ownersInfo = TestAccountData.GetBeneficialOwnerData();
  var response = await _service.createAccount()
    .withBankAccountData(bankAccountInfo)
    .withUserPersonalData(accountPersonalInfo)
    .withBusinessData(userBusinessInfo)
    .withDeviceData(deviceData)
    .withMailingAddress(mailingAddressInfo)
    .withBeneficialOwnerData(ownersInfo)
    .withTimeZone("UTC")
    .execute();
  console.log(response);
  t.truthy(response);
  t.is("66", response.responseCode);
});

test("edit account information", async (t) => {
  t.plan(2);

  var bankAccountData = new BankAccountData();
  bankAccountData.accountCountryCode = "USA";
  bankAccountData.accountType = "Checking";
  bankAccountData.accountNumber = "718570634";
  bankAccountData.bankName = "BankName";
  bankAccountData.routingNumber = "104000058";
  bankAccountData.accountOwnershipType = "Business";

  var response = await _service.editAccount()
    .withAccountNumber("718570634")
    .withBankAccountData(bankAccountData)
    .execute();

  t.truthy(response);
  t.is("00", response.responseCode);
});

test("reset password", async (t) => {
  var response = await _service.resetPassword()
    .withAccountNumber('718570758')
    .execute();

  t.truthy(response);
});

test("renew account", async (t) => {
  t.plan(2);
  var response = await _service.renewAccount()
    .withRenewalAccountData(TestAccountData.GetRenewAccountDetails())
    .withAccountNumber("718570759")
    .execute();

  t.truthy(response);
  t.is("00", response.responseCode);
});

test.skip("disown account", async (t) => {
  t.plan(2);
  var response = await _service.disownAccount()
    .withAccountNumber("718570772") // The account being "disowned" needs to have another affiliation set. Contact propayimplementations@tsys.com and they will set one if necessary
    .execute();

  t.truthy(response);
  t.is("00", response.responseCode);
});

// Note : The transaction number of the chargeback you need to dispute. (can be verify at certification process)
test("upload document chargeback", async (t) => {
  t.plan(2);
  var docUploadData = new DocumentUploadData();
  docUploadData.documentName = "TestDocCB_12345";
  docUploadData.transactionReference = "1";
  docUploadData.documentPath = 'test/Integration/Gateways/ProPayConnector/Certifications/TestData/TestDocChargeback.docx';
  docUploadData.DocumentPath(docUploadData.documentPath);
  var response = await _service.uploadDocumentChargeback()
    .withAccountNumber("718569967")//("718567300")
    .withDocumentUploadData(docUploadData)
    .execute();

  t.truthy(response);
  t.is("00", response.responseCode);
});

test("upload document", async (t) => {
  t.plan(2);
  var docUploadData = new DocumentUploadData();
  docUploadData.documentName = "TestDoc_12345";
  docUploadData.docCategory = "Verification";
  docUploadData.documentPath = 'test/Integration/Gateways/ProPayConnector/Certifications/TestData/TestDoc.docx';
  docUploadData.DocumentPath(docUploadData.documentPath);
  var response = await _service.uploadDocument()
    .withAccountNumber("718570858")
    .withDocumentUploadData(docUploadData)
    .execute();

  t.truthy(response);
  t.is("00", response.responseCode);
});

test("obtain sSO key", async (t) => {
  t.plan(3);
  var ssoRequestData = new SSORequestData();
  ssoRequestData.referrerURL = "https://www.globalpaymentsinc.com/";
  ssoRequestData.iPAddress = "40.81.11.219";
  ssoRequestData.iPSubnetMask = "255.255.255.0";

  var response = await _service.obtainSSOKey()
    .withAccountNumber("718570860")
    .withSSORequestData(ssoRequestData)
    .execute();

  t.truthy(response);
  t.is("00", response.responseCode);
  t.truthy(response.payFacData.authToken);
});

test("update beneficial data", async (t) => {
  //Owners count shoud not be excedded 6
  var ownersInfo = TestAccountData.GetBeneficialOwnerData();

  var response = await _service.updateBeneficialOwnershipInfo()
    .withAccountNumber('718570792')
    .withBeneficialOwnerData(ownersInfo)
    .execute();

  t.truthy(response);
});