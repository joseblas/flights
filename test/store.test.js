import store from '../src/store.js';
import { updateOrigin, updateDestination, updateFromDate, updateToDate } from '../src/actions/basket';

describe('Redux Reducers', () => {

  describe('Basket', () => {

    it('should update the origin correctly', () => {

      const origin = 'DUB';

      store.dispatch(updateOrigin(origin));

      const state = store.getState();
      const { basket } = state;

      expect(basket.origin).toBe(origin);

    });

    it('should update destination correctly', () => {

      const destination = 'FRA';

      store.dispatch(updateDestination(destination));

      const state = store.getState();
      const { basket } = state;

      expect(basket.destination).toBe(destination);

    });

    it('should reset the destination once origin has been updated', () => {

      const origin = 'DUB';
      const destination = 'FRA';

      store.dispatch(updateDestination(destination));
      store.dispatch(updateOrigin(origin));

      const state = store.getState();
      const { basket } = state;

      expect(basket.destination).toBe('');

    });

    it('should update the from date correctly', () => {

      const fromDate = '17/04/1987';

      store.dispatch(updateFromDate(fromDate));

      const state = store.getState();
      const { basket } = state;

      expect(basket.fromDate).toBe(fromDate);

    });

    it('should update the to date correctly', () => {

      const toDate = '17/04/1987';

      store.dispatch(updateToDate(toDate));

      const state = store.getState();
      const { basket } = state;

      expect(basket.toDate).toBe(toDate);

    });

  });

});
