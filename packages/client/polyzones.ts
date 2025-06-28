import { getAdapter } from "@brz-fivem-sdk/common/thirdparties";
import { polyzoneAdapter, qbTargetAdapter } from "./adapters/polyzones.adapter";
import {
  AdapterName,
  PolyZoneAdapter,
  PolyZoneAdapters,
} from "./types/polyzone.types";

declare const SETTINGS: any;

const enabledAdapter: AdapterName = SETTINGS.POLY_ZONE_SYSTEM || "polyZone";

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
