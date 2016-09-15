import store from '../src/store.js';

describe('Redux Reducers', () => {

  describe('Basket', () => {

    it('should update the origin correctly', () => {

      const origin = 'DUB';

      store.dispatch({
        type: 'UPDATE_ORIGIN',
        payload: origin
      });

      const state = store.getState();
      const { basket } = state;

      expect(basket.origin).toBe(origin);

    });

    it('should update destination correctly', () => {

      const destination = 'FRA';

      store.dispatch({
        type: 'UPDATE_DESTINATION',
        payload: destination
      });

      const state = store.getState();
      const { basket } = state;

      expect(basket.destination).toBe(destination);

    });

    it('should reset the destination once origin has been updated', () => {

      const origin = 'DUB';
      const destination = 'FRA';

      store.dispatch({
        type: 'UPDATE_DESTINATION',
        payload: destination
      });

      store.dispatch({
        type: 'UPDATE_ORIGIN',
        payload: origin
      });

      const state = store.getState();
      const { basket } = state;

      expect(basket.destination).toBe('');

    });

    it('should update the from date correctly', () => {

      const fromDate = '17/04/1987';

      store.dispatch({
        type: 'UPDATE_FROM_DATE',
        payload: fromDate
      });

      const state = store.getState();
      const { basket } = state;

      expect(basket.fromDate).toBe(fromDate);

    });

    it('should update the to date correctly', () => {

      const toDate = '17/04/1987';

      store.dispatch({
        type: 'UPDATE_TO_DATE',
        payload: toDate
      });

      const state = store.getState();
      const { basket } = state;

      expect(basket.toDate).toBe(toDate);

    });

  });

});
