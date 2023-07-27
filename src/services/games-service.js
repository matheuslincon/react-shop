import { db } from "../../config/firebase";
import { collection, getDocs, doc, getDoc, setDoc } from "firebase/firestore";

export const getAllGames = async () => {
  const collectionRef = collection(db, "games");
  const querySnapshot = await getDocs(collectionRef);
  const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data()}));
  return data;
}

export const getGameById = async (id) => {
  const docRef = doc(db, "games", id);
  const snapshot = await getDoc((docRef));
  if(!snapshot.exists()) {
    throw new Error("Game was not found.")
  }

  return {id: snapshot.id, ...snapshot.data()};
}

export const setFavorite = async (id, bool) => {
  const docRef = doc(db, "games", id);
	await setDoc(docRef, { favorite: bool }, { merge: true });
};