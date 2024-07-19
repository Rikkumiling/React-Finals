import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase/config";

const collectionName = "balance";

export const addBalance = async (balance) => {
  const ref = collection(db, collectionName);
  try {
    await addDoc(ref, balance);
  } catch (err) {
    throw err;
  }
};
export const updateBalance = async (id, balance) => {
  const ref = doc(db, collectionName, id);
  try {
    await updateDoc(ref, balance);
  } catch (err) {
    throw err;
  }
};

export const deleteBalance = async (id, balance) => {
  const ref = doc(db, collectionName, id);
  try {
    await deleteDoc(ref);
  } catch (err) {
    throw err;
  }
};

export const getBalance = async (id) => {
  const ref = doc(db, collectionName, id);
  try {
    return await getDoc(ref);
  } catch (err) {
    throw err;
  }
};

export const getBalances = (callback) => {
  const ref = collection(db, collectionName);

  return onSnapshot(ref, (snapshot) => {
    let results = [];
    snapshot.docs.forEach((doc) => {
      results.push({ id: doc.id, ...doc.data() });
    });
    callback(results);
  });
};

export const getBudgetOnUID = async (UID) => {
  try {
    const ref = collection(db, collectionName);
    const q = query(ref, where("UID", "==", UID));
    const querySnapshot = await getDocs(q);
    const docs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return docs;
  } catch (error) {
    console.error("Error fetching documents: ", error);
    return [];
  }
};
