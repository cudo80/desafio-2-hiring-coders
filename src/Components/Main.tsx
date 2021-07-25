import * as React from 'react';

const Main = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <main className="container" style={{ flex: '1 0 auto' }}>
      {children}
    </main>
  );
};

export default Main;
