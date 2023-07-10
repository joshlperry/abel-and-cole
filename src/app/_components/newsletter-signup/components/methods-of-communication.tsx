import { Body, Caption1, Subtitle2 } from "../../typography";
import { NewsletterReducer } from "../hooks/use-newsletter-reducer";

type MethodsOfCommunicationProps = {
  reducer: NewsletterReducer;
};
export function MethodsOfCommunication({
  reducer,
}: MethodsOfCommunicationProps) {
  const { state, dispatch } = reducer;

  const isOneChecked = state.communication.size > 0;
  return (
    <div className="mb-4">
      <Subtitle2>Methods of communication</Subtitle2>
      <Caption1 className="mb-2">
        How would you like us to communicate with you?
      </Caption1>
      <div className="flex gap-4 mb-5">
        <label className="flex gap-1 border px-1 rounded">
          <Body>Email</Body>
          <input
            required={!isOneChecked}
            type="checkbox"
            checked={state.communication.has("email")}
            onChange={(event) =>
              dispatch({
                type: event.target.checked
                  ? "add_method_of_communication"
                  : "remove_method_of_communication",
                payload: "email",
              })
            }
          />
        </label>
        <label className="flex gap-1 border px-1 rounded">
          <Body>SMS</Body>
          <input
            type="checkbox"
            checked={state.communication.has("SMS")}
            onChange={(event) =>
              dispatch({
                type: event.target.checked
                  ? "add_method_of_communication"
                  : "remove_method_of_communication",
                payload: "SMS",
              })
            }
          />
        </label>
        <label className="flex gap-1 border px-1 rounded">
          <Body>Mail</Body>
          <input
            type="checkbox"
            checked={state.communication.has("mail")}
            onChange={(event) =>
              dispatch({
                type: event.target.checked
                  ? "add_method_of_communication"
                  : "remove_method_of_communication",
                payload: "mail",
              })
            }
          />
        </label>
      </div>
    </div>
  );
}
