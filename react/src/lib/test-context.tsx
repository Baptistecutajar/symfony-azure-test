import { Router } from 'next/router';
import { useContext, createContext, FC, ReactNode } from 'react';

export interface TestContextInterface {
  previewActive: boolean;
}

export const TestContextValue: TestContextInterface = {
  previewActive: false,
};

export const TestContext = createContext<TestContextInterface>(TestContextValue);

export const useTestContext = () => useContext(TestContext);

const TestContextProvider: FC<{ children: ReactNode; router: Router }> = ({ children, router }) => {
  const previewActive = !!router.query.preview;

  return (
    <TestContext.Provider
      value={{
        previewActive,
      }}>
      {children}
    </TestContext.Provider>
  );
};

export { TestContextProvider };
