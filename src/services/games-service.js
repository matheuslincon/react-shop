import { db } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";

export const getAllGames = async () => {
  const collectionRef = collection(db, "games");
  const querySnapshot = await getDocs(collectionRef);
  const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data()}));
  return data;
}