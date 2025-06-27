export type CreateBoxZoneInput = {
  id: string;
  coords: {
    x: number;
    y: number;
    z: number;
  };
  length: number;
  width?: number;
  heading?: number;
  minZ?: number;
  maxZ?: number;
  options?: {
    name?: string;
    icon: string;
    action: () => void;
    distance?: number;
  };
  onPlayerInOut?: (inside: boolean) => void;
};

export type CreateCircleZoneInput = {
  id: string;
  coords: {
    x: number;
    y: number;
    z: number;
  };
  radius: number;
  heading?: number;
  minZ?: number;
  maxZ?: number;
  options?: {
    name?: string;
    icon: string;
    action: () => void;
    distance?: number;
  };
  onPlayerInOut?: (inside: boolean) => void;
};

export type PolyZone = any & { __opaque__: "PolyZone" };
