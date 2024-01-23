import React, { useState, useEffect } from "react";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  getDoc,
} from "firebase/firestore";
import app from "../../config/fireabaseConfig";
var db = getFirestore(app);

export default function useFirestore(collect) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCustomers = async () => {
    setIsLoading(true);
    try {
      const customersCol = collection(db, collect);
      const customers = await getDocs(customersCol);
      setData(customers.docs.map((doc) => doc.data()));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const create = async (data) => {
    const customerData = { id: uuidv4(), ...data };
    const response = await addDoc(collection(db, collect), customerData);
  };

  const update = async (id, data) => {
    try {
      console.log(id === data.id);
      console.log(data);
      const docRef = doc(db, collect, id);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteByDoc = async (id) => {
    try {
      console.log("delete", id);
      const coll = collection(db, "customers");
      const customerRef = doc(coll, id);
      await deleteDoc(customerRef);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCustomers();
  }, []);

  return {
    data,
    getCustomers,
    isLoading,
    create,
    update,
    deleteByDoc,
  };
}
