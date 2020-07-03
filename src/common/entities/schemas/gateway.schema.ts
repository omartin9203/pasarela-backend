import * as mongoose from 'mongoose';
import { DEVICE_MODEL_NAME, GATEWAY_MODEL_NAME } from '../../../utils/model-names';

const Schema = mongoose.Schema;

export const GatewaySchema = new Schema({
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
  serialNumber: {type: String, required: true, unique: true},
  name: {type: String, required: true},
  ipv4: {
    value: {
      type: String,
      required: true,
    },
    validated: {
      type: Boolean,
      default: false,
    },
  },
  devices: [
    {
      type: Schema.Types.ObjectId,
      ref: DEVICE_MODEL_NAME,
      required: true,
    },
  ],
}, { timestamps: true });

export const GatewayFeature = {
  name: GATEWAY_MODEL_NAME,
  schema: GatewaySchema,
};
