import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";

import SplitText from "../../utils/Split3.min"; 

import gsap from "gsap";

import useOnScreen from "../../hooks/useOnScreen";

import "./style.scss";
import SectionHeader from "../SectionHeader/SectionHeader.js";



import "./style.scss";

export default function ParagraphSection() {
  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#headline", { type: "lines" });

      gsap.to(split.lines, {
        duration: 1,
        y: -20,
        opacity: 1,
        stagger: 0.1,
        ease: "power4.out",
        // onComplete: () => split.revert(),
      });
    }
  }, [reveal]);

  return (
    <section
      data-scroll-section
      className="blogContainer"
    >
<<<<<<< HEAD
      <h1> Hello! </h1>
      <p ref={ref} id="headline" className={cn({ "is-reveal": reveal })}>
      I’m a student, designer, and developer from Boston, Massachusetts - who is passionate about finding creative and beautiful solutions to all kinds of problems. I work mostly with UI/UX design and front-end web development.

      <p>Checks out of some my work</p>
      </p>
=======
      <h1 id="Exploring the Epistemic and Economic Impacts of Apples Stance on Privacy">Exploring the Epistemic and Economic Impacts of Apples Stance on Privacy </h1>
<h3 id="The Bentham Panopticon of Tech">The Bentham Panopticon of Tech</h3>
<p>The concept of a ‘Bentham Panopticon’ is a fitting analogy for the surveillance system that has developed through the use of big data. In this scenario the central guard tower can see into any cell to see what is going at their convenience; while the prisoners have no way of knowing whether or not they are being watched at any given moment.</p>
<p>In the context of technology big tech companies like Google and Facebook are the guards - with access to any personal information at any time; while users are the prisoners - with no knowledge of what aspects of their online lives are being monitored; when and by whom. </p>

<h3 id="Right to privacy"> Right to privacy </h3>
<p>I support the concept of a right to privacy on a conceptual level; but it gets really complicated when we try to actually define these rights and what kinds of behavior on the behalf of corporations or government should be considered a violation of them. </p>

<p>To make things easy we can look at these three basic ‘rights’:</p>
<ol start="1"><li>Do not observe him
</li><li>Do not to interfere with his control of his personal information
</li><li>Do not come to know his personal info
</li></ol>

<p>These might sound good but in reality, very few of us are able to enjoy of these ‘rights’. The technology services we rely on have become so integrated into our lives that it is hard to separate the control of the information they collect; and governments around the world have not been shy to use this to keep an eye on their citizens. </p>
<p>There are certainly examples of clear violations of these “rights” by corporations and governments. </p>
<p>One of the more prominent examples within big tech was the <a href="https://www.nytimes.com/2018/04/04/us/politics/cambridge-analytica-scandal-fallout.html">Facebook–Cambridge Analytica data scandal </a> in 2018. Here a dataset with user information was sold to a third party company but then used in a manner that is outside the terms and conditions users originally agreed to when providing it. Even an informed and consenting customer would have had no way of knowing who what and how their personal information is being used - and have no control of how it is used once it leaves  </p>
<p>However, I do not think it is fair to classify every instance where someone is deprived of these freedoms as a violation of their rights. If a company is providing a valuable service for little/no cost; and they are transparent in what information you are agreeing to disclose in return I find it hard to put to fault them. It becomes the customers responsibility to make sure they are informed and willing to sacrifice some amount of privacy in exchange for whatever benefits the service is offering before skipping the terms of service and getting started. </p>

<h3 id="How Apple is Attempting to Disrupt This">How Apple is Attempting to Disrupt This </h3>
<p>While major tech players like Google and Facebook have a business model centered around offering a range of mostly free services through the use of advertising and user data; Apple has a different strategy. By focusing on device and software sales they are able to treat users the customer and prioritize privacy. </p>

<p>You are paying a higher cost of entry to be able to take advantage of their services, but are able to trust that they have no ulterior motive with your data. The transparency and control of how user’s digital information is treated has always been a core value of the company, </p>
<blockquote>
<p>“I believe people are smart and some people want to share more data than other people do. Ask them. Ask them every time. Make them tell you to stop asking them if they get tired of your asking them. Let them know precisely what you’re going to do with their data.”</p>
<p>-Steve Jobs</p>
</blockquote>
<p>but as concerns regarding big data become more prevalent and controversial they have doubled down on their stance. Recent software updates have introduced a variety of features intended to enhance user privacy. Notably they made the <a href="https://www.forbes.com/sites/johnkoetsier/2020/06/24/apple-just-made-idfa-opt-in-sending-an-80-billion-industry-into-upheaval/?sh=736c6fa712c9">IDFA (Identifier For Advertisers) strictly opt-in</a>for mobile applications,  integrated a VPN-like private relay that identifies and blocks services attempting to track you, and added the option to redirect your email address while creating accounts on their devices. Their goal is to give users a better picture of the entities tracking them, and allow them to make better informed decisions what information they choose to share with these other companies.  </p>

<h3 id="Jail Break">Jail Break</h3>
<p>If we were to think about this in the context of Bentham’s Panopticon, what Apple is attempting would be like letting the prisoners know when the guards are watching them, and giving the prisoners a set of blinds for their cell if they would prefer not be watched. </p>

<h3 id="Giving back your ‘rights’ to privacy">Giving back your ‘rights’ to privacy</h3>
<p>While it does not come close to eliminating all data collection on the internet; Apple is making progress in returning all 3 of the ‘rights’ mentioned above to their users. </p>
<ol start="1"><li>They allow users to easily prevent all tracking.
</li><li>They disclose what trackers software and websites are using and allow the user to choose which they are okay with.
</li><li>They still collect a basic level of information, but encrypt the majority of private data (passwords, contacts, main, etc) so it is only accessible by the user.
</li></ol>

<h3 id="“Librarians” of the Tech Industry">“Librarians” of the Tech Industry</h3>
<p>This seemed like a fitting analogy for their role. Apple does not directly provide the vast amount of information that companies like Google or Facebook do, but they allow you to access it, and while doing so keep your information confidential. And, quite literally they have been the “thin blue line <a href="https://www.inc.com/jason-aten/apple-wont-help-fbi-unlock-a-terrorists-iphone-heres-why-it-shouldnt.html">between you and the FBI</a>” on multiple occasions. </p>

<h3 id="To Consider">To Consider</h3>
<p>In this blog post I have focused more on the benefits of Apple’s business model and stance on privacy, but it is definitely not without it’s disadvantages. For one, the higher cost of their products limits who can have access to this level of privacy; and runs the risk of marginalizing certain communities. Regardless, it is an undeniably interesting model; below are some questions to continue consider regarding this topic:</p>
<ul><li>To you is the control over your privacy worth the extra cost of entry?
</li><li>How could this impact the performance and policies of other companies reliant on this data? (<a href="https://www.forbes.com/sites/johnkoetsier/2021/01/22/apple-privacy-change-may-cost-facebook-google-25-billion-over-next-12-months/?sh=32f330d5695f">Interesting article</a> about this)
</li><li>If you own an apple device have you seen these new privacy features and do you opt into them?
</li><li>Does privacy features influence your decision of choosing a new piece of technology either hardware (computer / phone) or software (browser, etc.)</li></ul>
>>>>>>> d1d02d61ea0ec993df794a66dfc5d511d02f164a



    </section>
  );
}