import React from 'react';
import { useParams } from 'react-router-dom';

export default function User() {
  const { id } = useParams();

  return (
    <>
      <div className="text-center bg-gray-500 h-12 flex items-center justify-center text-3xl">
        User id: {id}
      </div>
    </>
  );
}
