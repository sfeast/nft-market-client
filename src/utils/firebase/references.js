import { database } from 'services/firebase';
import { ref } from 'firebase/database';

// just as a usage example
export const rootRef = () => {
    ref(database, '/');
};
