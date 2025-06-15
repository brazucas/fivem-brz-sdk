export type BlipRequest = {
  id: string;
  label: string;
  coords: [number, number, number];
  color?: number;
  scale?: number;
  sprite?: number;
  display?: number;
  shortRange?: boolean;
  radius?: number;
  onPlayerEnter?: () => void;
  onPlayerExit?: () => void;
  playerEnterText?: string;
  playerExitText?: string;
};

export type BlipResponse = {
  blipRadiusId: number;
  blipEntityId: number;
};
