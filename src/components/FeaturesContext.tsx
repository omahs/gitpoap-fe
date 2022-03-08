import React, { createContext, useState, useContext } from 'react';

type FeaturesState = {
  hasPOAPsPage: boolean;
  hasProfilePage: boolean;
  hasProjectsPage: boolean;
  hasDocs: boolean;
  hasClaimsPage: boolean;
};

export const getInitialState = (): FeaturesState => ({
  hasPOAPsPage: true,
  hasProfilePage: true,
  hasProjectsPage: true,
  hasDocs: true,
  hasClaimsPage: true,
});

const GHAuthContext = createContext<FeaturesState>({} as FeaturesState);

export const useGHAuthContext = () => {
  return useContext(GHAuthContext);
};

type Props = {
  children: React.ReactNode;
};

export const FeaturesProvider = ({ children }: Props) => {
  const [featuresState, _] = useState<FeaturesState>(getInitialState());

  return <GHAuthContext.Provider value={featuresState}>{children}</GHAuthContext.Provider>;
};
