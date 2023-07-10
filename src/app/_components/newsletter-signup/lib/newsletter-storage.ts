import {
  readFromSessionStorage,
  storeInSessionStorage,
} from "@/app/_helpers/session-storage";
import {
  Communication,
  NewsletterFormState,
  Preference,
} from "../hooks/use-newsletter-reducer";

export type NewsletterFormStorage = Omit<
  NewsletterFormState,
  "communication" | "preferences"
> & {
  communication: Communication[];
  preferences: Preference[];
};

const NEWSLETTER_STORAGE_KEY = "NEWSLETTER_INFO";

export function storeNewsletterInSession(item: NewsletterFormState): void {
  const data: NewsletterFormStorage = {
    ...item,
    email: "",
    name: "",
    communication: Array.from(item.communication),
    preferences: Array.from(item.preferences),
  };
  storeInSessionStorage<NewsletterFormStorage>(NEWSLETTER_STORAGE_KEY, data);
}

export function readNewsletterFromSession(): NewsletterFormState | null {
  const data = readFromSessionStorage<NewsletterFormStorage>(
    NEWSLETTER_STORAGE_KEY
  );

  if (data) {
    return {
      ...data,
      communication: new Set<Communication>(data.communication),
      preferences: new Set<Preference>(data.preferences),
    };
  }
  return null;
}
