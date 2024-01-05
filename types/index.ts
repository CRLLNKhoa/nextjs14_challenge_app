type TChallenge = {
  id: number | null | undefined;
  bg: string | undefined;
  challenge: string | number | readonly string[] | undefined;
  complete: boolean
};

export type { TChallenge };
