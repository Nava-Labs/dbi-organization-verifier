const { DBIOrganizationCredential } = require("./vcHelpers/DBIOrganizationCredential");

// design your own customised authentication requirement here using Query Language
// https://0xpolygonid.github.io/tutorials/verifier/verification-library/zk-query-language/

const humanReadableAuthReason = "Must be born before this year";

const credentialSubject = {
  // birthday: {
  //   // users must be born before this year
  //   // birthday is less than Jan 1, 2023
  //   $lt: 20230101,
  // },

  organizationId: {
    // users must be born before this year
    // birthday is less than Jan 1, 2023
    $eq: 1,
  },

};

const proofRequest = DBIOrganizationCredential(credentialSubject);

module.exports = {
  humanReadableAuthReason,
  proofRequest,
};
