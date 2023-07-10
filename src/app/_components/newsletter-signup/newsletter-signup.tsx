import { Caption1, Subtitle1 } from "../typography";
import { NewsletterForm } from "./components/newsletter-form";

export function NewsletterSignUp() {
  return (
    <div className="px-5 pt-6 pb-4 border md:rounded">
      <Subtitle1 className="mb-2">
        Sign up to our newsletter for 20% off your next purchase
      </Subtitle1>
      <Caption1 className="mb-5">
        Dont miss discounts and special offers on the food you love
      </Caption1>
      <NewsletterForm />
    </div>
  );
}
