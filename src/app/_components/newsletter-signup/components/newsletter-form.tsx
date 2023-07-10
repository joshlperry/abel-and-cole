"use client";

import { FormEvent, useEffect, useState } from "react";
import { useNewsletterReducer } from "../hooks/use-newsletter-reducer";
import { IdentifyingData } from "./identifying-data";
import { MethodsOfCommunication } from "./methods-of-communication";
import { UserPreferences } from "./user-prefences";
import {
  readNewsletterFromSession,
  storeNewsletterInSession,
} from "../lib/newsletter-storage";
import { Body, Subtitle2 } from "../../typography";

export function NewsletterForm() {
  const reducer = useNewsletterReducer();
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    const storedData = readNewsletterFromSession();
    if (storedData)
      reducer.dispatch({ type: "restore_from_storage", payload: storedData });
  }, []);

  const onFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("reducer state", reducer.state);
    storeNewsletterInSession(reducer.state);
    setHasSubmitted(true);
  };

  if (hasSubmitted) {
    return (
      <FormSubmittedThankyou
        name={reducer.state.name}
        email={reducer.state.email}
      />
    );
  }

  return (
    <form onSubmit={onFormSubmit} className="flex flex-col gap-2">
      <IdentifyingData reducer={reducer} />
      <UserPreferences reducer={reducer} />
      <MethodsOfCommunication reducer={reducer} />
      <button className="px-3 py-2 bg-brand-green text-white rounded">
        Sign-up
      </button>
    </form>
  );
}

type FormSubmittedThankyouProps = {
  name: string;
  email: string;
};
function FormSubmittedThankyou({ name, email }: FormSubmittedThankyouProps) {
  return (
    <div>
      <Subtitle2 className="mb-2">Thank you for signing up {name}!</Subtitle2>
      <Body>
        {email} has been successfully signed up. Enjoy your 20% off on your next
        order
      </Body>
    </div>
  );
}
