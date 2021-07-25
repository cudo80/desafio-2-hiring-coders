import * as React from 'react';

const AppBody = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
      }}
    >
      {children}
    </div>
  );
};

export default AppBody;
