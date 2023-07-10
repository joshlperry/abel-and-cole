import { Header } from "./_components/header";
import { NewsletterSignUp } from "./_components/newsletter-signup";

/* Requirements Newsletter form

Text input field
- Name
- Email

Check Boxes
- Methods of communication they would be happy with from us

Dropdown Select
- Vegetarian, vegan or neither.

Check boxes
- Seasonal food
- Recipes
- Fruit
- Veg
- Drinks
- Household

+ manual tester as a guide to testing the code

PLEASE SEE "TESTER-README.md" in the root folder for qa testing guide

*/

export default function RootPage() {
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <NewsletterSignUp />
      </div>
    </div>
  );
}
