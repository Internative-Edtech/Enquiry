const amountSchema = {
  $id: "response-amount",
  type: "object",
  properties: {
    currency: { type: "string" },
    cent_amount: { type: "integer" },
    fraction: { type: "integer" }
  }
};

exports.commonResponseSchemas = [amountSchema];
