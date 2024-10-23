import { createMachine } from 'xstate';

export const playerMachine = createMachine({
  id: 'player',
  initial: 'stopped',
  states: {
    stopped: {
      on: {
        PLAY: 'playing',
      },
    },
    playing: {
      on: {
        PAUSE: 'paused',
        STOP: 'stopped',
        MINIMIZE: 'miniPlayer',
      },
    },
    paused: {
      on: {
        PLAY: 'playing',
        STOP: 'stopped',
      },
    },
    miniPlayer: {
      on: {
        RESTORE: 'playing',
        CLOSE: 'stopped',
      },
    },
  },
});
