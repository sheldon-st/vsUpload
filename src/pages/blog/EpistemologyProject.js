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
              <h6 id="PHIL1300 Final Project">Rough Outline</h6>

              <ul>
                <li>
                  Intro to technology
                  <ul>
                    <li> what google / Facebook do</li>
                    <li> apples stance and 2 sides</li>
                    <li> business models</li>
                  </ul>
                </li>
                <li>
                  Will use Goldmans framework to evaluate … in terms of …’s
                  ability to acquire … true beliefs. Also examine …
                  <ul>
                    <li>
                      {" "}
                      how apple is challenging Goldmans suggestion that
                      “protecting privacy usually leads to less knowledge being
                      acquired” (Fallis)
                      <ul>
                        <li>
                          {" "}
                          both stance on privacy and user control of information
                        </li>
                        <li>
                          {" "}
                          practices of anonymizing data to enable big data
                          processing without relying on information about the
                          individual
                          <ul>
                            <li>
                              {" "}
                              strategies adopted to provide info and big data
                              without personal
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      {" "}
                      THESIS: Apples Privacy technology represents
                      XXXXXXXXXXXXXX (connecting to the philosophy/rights
                      concepts you will explore)
                    </li>
                  </ul>
                </li>
                <li>
                  5 objectives - Apple does not act as a source of knowledge but
                  the way in which their services change how you access other
                  services have an impact on how effective these 5 objectives
                  are accomplished.
                </li>
                <li>
                  directly act a source for the compilation of information but
                  rather … However; apple’s model allows access to other
                  services on the internet that provide
                  <ul>
                    <li>
                      {" "}
                      Reliability
                      <ul>
                        <li> Ratio of truths to total number of beliefs</li>
                        <li> prevents error but does not combat ignorance</li>
                      </ul>
                    </li>
                    <li>
                      {" "}
                      Power
                      <ul>
                        <li>
                          {" "}
                          problem solving or question answering power of a
                          practices
                        </li>
                        <li>
                          {" "}
                          ability of practice to help people find and believe
                          true answers to topics that interest them
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <p> </p>

              <p>What type of knowledge - general but not direct … </p>
              <p>What type of people - </p>
              <p> General consumer market; </p>
              <p> Speed </p>
              <ul>
                <li> relative speed of getting answers</li>
                <li> Efficiency</li>
                <li> promote acquisition at a lower cost</li>
                <li> apple is both very and not at all efficient</li>
                <li>
                  {" "}
                  Taken privacy from something that mostly technologically
                  skilled could requires users to make sacrifices, pay
                  additional fees or go through complicated process to being
                  bundled with devices and on by default to general public
                </li>
                <li>
                  {" "}
                  users who are not buying these devices for this purpose or are
                  not aware are made aware through proactive …
                </li>
                <li></li>
              </ul>

              <p>
                Detrimental to Fecundity the ability to precipitate truths to a
                large and diverse group of people not just the elite in a
                certain field{" "}
              </p>

              <h1 id="Moral vs. Epistemic">Moral vs. Epistemic</h1>

              <p className="p2">
                Some (Goldman) might say it is entirely of a moral issue but
                there are serious epistemic consequences as well …{" "}
              </p>

              <p>
                State of our privacy has created a “chilling effect” (Garoogian
                1991) where the fear of being monitored makes people hesitant to
                quire information they otherwise would have. Although we
                typically consider the an “Epistemic Advesaries” detrimental to
                our acquisition of knowledge; this phenonmem allows for
                particular situations where they can be helpful.{" "}
              </p>

              <p>The classic example of this is a librarian; </p>
              <p>
                considering librarians example they provide their patrons enough
                sense{" "}
              </p>
              <ul>
                <li>
                  people can feel more free and confident knowing exactly what
                  information about them is being collected while using the web
                  and can overcome the “chilling effect”
                </li>
                <li>
                  benefits of anonymity
                  <ul>
                    <li>
                      {" "}
                      whistleblowers and ability to share information that one
                      wouldn’t otherwise
                    </li>
                    <li>
                      {" "}
                      <b>
                        About 74% of Americans have limited their internet use
                        due to privacy concerns.
                      </b>
                    </li>
                    <li> (TrustArc, National Cyber Security Alliance)</li>
                    <li>
                      {" "}
                      US internet usage statistics show that internet users in
                      America are becoming more{" "}
                      <a href="https://dataprot.net/articles/biggest-data-breaches/">
                        cautious about sharing their data online
                      </a>{" "}
                      . Out of 74% of users who said that they limit their
                      internet use, about 51% have done so by not clicking on
                      ads, 44% withheld personal information, and 32% haven’t
                      downloaded an app or product due to privacy concerns.
                      What’s more, out of all internet users in the USA who
                      stopped using a website or mobile app, 47% said they did
                      so because they were asked to provide too much personal
                      information.
                    </li>
                  </ul>
                </li>
              </ul>

              <ul>
                <li>
                  promotes knowledge on behalf of the people using it for the
                  above reasons
                </li>
                <li></li>
              </ul>

              <h2 id="Bentham Panopticon">Bentham Panopticon</h2>

              <ul>
                <li>
                  Bentham’s concept of the ‘Panopticon’ is a fitting analogy for
                  the surveillance system that has developed through the use of
                  technology. In this scenario of a hypothetical prison the
                  central guard tower can see into any cell to see what is going
                  at their convenience; while the prisoners have no way of
                  knowing whether or not they are being watched at any given
                  moment. In the context of technology big tech companies like
                  Google and Facebook become the guards - with seemingly
                  unlimited access to any personal information at any time;
                  while users are the prisoners - having no knowledge about what
                  aspects of their online lives are being monitored; when and by
                  whom.
                </li>
              </ul>

              <ul>
                <li>
                  {" "}
                  People will limit how and what knowledge they aquire if always
                  unsure who is monitoring them and fearful of the consequences
                  <ul>
                    <li>
                      {" "}
                      Detrimental to the power efficiency and reliability of
                      tools people are using as a result
                    </li>
                  </ul>
                </li>
                <li>
                  {" "}
                  they are the librarians allowing you access to the information
                  without selling you out
                </li>
              </ul>

              <h2 id="Right to Privacy">Right to Privacy</h2>

              <ul>
                <li>Right to a private space that others can’t invade</li>
              </ul>
              <p>
                To make things easy we can look at these three basic ‘rights’:
              </p>
              <ol start="1">
                <li>Do not observe him</li>
                <li>
                  Do not to interfere with his control of his personal
                  information
                </li>
                <li>
                  Do not come to know his personal info
                  <ol start="1">
                    <li>Defined by Fallis</li>
                  </ol>
                </li>
              </ol>

              <h1 id="Taking Back Control">Taking Back Control</h1>

              <p className="p2">
                Apple has certainly got a lot of attention for their recent
                efforts in privacy; but by no means are they the first company
                address this issue, nor did they pioneer the techniques they now
                hope to bring to the masses. Although there have been countless
                attempts with varying success - a few particular strategies have
                proven to be effective at some level in returning these rights
                to the individual.{" "}
              </p>

              <h2 id="Virtual Private Networks">Virtual Private Networks</h2>

              <p>
                Information is routed through an encrypted service that prevents
                observers from seeing personal information. However, one still
                has to put trust in the company providing this service; and
                choosing to use a VPN has often come with a complicated setup
                process, network slowdowns and other technical barriers that are
                detrimental to the epistemic objectives of speed, efficiency and
                reliability.{" "}
              </p>

              <h2 id="Obfuscation and Chaff">Obfuscation and Chaff</h2>

              <p>
                The example of chaff also helps us to distinguish, at the most
                basic level, between approaches to obfuscation. Chaff relies on
                producing echoes—imitations of the real thing—that exploit the
                limited scope of the observer. (Cohen “decoy strategy.”<b>2</b>)
                As we will see, some forms of obfuscation{" "}
                <i>generate genuine but misleading signals</i>“much as you would
                protect the contents of one vehicle by sending it out
                accompanied by several other identical vehicles, or defend a
                particular plane by filling the sky with other planes—whereas
                other forms <i>shuffle genuine signals</i>, mixing data in an
                effort to make the extraction of patterns more difficult Because
                those who scatter chaff have exact knowledge of their adversary,
                chaff doesn’t have to do either of these things.” (Nissenbaum)
              </p>

              <h3 id="TrackMeNot">TrackMeNot</h3>

              <p className="p2">
                The solution TrackMeNot offers is not to hide users’ queries
                from search engines (an impractical method, in view of the need
                for query satisfaction), but to obfuscate by automatically
                generating queries from a “seed list” of terms. Initially culled
                from RSS feeds, these terms evolve so that different users
                develop different seed lists. The precision of the imitation is
                continually refined by repopulating the seed list with new terms
                generated from returns to search queries. TrackMeNot submits
                queries in a manner that tries to mimic real users’ search
                behaviors. For example, a user who has searched for “good
                wifi-cafe Chelsea” may also have searched for “Savannah
                kennels,” “freshly pressed juice Miami,” “Asian property firm,”
                “exercise delays dementia,” and “telescoping halogen light.” The
                activities of individuals are masked by those of many ghosts,
                making the pattern harder to discern so that it becomes much
                more difficult to say of any query that it was a product of
                human intention rather than an automatic output of TrackMeNot.
                In this way, TrackMeNot extends the role of obfuscation, in some
                situations, to include plausible deniability.
              </p>

              <h3 id="AdNauseam">AdNauseam</h3>

              <p className="p2">
                Efforts to find some middle ground through a Do Not Track
                technical standard had been frustrated by powerful actors in the
                political economy of targeted advertising. In this climate of no
                compromise, AdNauseam was born. Its design was inspired by a
                slender insight into the prevailing business model, which
                charges prospective advertisers a premium for delivering viewers
                with proven interest in their products. What more telling
                evidence is there of interest than clicks on particular ads?
                Clicks also sometimes constitute the basis of payment to an ad
                network and to the ad-hosting website. Clicks on ads, in
                combination with other data streams, build up the profiles of
                tracked users. Like the French radar decoy systems, AdNauseam
                isn’t aiming to destroy the ability to track clicks; instead it
                functions by diminishing the value of those clicks by
                obfuscating the real clicks with clicks that it generates
                automatically.
              </p>

              <h2 id="What worked or didn’t">What worked or didn’t</h2>
              <p>
                These all provided value but were either hard to use or blah
                blah
              </p>

              <h2 id="Differential Privacy and Data Anonymization">
                Differential Privacy and Data Anonymization
              </h2>

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

              <div className="image-container2" data-scroll>
                <div>
                  <h2 id="Apple’s Approach">Apple’s Approach</h2>
                  <p>
                    Seem remarkably similar to these humans rights and take full
                    advantage of .. Despite not revolutionizing they have taken
                    these features and included them in devices that people
                    enjoy using so they do not have to sacrifice convenience or
                    speed to take advantage of it; and are presented with the
                    option rather than having to seek it out
                  </p>

                  <h5 id="Data Minimization">Data Minimization</h5>
                  <ul>
                    <li>
                      Services … Collecting only the minimum amount of data
                      required to deliver what you need for a given service.
                      <ul>
                        <li> Siri</li>
                        <li> …</li>
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
                        <li> Siri m</li>
                        <li> messages</li>
                        <li> …</li>
                      </ul>
                    </li>
                    <li className="circle-checkmark"> Do not observe him</li>
                    <li className="circle-checkmark">
                      {" "}
                      Do not to interfere with his control of his personal
                      information
                    </li>
                    <li className="circle-checkmark">
                      {" "}
                      Do not come to know his personal info
                    </li>
                  </ul>

                  <h5 id="User Transparency and Control">
                    User Transparency and Control{" "}
                  </h5>
                  <p>
                    Services to help Making sure that users know what data is
                    shared and how it is used, and that they can exercise
                    control over it.
                  </p>
                  <ul>
                    <li> IDFA Opt-In</li>
                    <li> …</li>
                  </ul>
                  <li className="circle-checkmark">
                    {" "}
                    Do not to interfere with his control of his personal
                    information
                  </li>

                  <h5 id="Security">Security </h5>
                  <ul>
                    <li>
                      Hardware and software working together to keep data
                      secure.
                      <ul>
                        <li> vpn</li>
                        <li> private relay</li>
                        <li> encrypted messaging</li>
                        <li> …</li>
                      </ul>
                    </li>
                    <li className="circle-checkmark">
                      {" "}
                      Do not to interfere with his control of his personal
                      information
                    </li>
                    <li className="circle-checkmark">
                      {" "}
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
            </div>
          }
        />
      </div>
    </>
  );
};
export default Blog;
