import { Body, Caption1, Subtitle2 } from "../../typography";
import { Diet, NewsletterReducer } from "../hooks/use-newsletter-reducer";

type UserPreferencesProps = {
  reducer: NewsletterReducer;
};

export function UserPreferences({ reducer }: UserPreferencesProps) {
  const { state, dispatch } = reducer;

  return (
    <div className="mb-4">
      <Subtitle2>Preferences</Subtitle2>
      <Caption1 className="mb-2">What would you like to hear about?</Caption1>
      <label className="flex gap-1 mb-4">
        <Body className="">Diet restriction: </Body>
        <select
          name="diet"
          required
          value={state.diet}
          onChange={(event) =>
            dispatch({
              type: "update_diet",
              payload: event.target.value as Diet,
            })
          }
        >
          <option value="">Please choose one</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="none">No diet</option>
        </select>
      </label>
      <div className="flex flex-wrap gap-2 md:gap-4">
        <Body>Topics:</Body>
        <label className="flex gap-1 border px-1 rounded">
          <Body>Seasonal food</Body>
          <input
            type="checkbox"
            checked={state.preferences.has("seasonal_food")}
            onChange={(event) =>
              dispatch({
                type: event.target.checked
                  ? "add_information_preference"
                  : "remove_information_preference",
                payload: "seasonal_food",
              })
            }
          />
        </label>
        <label className="flex gap-1 border px-1 rounded">
          <Body>Recipes</Body>
          <input
            type="checkbox"
            checked={state.preferences.has("recipes")}
            onChange={(event) =>
              dispatch({
                type: event.target.checked
                  ? "add_information_preference"
                  : "remove_information_preference",
                payload: "recipes",
              })
            }
          />
        </label>
        <label className="flex gap-1 border px-1 rounded">
          <Body>Fruit</Body>
          <input
            type="checkbox"
            checked={state.preferences.has("fruit")}
            onChange={(event) =>
              dispatch({
                type: event.target.checked
                  ? "add_information_preference"
                  : "remove_information_preference",
                payload: "fruit",
              })
            }
          />
        </label>
        <label className="flex gap-1 border px-1 rounded">
          <Body>Veg</Body>
          <input
            type="checkbox"
            checked={state.preferences.has("veg")}
            onChange={(event) =>
              dispatch({
                type: event.target.checked
                  ? "add_information_preference"
                  : "remove_information_preference",
                payload: "veg",
              })
            }
          />
        </label>
        <label className="flex gap-1 border px-1 rounded">
          <Body>Drinks</Body>
          <input
            type="checkbox"
            checked={state.preferences.has("drinks")}
            onChange={(event) =>
              dispatch({
                type: event.target.checked
                  ? "add_information_preference"
                  : "remove_information_preference",
                payload: "drinks",
              })
            }
          />
        </label>
        <label className="flex gap-1 border px-1 rounded">
          <Body>Household</Body>
          <input
            type="checkbox"
            checked={state.preferences.has("household")}
            onChange={(event) =>
              dispatch({
                type: event.target.checked
                  ? "add_information_preference"
                  : "remove_information_preference",
                payload: "household",
              })
            }
          />
        </label>
      </div>
    </div>
  );
}
