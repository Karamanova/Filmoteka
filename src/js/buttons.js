import { showLoginForm } from './auth-ui';
import { onWatchedBtnClick, onQueueBtnClick } from './firebase';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  getFirestore,
  setDoc,
  doc,
  collection,
  query,
  where,
  getDocs,
  documentId,
  deleteDoc,
} from 'firebase/firestore';

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyAQNEF1EZQq4hRQq21AEqmnTA4ysock-bY',
  authDomain: 'filmoteka-77997.firebaseapp.com',
  projectId: 'filmoteka-77997',
  storageBucket: 'filmoteka-77997.appspot.com',
  messagingSenderId: '555325927364',
  appId: '1:555325927364:web:5f447ca8d4265db75c3e91',
  measurementId: 'G-LZ05WYL8RJ',
});

// <<<<<<<<<< FIREBASE AUTHENTICATION >>>>>>>>>>

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

// Add Film To WATCHED

export const addFilmToWatched = async (filmID, filmTitle) => {
  onAuthStateChanged(auth, user => {
    if (user) {
      const docRef = doc(firestore, 'users', user.uid, 'watched', filmID);

      const addFilm = async () => {
        try {
          await setDoc(docRef, {
            title: filmTitle,
          });
          Notify.success(`Movie "${filmTitle}" has been added to the WATCHED`);
        } catch {
          console.log(`I got an error! ${error}`);
        }
      };

      addFilm();
    } else {
      showLoginForm();
      lblAuthState.innerHTML = `You're not logged in.`;
      Notify.failure(`You're not logged in.`);
    }
  });
};

// Add Film To QUEUE

export const addFilmToQueue = async (filmID, filmTitle) => {
  onAuthStateChanged(auth, user => {
    if (user) {
      const docRef = doc(firestore, 'users', user.uid, 'queue', filmID);

      const addFilm = async () => {
        try {
          await setDoc(docRef, {
            title: filmTitle,
          });
          Notify.success(`Movie "${filmTitle}" has been added to the QUEUE`);
        } catch {
          console.log(`I got an error! ${error}`);
        }
      };

      addFilm();
    } else {
      showLoginForm();
      lblAuthState.innerHTML = `You're not logged in.`;
      Notify.failure(`You're not logged in.`);
    }
  });
};

export const lookingMovieInWatched = async id => {
  let arr = [];
  const user = auth.currentUser;
  if (user !== null) {
    console.log('Looking for movie in WATCHED');

    const docRef = collection(firestore, 'users', user.uid, 'watched');

    const q = query(docRef, where(documentId(), '==', id));
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(doc => {
        console.log('Movie with ID:', doc.id, ' is in WATCHED ', doc.data());
        arr.push(doc.id);
      });
    } catch {
      console.log(`I got an error! ${error}`);
    }
  }
  return arr;
};

export const lookingMovieInQueue = async id => {
  let arr = [];
  const user = auth.currentUser;
  if (user !== null) {
    console.log('Looking for movie in QUEUE');

    const docRef = collection(firestore, 'users', user.uid, 'queue');

    const q = query(docRef, where(documentId(), '==', id));
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(doc => {
        console.log('Movie with ID:', doc.id, ' is in QUEUE ', doc.data());
        arr.push(doc.id);
      });
    } catch {
      console.log(`I got an error! ${error}`);
    }
  }
  return arr;
};

export const removeFilmFromWatched = async (filmID, filmTitle) => {
  const user = auth.currentUser;
  if (user !== null) {
    const docRef = doc(firestore, 'users', user.uid, 'watched', filmID);

    try {
      await deleteDoc(docRef);
      Notify.info(`Movie "${filmTitle}" has been removed from WATCHED`);
      onWatchedBtnClick();
    } catch {
      console.log(`I got an error! ${error}`);
    }
  } else {
    console.log(`You're not logged in.`);
  }
};

export const removeFilmFromQueue = async (filmID, filmTitle) => {
  const user = auth.currentUser;
  if (user !== null) {
    const docRef = doc(firestore, 'users', user.uid, 'queue', filmID);

    try {
      await deleteDoc(docRef);
      Notify.info(`Movie "${filmTitle}" has been removed from QUEUE`);
      onQueueBtnClick();
    } catch {
      console.log(`I got an error! ${error}`);
    }
  } else {
    console.log(`You're not logged in.`);
  }
};
