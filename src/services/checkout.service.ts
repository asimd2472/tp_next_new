import type { CartItem } from "@/context/CartContext";
import authApi from "@/config/auth-api.config";

export interface SubmitCartDetailsPayload {
  cart_details: CartItem[];
  construction_stage: string;
  pincode: string;
  address: string;
}

export interface SubmitCartDetailsResponse {
  success?: boolean;
  message?: string;
}

export async function submitCartDetails(payload: SubmitCartDetailsPayload) {
  console.log("submitCartDetails payload", payload);
  const response = await authApi.post<SubmitCartDetailsResponse>("submit-cart-details", payload);
  return response.data;
}
