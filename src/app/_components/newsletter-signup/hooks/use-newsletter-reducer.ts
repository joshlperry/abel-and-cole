import { useReducer } from "react";

export type Diet = "vegetarian" | "vegan" | "none";
export type Communication = "SMS" | "email" | "mail";
export type Preference =
  | "seasonal_food"
  | "recipes"
  | "fruit"
  | "veg"
  | "drinks"
  | "household";

type Action =
  | { type: "restore_from_storage"; payload: NewsletterFormState }
  | { type: "update_name"; payload: string }
  | { type: "update_email"; payload: string }
  | { type: "add_method_of_communication"; payload: Communication }
  | { type: "remove_method_of_communication"; payload: Communication }
  | { type: "update_diet"; payload: Diet }
  | { type: "add_information_preference"; payload: Preference }
  | { type: "remove_information_preference"; payload: Preference };

export type NewsletterFormState = {
  name: string;
  email: string;
  communication: Set<Communication>;
  diet?: Diet;
  preferences: Set<Preference>;
};

const initialNewsletterFormState: NewsletterFormState = {
  name: "",
  email: "",
  preferences: new Set<Preference>(),
  communication: new Set<Communication>(),
};

function NewsletterReducer(
  state: NewsletterFormState,
  action: Action
): NewsletterFormState {
  switch (action.type) {
    case "restore_from_storage":
      return { ...action.payload };
    case "update_name":
      return { ...state, name: action.payload };
    case "update_email":
      return { ...state, email: action.payload };
    case "add_method_of_communication": {
      const newCommunication = new Set(state.communication);
      newCommunication.add(action.payload);
      return { ...state, communication: newCommunication };
    }
    case "remove_method_of_communication": {
      const newCommunication = new Set(state.communication);
      newCommunication.delete(action.payload);
      return { ...state, communication: newCommunication };
    }
    case "update_diet":
      return { ...state, diet: action.payload };
    case "add_information_preference": {
      const newPreferences = new Set(state.preferences);
      newPreferences.add(action.payload);
      return { ...state, preferences: newPreferences };
    }
    case "remove_information_preference": {
      const newPreferences = new Set(state.preferences);
      newPreferences.delete(action.payload);
      return { ...state, preferences: newPreferences };
    }
    default: {
      const exhaustiveCheck: never = action;
      throw new Error(
        `Unhandled newsletter reducer action case: ${exhaustiveCheck}`
      );
    }
  }
}

export type NewsletterReducer = ReturnType<typeof useNewsletterReducer>;

export function useNewsletterReducer() {
  const [state, dispatch] = useReducer(
    NewsletterReducer,
    initialNewsletterFormState
  );
  return { state, dispatch };
}
