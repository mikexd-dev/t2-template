// to test that Firestore is working
import type { NextApiRequest, NextApiResponse } from 'next';
import {
  collection,
  DocumentData,
  getDocs,
  QuerySnapshot,
} from 'firebase/firestore';
import { firestore } from '../../lib/firebase';

export default async (
  req: NextApiRequest,
  res: NextApiResponse<DocumentData[]>,
) => {
  const storiesData = await getStories();

  res.status(200).json(storiesData);
};

export const getStories = async () => {
  const storiesRef = collection(firestore, 'stories');

  const storiesSnapshot = await getDocs(storiesRef);
  const storiesData = storiesSnapshot.docs.map((doc) => doc.data());

  return storiesData;
};
