import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, orderBy, query, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  projectId: "master-condition-ptxfk",
  appId: "1:33722512025:web:f15a13d5b2102f969ffe08",
  apiKey: "AIzaSyC5wEOeUNcc6-dhSy78TlAvJ9r0MvOP9Og",
  authDomain: "master-condition-ptxfk.firebaseapp.com",
  firestoreDatabaseId: "ai-studio-meridianventures-b4002f60-b0a2-4351-8244-f1546198ee9b",
  storageBucket: "master-condition-ptxfk.firebasestorage.app",
  messagingSenderId: "33722512025"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore with custom databaseId if configured
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

export interface ContactMessage {
  id?: string;
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  createdAt?: any;
}

export async function saveContactMessage(messageData: Omit<ContactMessage, 'createdAt'>) {
  try {
    const messagesCol = collection(db, 'contact_messages');
    const docRef = await addDoc(messagesCol, {
      ...messageData,
      createdAt: serverTimestamp()
    });
    return docRef.id;
  } catch (error) {
    console.error("Error saving message: ", error);
    throw error;
  }
}

export async function fetchContactMessages(): Promise<ContactMessage[]> {
  try {
    const messagesCol = collection(db, 'contact_messages');
    const q = query(messagesCol, orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as ContactMessage));
  } catch (error) {
    console.error("Error fetching messages: ", error);
    throw error;
  }
}
