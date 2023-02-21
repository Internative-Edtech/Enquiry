const headers = {
  $id: "request-headers",
  type: "object",
  required: ["x-channel-id"],
  properties: {
    Authorization: { type: "string" },
    "x-channel-id": {
      type: "string",
      default: "WEB",
      enum: ["APP", "WEB", "STORE", "IOS"],
      description: "Example values: 'APP'"
    }
  }
};

const auditSchema = {
  $id: "request-audit",
  type: "object",
  additionalProperties: false,
  properties: {
    apiVersion: { type: "string" },
    createdBy: { type: "string" },
    createdAt: { type: "string", format: "date-time" },
    updatedBy: { type: "string" },
    updatedAt: { type: "string", format: "date-time" }
  }
};

exports.commonRequestSchemas = [auditSchema, headers];
