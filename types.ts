interface Question {
  id: number;
  question: string;
  options?: { label: string; goTo?: number; explanation?: string, response?: string, complete?: boolean }[];
}

export type { Question };
