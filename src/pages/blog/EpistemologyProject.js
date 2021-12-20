import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

import Navbar from "../../components/header/header.js";
import Footer from "../../components/Footer";

import Featured from "../../components/Featured";
import ParagraphSectionWork from "../../components/ParagraphSectionWork";
import Hero from "../../components/Hero";
import useLocoScroll from "../../hooks/useLocoScroll";

import { NavLink } from "react-router-dom";

import opt from "../../img/opt.png";
import privacy from "../../img/privacy.png";
import appstore from "../../img/appstore.png";
import dataImage from "../../img/dataImage.png";

const Blog = () => {
  const ref = useRef(null);

  return (
    <>
      <div
        className="blog-container"
        id="blod-container"
        data-scroll-container
        ref={ref}
      >
        <ParagraphSectionWork
          content={
            <div className="blog-container" id="blog-container">
              <h1 id="A Detailed Epistemic Evaluation of Apple’s Approach to Privacy">
                Apple: A Detailed Epistemic Evaluation of an Alternative
                Approach to Privacy
              </h1>
              <h6 id="December 2021">December 2021</h6>
              <h6 id="Stephen Sheldon">Stephen Sheldon</h6>
              <h6 id="PHIL1300 Final Project">PHIL1300 Final Project</h6>
              <h6 id="PHIL1300 Final Project">
                <a id="PHIL1300 Final Project">Rough Outline</a>
              </h6>
              <h6 id="PHIL1300 Final Project">
                <a id="PHIL1300 Final Project">Bibliography</a>
              </h6>
              <p>
                As our lives become increasingly digital, a complex system of
                social media companies, websites, apps, and ad tech firms has
                been amassing increasingly frightening amounts of personal data
                that powers a $227 billion-a-year industry. At the center of
                this are most big tech companies we have become dependent on.
                However, outliers remain; while major tech players like Google
                and Facebook have a business model centered around the
                collection and sale of user data in order to offer a range of
                mostly free services; Apple has a different strategy. By
                focusing on device, software and subscription sales they are
                able to treat users as the customer instead of product and
                prioritize privacy. The transparency and control of how user’s
                digital information is treated has always been a core value of
                the company,{" "}
              </p>
              <blockquote>
                <p>
                  “I believe people are smart and some people want to share more
                  data than other people do. Ask them. Ask them every time. Make
                  them tell you to stop asking them if they get tired of your
                  asking them. Let them know precisely what you’re going to do
                  with their data.”
                </p>
                <p>-Steve Jobs</p>
              </blockquote>
              <p>
                but as concerns regarding big data become more prevalent and
                controversial they have doubled down on their stance. Recent
                software updates have introduced a variety of features intended
                to enhance user privacy. As part of this examination we will use
                Goldmans framework to evaluate the effectiveness of these
                features in terms of the publics ability to acquire true beliefs
                freely; but also consider how Apple’s stance is challenging
                Goldmans suggestion that “protecting privacy usually leads to
                less knowledge being acquired” (Fallis). Apple does not act as a
                source of knowledge but the way in which their services change
                how you access other services have an impact on how effectively
                the user is able to obtain information. We will focus on effects
                to the speed, effeciency and fecundity of how individuals
                acquire information as a result of Apple’s protections and
                insights for using 3rd party services on their hardware, as well
                as their practices of anonymization to enable big data
                processing without relying on specific information about the
                individual.{" "}
              </p>

              <h1 id="Moral vs. Epistemic">Moral vs. Epistemic</h1>
              <p>
                Before evaluating Apple’s values and policies in regard to
                privacy we must first establish the relevance of privacy to the
                field of Epistemology. Philosophers, including Goldman, have
                argued that while morally important - the discussion of privacy
                falls outside of the epistemic realm. In his words:{" "}
              </p>
              <blockquote>
                <p>
                  “epistemology focuses on the means to knowledge enhancement,
                  whereas privacy studies focus on the means to knowledge
                  curtailment… For this reason, I shall not explore this topic.
                  I do not belittle the importance of privacy as a moral issue;
                  it simply falls, for the most part, outside the scope of
                  epistemology. (Goldman 1999: 173),
                </p>
              </blockquote>

              <p>
                I agree with much of Goldman’s work, and think his epistemic
                objectives are an excellent framework for analysis, but this
                flawed for two reasons. The practice of privacy would still be
                epistemically consequential even if it was exclusively tied to
                knowledge curtailment it would still be epistemically
                consequential; and more importantly this understanding of
                privacy is a broad generalization.{" "}
              </p>

              <h2 id="Bentham Panopticon">Bentham Panopticon</h2>
              <p>
                Bentham’s concept of the ‘Panopticon’ is a fitting analogy for
                the surveillance system that has developed through the use of
                technology. In this scenario of a hypothetical prison the
                central guard tower can see into any cell to see what is going
                at their convenience; while the prisoners have no way of knowing
                whether or not they are being watched at any given moment. In
                the context of technology big tech companies like Google and
                Facebook become the guards - with seemingly unlimited access to
                any personal information at any time; while users are the
                prisoners - having no knowledge about what aspects of their
                online lives are being monitored; when and by whom. People will
                limit how and what knowledge they acquire if always unsure who
                is monitoring them and fearful of the consequences. In a 1991
                paper philosopher Garoogian describes this as a ‘chilling
                effect.’ This fear of being monitored makes people hesitant to
                quire information they otherwise would have.{" "}
              </p>

              <p>
                With concerns about online privacy becoming more and more
                prevalent today, the impact of this effect can be clearly seen.
                According to a study by the National Cyber Security Alliance,
                nearly 74% of Americans have limited their internet use due to
                privacy concerns (TrustArc, National Cyber Security Alliance).{" "}
              </p>

              <p>
                Although we typically consider an “Epistemic Advesary”
                detrimental to our acquisition of knowledge; this phenonmem
                illustrates particular situations where they can be helpful. A
                lack of privacy may become detrimental to the power efficiency
                and reliability of the tools people, and adversaries protecting
                your privacy help to protect that. In a 2013 paper titled
                ‘Privacy and Lack of Knowledge’ Fallis brings up the the a
                librarian as an effective example of how one of these
                adversaries can be epistemically consequential:
              </p>

              <blockquote>
                <p>
                  “Librarians take very seriously the privacy of their patrons.
                  Indeed, it is a core principle in their code of ethics (see
                  Garoogian 1991 : 230). So, librarians will not release patron
                  borrowing records without a subpoena. In addition, they set up
                  library computers so that internet caches are automatically
                  erased after each patron. Thus, a record of the websites that
                  a patron has visited will not exist even if it is subpoenaed.
                  There is certainly one respect in which such practices curtail
                  knowledge acquisition. They involve withholding information
                  from people who would like to know it. For instance, in their
                  search for terrorists, the FBI would like to know which people
                  are looking up information about bomb making, but library
                  privacy measures make it more difficult for them to acquire
                  this knowledge. However, such practices also make it more
                  likely that library patrons will acquire knowledge on all
                  sorts of topics. This is because, if people are worried that
                  other people (such as FBI agents) can easily and out what
                  books they have checked out, there can be a chilling effect on
                  their use of libraries.
                </p>
              </blockquote>
              <p>
                There is certainly a cost that comes with hiding information
                when certain parties are looking for it, but as a result of
                these librarians people can feel more free and confident knowing
                exactly what information about them is being collected while
                using the web and start to overcome this “chilling effect.”{" "}
              </p>

              <h2 id="Right to Privacy">Right to Privacy</h2>
              <p>
                In order to preserve the indiviudal's online freedom we should
                define the criteria that will help reduce this 'chilling
                effect.' There are a number of different criteria that can be
                used to determine the right to privacy; but to make things
                easier we will focus these three basic 'rights' (Fallis).
              </p>
              <ol start="1">
                <li>Do not observe him</li>
                <li>
                  Do not to interfere with his control of his personal
                  information
                </li>
                <li>Do not come to know his personal info</li>
              </ol>
              <h1 id="Taking Back Control">Taking Back Control</h1>
              <p>
                Apple has certainly got a lot of attention for their recent
                efforts in privacy; but by no means are they the first company
                address this issue, nor did they pioneer the techniques they now
                hope to bring to the masses. There have been countless attempts
                of obfuscation dating back to World War II with varying success,
                but a few particular strategies have proven to be effective in
                returning these rights to the individual at some level.{" "}
              </p>

              <h2 id="Obfuscation and Chaff">Obfuscation and Chaff</h2>
              <p>
                A 2017 article by Finn Brunton & Helen Nissenbaum examines some
                of these different strategies and how they compare. They group
                these into 3 main categories: ones that{" "}
              </p>
              <p>
                <i>generate genuine but misleading signals</i> - “much as you
                would protect the contents of one vehicle by sending it out
                accompanied by several other identical vehicles, or defend a
                particular plane by filling the sky with other planes”
              </p>
              <p>
                <i>shuffle genuine signals</i> - “mixing data in an effort to
                make the extraction of patterns more difficult”
              </p>
              <p>
                <i>chaff</i> - first used to describe small bits of paper
                released from planes to throw off radar systems; Chaff relies on
                producing imitations of the signal being observed that take
                advantage of scope of the information available (Cohen).
                However, this only works if the target has a comprehensive
                understanding of their observer’s techniques.{" "}
              </p>

              <div className="image-container2" data-scroll>
                <div>
                  <h2 id="Apple’s Approach">Apple’s Approach</h2>
                  <p>
                    As a part of recent privacy efforts, Apple has released a
                    number of white papers and documents outlining their
                    objectives. Taking a look at their core ‘privacy
                    principles,’ connections can clearly be drawn to the
                    aforementioned strategies and rights we defined earlier.
                  </p>
                  <h5 id="Data Minimization">Data Minimization</h5>
                  <ul>
                    <li>
                      Services … Collecting only the minimum amount of data
                      required to deliver what you need for a given service.
                      <ul>
                        <li>Ask App Not to Track (IDFA)</li>
                        <li>Local Differtial Privacy </li>
                      </ul>
                    </li>
                    <li className="circle-checkmark">Do not observe him</li>
                    <li className="circle-checkmark">
                      Do not come to know his personal info
                    </li>
                  </ul>
                  <h5 id="On-device Processing">On-device Processing </h5>
                  <ul>
                    <li>
                      Processing data on the device, wherever possible, rather
                      than sending it to Apple servers, to protect user privacy
                      and minimize data collection.
                      <ul>
                        <li> Siri Voice Processing</li>
                        <li> Encrypted Messages</li>
                      </ul>
                    </li>
                    <li className="circle-checkmark"> Do not observe him</li>
                    <li className="circle-checkmark">
                      Do not to interfere with his control of his personal
                      information
                    </li>
                    <li className="circle-checkmark">
                      Do not come to know his personal info
                    </li>
                  </ul>
                  <h5 id="User Transparency and Control">
                    User Transparency and Control
                  </h5>
                  <ul>
                    <li>
                      Services to help Making sure that users know what data is
                      shared and how it is used, and that they can exercise
                      control over it.
                    </li>
                  </ul>

                  <ul>
                    <li>Ask App Not to Track (IDFA)</li>
                    <li>Safari Privacy Report</li>
                    <li>App Store Privacy Permissions</li>
                  </ul>
                  <li className="circle-checkmark">
                    Do not to interfere with his control of his personal
                    information
                  </li>
                  <h5 id="Security">Security </h5>
                  <ul>
                    <li>
                      Hardware and software working together to keep data
                      secure.
                      <ul>
                        <li> Included VPN/ Private Relay on all devices</li>
                        <li> Encrypted Messaging</li>
                      </ul>
                    </li>
                    <li className="circle-checkmark">
                      Do not to interfere with his control of his personal
                      information
                    </li>
                    <li className="circle-checkmark">
                      Do not come to know his personal info
                    </li>
                  </ul>
                </div>

                <img src={privacy} />
              </div>
              <div className="image-container2" data-scroll>
                <div>
                  <h2 id="Jail Break">Jail Break</h2>

                  <p>
                    If we were to think about this in the context of Bentham’s
                    Panopticon, what Apple is attempting would be like letting
                    the prisoners know when the guards are watching them, and
                    giving the prisoners a set of blinds for their cell if they
                    would prefer not be watched.
                    <p>
                      While it does not come close to eliminating all data
                      collection on the internet; Apple is making progress in
                      returning all 3 of the ‘rights’ mentioned above to their
                      users.{" "}
                    </p>
                    <ol start="1">
                      <li>They allow users to easily prevent all tracking.</li>
                      <li>
                        They disclose what trackers software and websites are
                        using and allow the user to choose which they are okay
                        with.
                      </li>
                      <li>
                        They still collect a basic level of information, but
                        encrypt the majority of private data (passwords,
                        contacts, main, etc) so it is only accessible by the
                        user.
                      </li>
                    </ol>
                    <p>
                      Through this set of beliefs they are serving as the
                      “librarians of the tech industry in some sense.” Apple
                      does not directly provide the vast amount of information
                      that companies like Google or Facebook do, but they allow
                      you to access it, and while doing so keep your information
                      confidential. And, quite literally they have been the
                      “thin blue line{" "}
                      <a href="https://www.inc.com/jason-aten/apple-wont-help-fbi-unlock-a-terrorists-iphone-heres-why-it-shouldnt.html">
                        between you and the FBI
                      </a>{" "}
                      ” on multiple occasions.{" "}
                    </p>
                    <ul>
                      <li>
                        Clear that giving users knowledge of how their data is
                        being used is epistemic benefit
                      </li>
                      <li>
                        Control over how its used and freedom all benefit people
                        using tech
                      </li>
                    </ul>
                  </p>
                </div>

                <img src={appstore} />
                <img src={opt} />
              </div>

              <h3 id="Virtual Private Networks">Virtual Private Networks</h3>
              <p>
                Information is routed through an encrypted service that prevents
                observers from seeing personal information. However, one still
                has to put trust in the company providing this service; and
                choosing to use a VPN has often come with a complicated setup
                process, network slowdowns and other technical barriers that are
                detrimental to the epistemic objectives of speed, efficiency and
                reliability.{" "}
              </p>

              {/* <img src={dataImage} /> */}

              <p>
                Notably they made the{" "}
                <a href="https://www.forbes.com/sites/johnkoetsier/2020/06/24/apple-just-made-idfa-opt-in-sending-an-80-billion-industry-into-upheaval/?sh=736c6fa712c9">
                  IDFA (Identifier For Advertisers) strictly opt-in
                </a>{" "}
                for mobile applications, integrated a VPN-like private relay
                that identifies and blocks services attempting to track you, and
                added the option to redirect your email address while creating
                accounts on their devices. Their goal is to give users a better
                picture of the entities tracking them, and allow them to make
                better informed decisions what information they choose to share
                with these other companies.{" "}
              </p>

              <p>List features?</p>

              <ul>
                <li>Do not observe him</li>
              </ul>
              <ol start="2">
                <li>
                  Do not to interfere with his control of his personal
                  information
                </li>
                <li>Do not come to know his personal info</li>
              </ol>

              <ul>
                <li>
                  Data Minimization
                  <ul>
                    <li>
                      {" "}
                      Collecting only the minimum amount of data required to
                      deliver what you need for a given service.
                    </li>
                  </ul>
                </li>
                <li>
                  On-device Processing
                  <ul>
                    <li>
                      {" "}
                      Processing data on the device, wherever possible, rather
                      than sending it to Apple servers, to protect user privacy
                      and minimize data collection.
                    </li>
                  </ul>
                </li>
                <li>
                  User Transparency and Control
                  <ul>
                    <li>
                      {" "}
                      Making sure that users know what data is shared and how it
                      is used, and that they can exercise control over it.
                    </li>
                  </ul>
                </li>
                <li>
                  Security
                  <ul>
                    <li>
                      {" "}
                      Hardware and software working together to keep data
                      secure.
                    </li>
                  </ul>
                </li>
              </ul>

              <ul>
                <li> Ask App Not to track</li>
                <li> Private Relay</li>
                <li> Encrypted Messaging</li>
                <li> Inject Noise</li>
              </ul>
              <p> </p>

              <h2 id="Fecundity">Fecundity </h2>

              <p>
                While all of these features have been implanted before, it was
                limited to techies and people often had to make sacrifices or
                pay addition services.{" "}
              </p>

              <p>
                {" "}
                Apples efforts to bring the capability to controls to the
                broader public are so far unprecendted. Instead of having to
                seek it out; these options are presented by default and
                information about how data is being used it proactively shared
              </p>

              <p>
                While the number of people using apple devices is much small
                portion of the market (16.14% august); it{" "}
              </p>
              <p>Large percent of mobile devices (stat)</p>

              <p>
                Apple has announced that it will give users the ability to
                choose to block the sharing of this unique identifier at the App
                level. Previously, consumers had to opt-out. Now when a user
                installs or updates the new iOS, a prompt will appear alerting
                the user to opt-in or opt-out of the sharing of this
                information.  
              </p>
              <p>
                <b>
                  Currently, about 70% of IOS users share their IDFA with app
                  publ
                </b>
              </p>

              <p>
                Shows that people either weren’t aware of the tracking or how to
                disable it as Now its like 5 (stat)
              </p>

              <p>Tough question </p>
              <p>
                One side is like mentioned this brings the awareness and control
                of privacy{" "}
              </p>

              <p>Not only on behalf of user but rest of society</p>
              <h1 id="Maintaining Personalization">
                Maintaining Personalization
              </h1>
              <h2 id="Bentham argument hiding like FBI example">
                Bentham argument hiding like FBI example{" "}
              </h2>

              <h3 id="Differential Privacy and Data Anonymization">
                Differential Privacy and Data Anonymization
              </h3>

              <p>
                An effective way to protect the identity of individuals within a
                data set. This has to go beyond just changing one or two
                variables as (like in the case of Netflix) connections can be
                made to reveal information. With just 3 pieces of information,
                87 percent of Americans can be uniquely identified zip code
                gender and birthdate. <b>…. add here</b> Introducing randomness
                into data set allows for big data analysis to create meaningful
                insights while preventing specific individuals from being
                identified and targeted.{" "}
              </p>

              <ul>
                <li>
                  Services like google Facebook create epistemic benefit from
                  big data and by offering services for free how could this
                  disrupt?
                </li>
                <li>
                  Convenience of services like maps and autocorrect we got used
                  to how does this work with their system
                  <ul>
                    <li>
                      {" "}
                      mention LOCAL differential privacy in regard to how they
                      obtain and learn from the user data they do
                    </li>
                    <li> FIRSt transparency but still use</li>
                  </ul>
                </li>
              </ul>
              <p>
                {" "}
                <a href="https://www.apple.com/privacy/docs/Differential_Privacy_Overview.pdf">
                  https://www.apple.com/privacy/docs/Differential_Privacy_Overview.pdf
                </a>{" "}
              </p>
              <p>
                {" "}
                <a href="https://www.apple.com/privacy/docs/A_Day_in_the_Life_of_Your_Data.pdf">
                  https://www.apple.com/privacy/docs/A_Day_in_the_Life_of_Your_Data.pdf
                </a>{" "}
              </p>
              <ul>
                <li> inject noise (OBSUFICATION)</li>
                <li> Easy to find data</li>
                <li>
                  {" "}
                  use data to improve their own features but not externally
                </li>
                <li> * QuickType suggestions</li>
                <li> Emoji suggestions</li>
                <li> Lookup Hints</li>
                <li> Safari Energy Draining Domains</li>
                <li>
                  {" "}
                  Safari Autoplay Intent Detection (macOS High Sierra) * Safari
                  Crashing Domains (iOS 11)
                </li>
                <li> Health Type Usage (iOS 10.2)</li>
              </ul>

              <h2 id="But Why?">But Why?</h2>

              <p>
                While major tech players like Google and Facebook have a
                business model centered around offering a range of mostly free
                services through the use of advertising and user data; Apple has
                a different strategy. By focusing on device and software sales
                they are able to treat users the customer and prioritize
                privacy.{" "}
              </p>

              <p>
                You are paying a higher cost of entry to be able to take
                advantage of their services, but are able to trust that they
                have no ulterior motive with your data. The transparency and
                control of how user’s digital information is treated has always
                been a core value of the company,{" "}
              </p>
              <p>
                <i>
                  “I believe people are smart and some people want to share more
                  data than other people do. Ask them. Ask them every time. Make
                  them tell you to stop asking them if they get tired of your
                  asking them. Let them know precisely what you’re going to do
                  with their data.”
                </i>
              </p>
              <p>
                <i>-Steve Jobs</i>
              </p>
              <p>
                but as concerns regarding big data become more prevalent and
                controversial they have doubled down on their stance. Recent
                software updates have introduced a variety of features intended
                to enhance user privacy.{" "}
              </p>

              <p>
                Come back to some of the readings in this conclusion. You might
                have to restate, but connect to some of the bigger things you
                have discussed in this class and you will have tied everything
                up in a neat bow
              </p>

              <p>
                . First, do you think that this technology (policy, institution
              </p>
              <p>, or practice) is a good thing all things considered</p>
              <p>? </p>

              <p>
                Second, you used a particular epistemological theory to carry
                out the epistemic evaluation of this technology (policy,
                institution, or practice). Were you able to identify any
                strengths or weaknesses of this theory as a result of carrying
                out this evaluation?
              </p>

              <p>Tough topic to consider given debate on privacy</p>
              <p>
                I like bantams contradictory principles as a guideline for
                evaluating but disagree that privacy falls outside the epistemic
                realm.{" "}
              </p>

              <p>
                However, there is a strong argument for privacy expanding for …
                and apple brings to masses ………{" "}
              </p>

              <h2 id="h2"> h2</h2>
              <h3 id="h3"> h3</h3>
              <h4 id="h4"> h4</h4>
              <h5 id="h5"> h5</h5>
              <h6 id="h6"> h6</h6>

              <div class="csl-bib-body">
                <div class="csl-entry">
                  <i>A Day in the Life of Your Data</i>. (n.d.). 13.
                </div>
                <span
                  class="Z3988"
                  title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=A%20Day%20in%20the%20Life%20of%20Your%20Data&amp;rft.pages=13&amp;rft.language=en"
                ></span>
                <div class="csl-entry">
                  Fallis, D. (2006). Epistemic Value Theory and Social
                  Epistemology. <i>Episteme</i>, <i>2</i>(3), 177–188.{" "}
                  <a href="https://doi.org/10.3366/epi.2005.2.3.177">
                    https://doi.org/10.3366/epi.2005.2.3.177
                  </a>
                </div>
                <span
                  class="Z3988"
                  title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_id=info%3Adoi%2F10.3366%2Fepi.2005.2.3.177&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Epistemic%20Value%20Theory%20and%20Social%20Epistemology&amp;rft.jtitle=Episteme&amp;rft.stitle=Episteme&amp;rft.volume=2&amp;rft.issue=3&amp;rft.aufirst=Don&amp;rft.aulast=Fallis&amp;rft.au=Don%20Fallis&amp;rft.date=2006-10&amp;rft.pages=177-188&amp;rft.spage=177&amp;rft.epage=188&amp;rft.issn=1742-3600%2C%201750-0117&amp;rft.language=en"
                ></span>
                <div class="csl-entry">
                  Fallis, D. (2013). PRIVACY AND LACK OF KNOWLEDGE.{" "}
                  <i>Episteme</i>, <i>10</i>(2), 153–166.{" "}
                  <a href="https://doi.org/10.1017/epi.2013.13">
                    https://doi.org/10.1017/epi.2013.13
                  </a>
                </div>
                <span
                  class="Z3988"
                  title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_id=info%3Adoi%2F10.1017%2Fepi.2013.13&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=PRIVACY%20AND%20LACK%20OF%20KNOWLEDGE&amp;rft.jtitle=Episteme&amp;rft.stitle=Episteme&amp;rft.volume=10&amp;rft.issue=2&amp;rft.aufirst=Don&amp;rft.aulast=Fallis&amp;rft.au=Don%20Fallis&amp;rft.date=2013-06&amp;rft.pages=153-166&amp;rft.spage=153&amp;rft.epage=166&amp;rft.issn=1742-3600%2C%201750-0117&amp;rft.language=en"
                ></span>
                <div class="csl-entry">
                  Goldman, A. I. (1987). Foundations of social epistemics.{" "}
                  <i>Synthese</i>, <i>73</i>(1), 109–144.{" "}
                  <a href="https://doi.org/10.1007/BF00485444">
                    https://doi.org/10.1007/BF00485444
                  </a>
                </div>
                <span
                  class="Z3988"
                  title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_id=info%3Adoi%2F10.1007%2FBF00485444&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Foundations%20of%20social%20epistemics&amp;rft.jtitle=Synthese&amp;rft.stitle=Synthese&amp;rft.volume=73&amp;rft.issue=1&amp;rft.aufirst=Alvin%20I.&amp;rft.aulast=Goldman&amp;rft.au=Alvin%20I.%20Goldman&amp;rft.date=1987-10&amp;rft.pages=109-144&amp;rft.spage=109&amp;rft.epage=144&amp;rft.issn=0039-7857%2C%201573-0964&amp;rft.language=en"
                ></span>
                <div class="csl-entry">
                  Goldman, A., &amp; O’Connor, C. (2021). Social Epistemology.
                  In E. N. Zalta (Ed.),{" "}
                  <i>The Stanford Encyclopedia of Philosophy</i> (Winter 2021).
                  Metaphysics Research Lab, Stanford University.{" "}
                  <a href="https://plato.stanford.edu/archives/win2021/entries/epistemology-social/">
                    https://plato.stanford.edu/archives/win2021/entries/epistemology-social/
                  </a>
                </div>
                <span
                  class="Z3988"
                  title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=bookitem&amp;rft.atitle=Social%20Epistemology&amp;rft.publisher=Metaphysics%20Research%20Lab%2C%20Stanford%20University&amp;rft.edition=Winter%202021&amp;rft.aufirst=Alvin&amp;rft.aulast=Goldman&amp;rft.au=Alvin%20Goldman&amp;rft.au=Cailin%20O%E2%80%99Connor&amp;rft.au=Edward%20N.%20Zalta&amp;rft.date=2021"
                ></span>
                <div class="csl-entry">
                  Nissenbaum, F. B. &amp; H. (2017, June 29).{" "}
                  <i>How to Obfuscate</i>. Nautilus.{" "}
                  <a href="http://nautil.us/issue/49/the-absurd/how-to-obfuscate">
                    http://nautil.us/issue/49/the-absurd/how-to-obfuscate
                  </a>
                </div>
                <span
                  class="Z3988"
                  title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=webpage&amp;rft.title=How%20to%20Obfuscate&amp;rft.description=During%20World%20War%20II%2C%20a%20radar%20operator%20tracks%20an%20airplane%20over%20Hamburg%2C%20guiding%20searchlights%20and%20anti-aircraft%20guns%20in%20relation%20to%26%238230%3B&amp;rft.identifier=http%3A%2F%2Fnautil.us%2Fissue%2F49%2Fthe-absurd%2Fhow-to-obfuscate&amp;rft.aufirst=Finn%20Brunton%20%26%20Helen&amp;rft.aulast=Nissenbaum&amp;rft.au=Finn%20Brunton%20%26%20Helen%20Nissenbaum&amp;rft.date=2017-06-29"
                ></span>
                <div class="csl-entry">
                  <i>Privacy</i>. (n.d.). Retrieved December 6, 2021, from{" "}
                  <a href="https://northeastern.instructure.com/courses/88824/modules/items/5914371">
                    https://northeastern.instructure.com/courses/88824/modules/items/5914371
                  </a>
                </div>
                <span
                  class="Z3988"
                  title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=webpage&amp;rft.title=Privacy&amp;rft.identifier=https%3A%2F%2Fnortheastern.instructure.com%2Fcourses%2F88824%2Fmodules%2Fitems%2F5914371"
                ></span>
                <div class="csl-entry">
                  van den Hoven, J., Blaauw, M., Pieters, W., &amp; Warnier, M.
                  (2020). Privacy and Information Technology. In E. N. Zalta
                  (Ed.), <i>The Stanford Encyclopedia of Philosophy</i> (Summer
                  2020). Metaphysics Research Lab, Stanford University.{" "}
                  <a href="https://plato.stanford.edu/archives/sum2020/entries/it-privacy/">
                    https://plato.stanford.edu/archives/sum2020/entries/it-privacy/
                  </a>
                </div>
                <span
                  class="Z3988"
                  title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=bookitem&amp;rft.atitle=Privacy%20and%20Information%20Technology&amp;rft.publisher=Metaphysics%20Research%20Lab%2C%20Stanford%20University&amp;rft.edition=Summer%202020&amp;rft.aufirst=Jeroen&amp;rft.aulast=van%20den%20Hoven&amp;rft.au=Jeroen%20van%20den%20Hoven&amp;rft.au=Martijn%20Blaauw&amp;rft.au=Wolter%20Pieters&amp;rft.au=Martijn%20Warnier&amp;rft.au=Edward%20N.%20Zalta&amp;rft.date=2020"
                ></span>
              </div>
            </div>
          }
        />
      </div>
    </>
  );
};
export default Blog;
