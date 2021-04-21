import email from "../assets/images/email.png";
import github from "../assets/images/github.png";
import location from "../assets/images/location.png";
import phone from "../assets/images/phone.png";

type Contact = {
  icon: string;
  content: string;
};

const contact: Contact[] = [
  { content: "mail@juliancdc.dev", icon: email },
  { content: "07 69 55 90 79", icon: phone },
  { content: "59300, Valenciennes", icon: location },
  { content: "github.com/JulianCDC", icon: github }
];

export default contact;
