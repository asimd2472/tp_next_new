import api from "@/config/api.config";
import type { AxiosResponse } from "axios";

export interface FrenchDoorShade {
	id: number;
	name: string;
	color: string;
	image_url: string | null;
	is_default: boolean;
}

export interface FrenchDoorDesign {
	id: number;
	name: string;
	is_default: boolean;
	shades: FrenchDoorShade[];
}

export interface FrenchDoorSize {
	id: number;
	width_mm: number;
	height_mm: number;
	label: string;
	is_default: boolean;
}

export interface FrenchDoorResponse {
	success: boolean;
	product: {
		name: string;
		slug: string;
	};
	designs: FrenchDoorDesign[];
	sizes: FrenchDoorSize[];
	defaults: {
		design_id: number | null;
		shade_id: number | null;
		size_id: number | null;
	};
}

export const getFrenchDoor = async (): Promise<AxiosResponse<FrenchDoorResponse>> => {
	return api.get<FrenchDoorResponse>("product/french-door");
};
