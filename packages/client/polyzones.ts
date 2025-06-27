import { getAdapter } from "@brz-fivem-sdk/common/thirdparties";
import { polyzoneAdapter, qbTargetAdapter } from "./adapters/polyzones.adapter";
import {
  CreateBoxZoneInput,
  CreateCircleZoneInput,
  PolyZone,
} from "./types/polyzone.types";

declare const SETTINGS: any;

type AdapterName = "qbTarget" | "polyZone";

const enabledAdapter: AdapterName = SETTINGS.POLY_ZONE_SYSTEM || "polyZone";

type PolyZoneAdapter = {
  createBoxZone: (input: CreateBoxZoneInput) => PolyZone;
  createCircleZone: (input: CreateCircleZoneInput) => PolyZone;
};

type PolyZoneAdapters = {
  [key in AdapterName]: PolyZoneAdapter;
};

const getClientAdapter = () =>
  getAdapter<PolyZoneAdapters, PolyZoneAdapter>(
    {
      polyZone: polyzoneAdapter,
      qbTarget: qbTargetAdapter,
    },
    enabledAdapter
  );

export const createBoxZone = getClientAdapter().createBoxZone;

export const createCircleZone = getClientAdapter().createCircleZone;
