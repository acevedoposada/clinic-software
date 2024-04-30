export enum States {
  'available' = 'available',
  'busy' = 'busy',
  'away' = 'away',
  'offline' = 'offline',
}

export const statesTitles: Record<States, string> = {
  [States['available']]: 'Disponible',
  [States['busy']]: 'Ocupado',
  [States['away']]: 'Ausente',
  [States['offline']]: 'Offline',
};

export type StatesType = `${States}`;
