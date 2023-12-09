const { DBIOrganizationCredential } = require("./vcHelpers/DBIOrganizationCredential");

// design your own customised authentication requirement here using Query Language
// https://0xpolygonid.github.io/tutorials/verifier/verification-library/zk-query-language/
const humanReadableAuthReason = "Must be in Orgz";

const credentialSubject = {
  organizationId: {
    $eq: 1,
  },

};

const proofRequest = DBIOrganizationCredential(credentialSubject);

module.exports = {
  humanReadableAuthReason,
  proofRequest,
};
