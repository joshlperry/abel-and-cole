import { Body, Caption1, Subtitle2 } from "../../typography";
import { NewsletterReducer } from "../hooks/use-newsletter-reducer";

type IdentifyingDataProps = {
  reducer: NewsletterReducer;
};
export function IdentifyingData({ reducer }: IdentifyingDataProps) {
  const { state, dispatch } = reducer;
  return (
    <div className="mb-4">
      <Subtitle2>Details</Subtitle2>
      <Caption1 className="mb-2">What are your contact details?</Caption1>
      <label className="flex gap-2 mb-2">
        <Body className="w-[60px]">Name: </Body>
        <input
          value={state.name}
          onChange={(event) =>
            dispatch({ type: "update_name", payload: event.target.value })
          }
          required
          className="border rounded px-2"
          placeholder="Your name"
          type="text"
        />
      </label>
      <label className="flex gap-2">
        <Body className="w-[60px]">Email: </Body>
        <input
          required
          value={state.email}
          onChange={(event) =>
            dispatch({ type: "update_email", payload: event.target.value })
          }
          className="border rounded px-2"
          placeholder="Your email"
          type="email"
        />
      </label>
    </div>
  );
}
