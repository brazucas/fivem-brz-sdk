import { BlipRequest, BlipResponse } from "../types/blip.types";

const DEFAULT_RADIUS = 100.0;

export const createBlip = (blip: BlipRequest): BlipResponse => {
  const blipRadius = AddBlipForRadius(
    blip.coords[0],
    blip.coords[1],
    blip.coords[2],
    blip.radius || DEFAULT_RADIUS
  );

  SetBlipRotation(blipRadius, 0);

  if (blip.color) {
    SetBlipColour(blipRadius, blip.color);
  }

  const blipEntity = AddBlipForCoord(
    blip.coords[0],
    blip.coords[1],
    blip.coords[2]
  );

  if (blip.sprite) {
    SetBlipSprite(blipEntity, blip.sprite);
  }

  if (blip.display) {
    SetBlipDisplay(blipEntity, blip.display || 4);
  }

  if (blip.scale) {
    SetBlipScale(blipEntity, blip.scale || 1);
  }

  if (blip.shortRange) {
    SetBlipAsShortRange(blipEntity, true);
  }

  if (blip.label) {
    BeginTextCommandSetBlipName("STRING");
    AddTextComponentSubstringPlayerName(blip.label);
    EndTextCommandSetBlipName(blipEntity);
  }

  return {
    blipRadiusId: blipRadius,
    blipEntityId: blipEntity,
  };
};
