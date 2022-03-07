export type Claim = {
  id: string;
  status: ClaimStatus;
  poapTokenId: string;
  gitPoapId: string;
  address: string;
  userId: string;
  gitPoap?: GitPoap;
};

export type GitPoap = {
  id: string;
  name: string;
  description: string;
  orgName: string;
  imgSrc: string;
};

export enum ClaimStatus {
  UNCLAIMED = 'UNCLAIMED',
  PENDING = 'PENDING',
  CLAIMED = 'CLAIMED',
}

export type Project = {
  id: string;
  category: string;
  name: string;
  memberCount: number;
  gitPoapCount: number;
  stars: number;
};

export type POAP = {
  event: {
    name: string;
    image_url: string;
  };
  tokenId: string;
};
