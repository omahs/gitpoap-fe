import React, { createContext, useState, useContext } from 'react';

type FeaturesState = {
  hasHomePageRecentProjects: boolean;
  /* Placeholders */
  hasPOAPsPage: boolean;
  hasProfilePage: boolean;
  hasProjectsPage: boolean;
  hasDocs: boolean;
  hasClaimsPage: boolean;
};

export const getInitialState = (): FeaturesState => ({
  hasHomePageRecentProjects: false,
  hasPOAPsPage: true,
  hasProfilePage: true,
  hasProjectsPage: true,
  hasDocs: true,
  hasClaimsPage: true,
});

const FeaturesContext = createContext<FeaturesState>({} as FeaturesState);

export const useFeatures = () => {
  return useContext(FeaturesContext);
};

type Props = {
  children: React.ReactNode;
};

export const FeaturesProvider = ({ children }: Props) => {
  const [featuresState, _] = useState<FeaturesState>(getInitialState());

  return <FeaturesContext.Provider value={featuresState}>{children}</FeaturesContext.Provider>;
};
