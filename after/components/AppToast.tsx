import React from 'react';

export default function AppToast()  {
  const { toastMsg, toastSev, showToast } = useAppToast();
  return (
    <div>
      
      <p>AppToast Component</p>
    </div>
  );
};

