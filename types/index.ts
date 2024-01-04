type TChallenge = {
  id: number | null | undefined;
  bg: string | undefined;
  content: string | number | readonly string[] | undefined;
  complete: boolean
};

export type { TChallenge };
