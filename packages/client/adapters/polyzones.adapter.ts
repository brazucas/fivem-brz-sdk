import {
  CreateBoxZoneInput,
  CreateCircleZoneInput,
  PolyZone,
} from "../types/polyzone.types";

export const polyzoneAdapter = {
  createBoxZone: (input: CreateBoxZoneInput): PolyZone => {
    const zone = exports["PolyZone"]
      .BoxZone?.()
      ?.Create(input.coords, input.length, input.width || 1, {
        name: input.id,
        heading: input.heading || 0,
        debugPoly: false,
        minZ: input.minZ || input.coords.z - 3,
        maxZ: input.maxZ || input.coords.z + 2,
        onPlayerInOut: input.onPlayerInOut,
      });

    return zone;
  },
  createCircleZone: (input: CreateCircleZoneInput): PolyZone => {
    const zone = exports["PolyZone"]
      .CircleZone?.()
      ?.Create(input.coords, input.radius, {
        name: input.id,
        heading: input.heading || 0,
        debugPoly: false,
        minZ: input.minZ || input.coords.z - 3,
        maxZ: input.maxZ || input.coords.z + 2,
        onPlayerInOut: input.onPlayerInOut,
      });

    return zone;
  },
};

export const qbTargetAdapter = {
  createBoxZone: (input: CreateBoxZoneInput): PolyZone => {
    const zone = exports["qb-target"]?.AddBoxZone(
      input.id,
      input.coords,
      input.length,
      input.width || 1,
      {
        name: input.id,
        heading: input.heading || 0,
        debugPoly: false,
        minZ: input.minZ || input.coords.z - 3,
        maxZ: input.maxZ || input.coords.z + 2,
        onPlayerInOut: input.onPlayerInOut,
      },
      input.options
    );

    return zone;
  },
  createCircleZone: (input: CreateCircleZoneInput): PolyZone => {
    const zone = exports["qb-target"]?.AddCircleZone(
      input.id,
      input.coords,
      input.radius,
      {
        name: input.id,
        heading: input.heading || 0,
        debugPoly: false,
        minZ: input.minZ || input.coords.z - 3,
        maxZ: input.maxZ || input.coords.z + 2,
        onPlayerInOut: input.onPlayerInOut,
      },
      input.options
    );

    return zone;
  },
};
