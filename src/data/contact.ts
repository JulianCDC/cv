import email from "../assets/images/email.png";
import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";
import location from "../assets/images/location.png";

type Contact = {
  icon: string;
  content: string;
};

const contact: Contact[] = [
  { content: "julian.gardez@outlook.com", icon: email },
  { content: "59300, Valenciennes", icon: location },
  // { content: "07 69 55 90 79", icon: phone },
  { content: "linkedin.com/in/juliangardez", icon: linkedin },
  { content: "github.com/JulianCDC", icon: github }
];

export default contact;
