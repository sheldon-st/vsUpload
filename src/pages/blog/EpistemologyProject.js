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

import appcard from "../../img/appcard.png";
import siricard from "../../img/siricard.png";
import messagecard from "../../img/messagecard.png";
import safaricard from "../../img/safaricard.png";

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
              <p></p>
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
                  <img className="card2" src={appcard} />
                  <img className="card2" src={siricard} />
                </div>

                <div data-scroll>
                  <div className="image4 phone">
                    <img classname="phone" src={appstore} />
                    <img classname="phone" src={opt} />
                  </div>

                  <img className="card2" src={safaricard} />
                  <img className="card2" src={messagecard} />
                </div>
              </div>
              <h1 id="Maintaining Personalization">
                Maintaining Personalization
              </h1>
              <h3 id="Differential Privacy and Data Anonymization">
                Differential Privacy and Data Anonymization
              </h3>
              <p>
                Despite concerns about privacy, we have gotten used to relying
                on the convenience that the insights from big data can provide.
                Methods of obfuscation typically serve as a disruption; but
                steps can be taken to maintain these features while protecting
                the users rights to privacy. ‘Differential Privacy’ and data
                anonymization are both examples of this. By introducing a
                calculated factor of randomness into data set, meaningful
                insights can still be drawn from analysis while preventing
                specific individuals from being identified or targeted. Each
                user of Apple devices is allocated a ‘privacy budget’ for
                different services they need to collect data on, and anonymized
                information will only be shared until this threshold is met.
                This improves the usability and convenience of features that
                users may forget they rely on.{" "}
              </p>
              <h1 id="All things considered"> All things considered</h1>
              <h2 id="Fecundity">Fecundity</h2>
              <p>
                However effective these practices may be; to perform a thorough
                epistemic analysis we must consider to whom these epistemic
                benefits are delivered, and if the diversity of this
                distribution is problematic. Apple’s premium business model
                means that only a segment of the population are able to afford
                their devices, and benefit from the features they are providing.
                A study by Forrester research found that the median household
                income for Mac owners is $98,560 compared to $74,452 of Windows
                PC owners, and similarly the median iPhone app user earns
                $85,000 per year vs. $61,000 for Android phone users. This
                distribution is certainly not ideal, and we should not overlook
                the effects that this disparity can have; but in considering the
                impact to the general population, I believe the Apple’s new
                policies will have a net positive effect. The obfuscation
                features they have introduced are not necessarily revolutionary
                in terms of technology, but the public awareness of previous
                solutions was low, and they typically required sacrifices in
                terms of experience. Apples efforts to bring the capability to
                controls to the broader public are so far unprecedented. In the
                United States 46.9% of smartphone, and 27.3% of PC users own
                their devices. Instead of having to seek it out; these tools are
                presented by default and information about how data is being
                used it proactively shown to all users of their devices. Beyond
                this, giving such a large group of consumers the transparency
                and choice to obfuscate the information that companies like
                Google and Facebook rely on puts an enormous pressure on them to
                reconsider their privacy policies and transparency with users.{" "}
              </p>

              <h2 id="h2"> h2</h2>
              <h3 id="h3"> h3</h3>
              <h4 id="h4"> h4</h4>
              <h5 id="h5"> h5</h5>
              <h6 id="h6"> h6</h6>

              <div class="csl-bib-body">
                <ul class="report combineChildItems">
                  <li id="item_3CSNC54A" class="item journalArticle">
                    <h2>A Day in the Life of Your Data</h2>
                    <table>
                      <tr>
                        <th>Type</th>
                        <td>Journal Article</td>
                      </tr>
                      <tr>
                        <th>Language</th>
                        <td>en</td>
                      </tr>
                      <tr>
                        <th>Library Catalog</th>
                        <td>Zotero</td>
                      </tr>
                      <tr>
                        <th>Pages</th>
                        <td>13</td>
                      </tr>
                    </table>
                    <h3 class="notes">Notes:</h3>
                    <ul class="notes">
                      <li id="item_AWXHG7Z4">
                        <div>
                          <p>
                            Article by Apple on how a users data is treated
                            throughout a typical day. How and how often their
                            information is used, and what Apple is doing to
                            allow access to these tools while protecting their
                            user data.
                          </p>
                        </div>
                      </li>
                    </ul>
                    <h3 class="attachments">Attachments</h3>
                    <ul class="attachments">
                      <li id="item_8C3WEAQV">
                        A Day in the Life of Your Data.pdf{" "}
                      </li>
                    </ul>
                  </li>

                  <li id="item_2MVC8S5Z" class="item journalArticle">
                    <h2>Epistemic Value Theory and Social Epistemology</h2>
                    <table>
                      <tr>
                        <th>Type</th>
                        <td>Journal Article</td>
                      </tr>
                      <tr>
                        <th class="author">Author</th>
                        <td>Don Fallis</td>
                      </tr>
                      <tr>
                        <th>Abstract</th>
                        <td>
                          In order to guide the decisions of real people who
                          want to bring about good epistemic outcomes for
                          themselves and others, we need to understand our
                          epistemic values. In Knowledge in a Social World,
                          Alvin Goldman has proposed an epistemic value theory
                          that allows us to say whether one outcome is
                          epistemically better than another. However, it has
                          been suggested that Goldman’s theory is not really an
                          epistemic value theory at all because whether one
                          outcome is epistemically better than another partly
                          depends on our non-epistemic interests. In this paper,
                          I argue that an epistemic value theory that serves the
                          purposes of social epistemology must incorporate
                          nonepistemic interests in much the way that Goldman’s
                          theory does. In fact, I argue that Goldman’s theory
                          does not go far enough in this direction. In
                          particular, the epistemic value of having a particular
                          true belief should actually be weighted by how
                          interested we are in the topic.
                        </td>
                      </tr>
                      <tr>
                        <th>Date</th>
                        <td>10/2006</td>
                      </tr>
                      <tr>
                        <th>Language</th>
                        <td>en</td>
                      </tr>
                      <tr>
                        <th>Library Catalog</th>
                        <td>DOI.org (Crossref)</td>
                      </tr>
                      <tr>
                        <th>URL</th>
                        <td>
                          <a href="https://www.cambridge.org/core/product/identifier/S174236000000040X/type/journal_article">
                            https://www.cambridge.org/core/product/identifier/S174236000000040X/type/journal_article
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <th>Volume</th>
                        <td>2</td>
                      </tr>
                      <tr>
                        <th>Pages</th>
                        <td>177-188</td>
                      </tr>
                      <tr>
                        <th>Publication</th>
                        <td>Episteme</td>
                      </tr>
                      <tr>
                        <th>DOI</th>
                        <td>
                          <a href="http://doi.org/10.3366/epi.2005.2.3.177">
                            10.3366/epi.2005.2.3.177
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th>Issue</th>
                        <td>3</td>
                      </tr>
                      <tr>
                        <th>Journal Abbr</th>
                        <td>Episteme</td>
                      </tr>
                      <tr>
                        <th>ISSN</th>
                        <td>1742-3600, 1750-0117</td>
                      </tr>
                    </table>
                    <h3 class="attachments">Attachments</h3>
                    <ul class="attachments">
                      <li id="item_L2NTCVKT">
                        Fallis - 2006 - Epistemic Value Theory and Social
                        Epistemology.pdf{" "}
                      </li>
                    </ul>
                  </li>

                  <li id="item_83YSTFN8" class="item journalArticle">
                    <h2>Foundations of social epistemics</h2>
                    <table>
                      <tr>
                        <th>Type</th>
                        <td>Journal Article</td>
                      </tr>
                      <tr>
                        <th class="author">Author</th>
                        <td>Alvin I. Goldman</td>
                      </tr>
                      <tr>
                        <th>Abstract</th>
                        <td>
                          A conception of social epistemology is articulated
                          with links to studies of science and opinion in such
                          disciplines as history, sociology, and political
                          science. The conception is evaluative, though, rather
                          than purely descriptive. Three types of evalua tive
                          approaches are examined but rejected: relativism,
                          consensualism, and expertism. A fourth, truth-linked,
                          approach to intellectual evaluation is then advocated:
                          social procedures should be appraised by their
                          propensity to foster true belief. Standards of
                          evaluation in social epistemics would be much the same
                          as those in individual epis temics, only the objects
                          of evaluation would be interpersonal patterns of
                          judgment and communication, and institutional
                          practices that bear on opinion formation.
                        </td>
                      </tr>
                      <tr>
                        <th>Date</th>
                        <td>10/1987</td>
                      </tr>
                      <tr>
                        <th>Language</th>
                        <td>en</td>
                      </tr>
                      <tr>
                        <th>Library Catalog</th>
                        <td>DOI.org (Crossref)</td>
                      </tr>
                      <tr>
                        <th>URL</th>
                        <td>
                          <a href="http://link.springer.com/10.1007/BF00485444">
                            http://link.springer.com/10.1007/BF00485444
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <th>Volume</th>
                        <td>73</td>
                      </tr>
                      <tr>
                        <th>Pages</th>
                        <td>109-144</td>
                      </tr>
                      <tr>
                        <th>Publication</th>
                        <td>Synthese</td>
                      </tr>
                      <tr>
                        <th>DOI</th>
                        <td>
                          <a href="http://doi.org/10.1007/BF00485444">
                            10.1007/BF00485444
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th>Issue</th>
                        <td>1</td>
                      </tr>
                      <tr>
                        <th>Journal Abbr</th>
                        <td>Synthese</td>
                      </tr>
                      <tr>
                        <th>ISSN</th>
                        <td>0039-7857, 1573-0964</td>
                      </tr>
                    </table>
                    <h3 class="notes">Notes:</h3>
                    <ul class="notes">
                      <li id="item_Y63XIXNY">
                        <div>
                          <p>
                            Overview of Goldman's main epistemic theory; and
                            criteria. Use to establish background about how and
                            what we are evaluating for, as well as the different
                            objectives of different players being considered.
                          </p>
                        </div>
                      </li>
                    </ul>
                    <h3 class="attachments">Attachments</h3>
                    <ul class="attachments">
                      <li id="item_L3VEMQVV">
                        Goldman - 1987 - Foundations of social epistemics.pdf{" "}
                      </li>
                    </ul>
                  </li>

                  <li id="item_YH63SXZT" class="item webpage">
                    <h2>How to Obfuscate</h2>
                    <table>
                      <tr>
                        <th>Type</th>
                        <td>Web Page</td>
                      </tr>
                      <tr>
                        <th class="author">Author</th>
                        <td>Finn Brunton &amp; Helen Nissenbaum</td>
                      </tr>
                      <tr>
                        <th>Abstract</th>
                        <td>
                          During World War II, a radar operator tracks an
                          airplane over Hamburg, guiding searchlights and
                          anti-aircraft guns in relation to&amp;#8230;
                        </td>
                      </tr>
                      <tr>
                        <th>Date</th>
                        <td>2017-06-29</td>
                      </tr>
                      <tr>
                        <th>URL</th>
                        <td>
                          <a href="http://nautil.us/issue/49/the-absurd/how-to-obfuscate">
                            http://nautil.us/issue/49/the-absurd/how-to-obfuscate
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <th>Website Title</th>
                        <td>Nautilus</td>
                      </tr>
                    </table>
                    <h3 class="notes">Notes:</h3>
                    <ul class="notes">
                      <li id="item_DFIS5LWM">
                        <div>
                          <p>
                            Discusses methods of obfuscation to protect ones
                            privacy while maintaining access to tools on the
                            internet. Aligns well with several of the strategies
                            Apple has used to accomplish similar goal.
                          </p>
                        </div>
                      </li>
                    </ul>
                    <h3 class="attachments">Attachments</h3>
                    <ul class="attachments">
                      <li id="item_EISK532A">Snapshot </li>
                    </ul>
                  </li>

                  <li id="item_TT528Y4H" class="item webpage">
                    <h2>Privacy</h2>
                    <table>
                      <tr>
                        <th>Type</th>
                        <td>Web Page</td>
                      </tr>
                      <tr>
                        <th>URL</th>
                        <td>
                          <a href="https://northeastern.instructure.com/courses/88824/modules/items/5914371">
                            https://northeastern.instructure.com/courses/88824/modules/items/5914371
                          </a>
                        </td>
                      </tr>
                    </table>
                  </li>

                  <li id="item_W8EM9TW8" class="item bookSection">
                    <h2>Privacy and Information Technology</h2>
                    <table>
                      <tr>
                        <th>Type</th>
                        <td>Book Section</td>
                      </tr>
                      <tr>
                        <th class="author">Author</th>
                        <td>Jeroen van den Hoven</td>
                      </tr>
                      <tr>
                        <th class="author">Author</th>
                        <td>Martijn Blaauw</td>
                      </tr>
                      <tr>
                        <th class="author">Author</th>
                        <td>Wolter Pieters</td>
                      </tr>
                      <tr>
                        <th class="author">Author</th>
                        <td>Martijn Warnier</td>
                      </tr>
                      <tr>
                        <th class="editor">Editor</th>
                        <td>Edward N. Zalta</td>
                      </tr>
                      <tr>
                        <th>Abstract</th>
                        <td>
                          Human beings value their privacy and the protection of
                          their personalsphere of life. They value some control
                          over who knows what aboutthem. They certainly do not
                          want their personal information to beaccessible to
                          just anyone at any time. But recent advances
                          ininformation technology threaten privacy and have
                          reduced the amount ofcontrol over personal data and
                          open up the possibility of a range ofnegative
                          consequences as a result of access to personal data.
                          In thesecond half of the 20th century data protection
                          regimeshave been put in place as a response to
                          increasing levels ofprocessing of personal data. The
                          21st century has becomethe century of big data and
                          advanced information technology (e.g.forms of deep
                          learning), the rise of big tech companies and
                          theplatform economy, which comes with the storage and
                          processing ofexabytes of data., The revelations of
                          Edward Snowden, and more recently the
                          CambridgeAnalytica case (Cadwalladr &amp;
                          Graham-Harrison 2018) havedemonstrated that worries
                          about negative consequences are real. Thetechnical
                          capabilities to collect, store and search large
                          quantitiesof data concerning telephone conversations,
                          internet searches andelectronic payment are now in
                          place and are routinely used bygovernment agencies and
                          corporate actors alike. The rise of China andthe large
                          scale of use and spread of advanced digital
                          technologies forsurveillance and control have only
                          added to the concern of many. Forbusiness firms,
                          personal data about customers and potential
                          customersare now also a key asset. The scope and
                          purpose of the personal datacentred business models of
                          Big Tech (Google, Amazon, Facebook,Microsoft, Apple)
                          has been described in detail by Shoshana Zuboff(2018)
                          under the label “surveillance capitalism”. , At the
                          same time, the meaning and value of privacy remains
                          the subjectof considerable controversy. The
                          combination of increasing power ofnew technology and
                          the declining clarity and agreement on privacy
                          giverise to problems concerning law, policy and
                          ethics. Many of theseconceptual debates and issues are
                          situated in the context ofinterpretation and analysis
                          of the General Data Protection Regulation(GDPR) that
                          was adopted by the EU in spring 2018 as the successor
                          ofthe EU 1995 Directives, with application far beyond
                          the borders of theEuropean Union., The focus of this
                          article is on exploring the relationship
                          betweeninformation technology and privacy. We will
                          both illustrate thespecific threats that IT and
                          innovations in IT pose for privacy andindicate how IT
                          itself might be able to overcome theseprivacy concerns
                          by being developed in ways that can be
                          termed“privacy-sensitive”, “privacy enhancing” or
                          “privacyrespecting”. We will also discuss the role of
                          emerging technologiesin the debate, and account for
                          the way in which moral debates arethemselves affected
                          by IT.
                        </td>
                      </tr>
                      <tr>
                        <th>Date</th>
                        <td>2020</td>
                      </tr>
                      <tr>
                        <th>Library Catalog</th>
                        <td>Stanford Encyclopedia of Philosophy</td>
                      </tr>
                      <tr>
                        <th>URL</th>
                        <td>
                          <a href="https://plato.stanford.edu/archives/sum2020/entries/it-privacy/">
                            https://plato.stanford.edu/archives/sum2020/entries/it-privacy/
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <th>Publisher</th>
                        <td>Metaphysics Research Lab, Stanford University</td>
                      </tr>
                      <tr>
                        <th>Edition</th>
                        <td>Summer 2020</td>
                      </tr>
                      <tr>
                        <th>Book Title</th>
                        <td>The Stanford Encyclopedia of Philosophy</td>
                      </tr>
                    </table>
                    <h3 class="tags">Tags:</h3>
                    <ul class="tags">
                      <li>computing: and moral responsibility</li>
                      <li>ethics: search engines and</li>
                      <li>information</li>
                      <li>information technology: and moral values</li>
                      <li>privacy</li>
                      <li>social networking and ethics</li>
                    </ul>
                    <h3 class="notes">Notes:</h3>
                    <ul class="notes">
                      <li id="item_U4SL8IFG">
                        <div>
                          <p>
                            <span>
                              Helps in exploring the relationship between
                              information technology and privacy. We will both
                              illustrate the specific threats that IT and
                              innovations in IT pose for privacy and indicate
                              how IT{" "}
                            </span>
                            <em>itself</em>
                            <span>
                              {" "}
                              might be able to overcome these privacy concerns
                              by being developed in ways that can be termed
                              “privacy-sensitive”, “privacy enhancing” or
                              “privacy respecting”. We will also discuss the
                              role of emerging technologies in the debate, and
                              account for the way in which moral debates are
                              themselves affected by IT.
                            </span>
                          </p>
                        </div>
                      </li>
                    </ul>
                    <h3 class="attachments">Attachments</h3>
                    <ul class="attachments">
                      <li id="item_RJCJTQS4">SEP - Snapshot </li>
                    </ul>
                  </li>

                  <li id="item_8ASRJZUR" class="item journalArticle">
                    <h2>PRIVACY AND LACK OF KNOWLEDGE</h2>
                    <table>
                      <tr>
                        <th>Type</th>
                        <td>Journal Article</td>
                      </tr>
                      <tr>
                        <th class="author">Author</th>
                        <td>Don Fallis</td>
                      </tr>
                      <tr>
                        <th>Abstract</th>
                        <td>
                          Abstract Two sorts of connections between privacy and
                          knowledge (or lack thereof) have been suggested in the
                          philosophical literature. First, Alvin Goldman has
                          suggested that protecting privacy typically leads to
                          less knowledge being acquired. Second, several other
                          philosophers (e.g. Parent, Matheson, Blaauw and Peels)
                          have claimed that lack of knowledge is definitive of
                          having privacy. In other words, someone not knowing
                          something is necessary and sufficient for someone else
                          having privacy about that thing. Or equivalently,
                          someone knowing something is necessary and sufficient
                          for someone else losing privacy about that thing. In
                          this paper, I argue that both of these suggestions are
                          incorrect. I begin by arguing, contra Goldman, that
                          protecting privacy often leads to more knowledge being
                          acquired. I argue in the remainder of the paper,
                          contra the defenders of the knowledge account of
                          privacy , that someone knowing something is not
                          necessary for someone else losing privacy about that
                          thing.
                        </td>
                      </tr>
                      <tr>
                        <th>Date</th>
                        <td>06/2013</td>
                      </tr>
                      <tr>
                        <th>Language</th>
                        <td>en</td>
                      </tr>
                      <tr>
                        <th>Library Catalog</th>
                        <td>DOI.org (Crossref)</td>
                      </tr>
                      <tr>
                        <th>URL</th>
                        <td>
                          <a href="https://www.cambridge.org/core/product/identifier/S1742360013000130/type/journal_article">
                            https://www.cambridge.org/core/product/identifier/S1742360013000130/type/journal_article
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <th>Volume</th>
                        <td>10</td>
                      </tr>
                      <tr>
                        <th>Pages</th>
                        <td>153-166</td>
                      </tr>
                      <tr>
                        <th>Publication</th>
                        <td>Episteme</td>
                      </tr>
                      <tr>
                        <th>DOI</th>
                        <td>
                          <a href="http://doi.org/10.1017/epi.2013.13">
                            10.1017/epi.2013.13
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th>Issue</th>
                        <td>2</td>
                      </tr>
                      <tr>
                        <th>Journal Abbr</th>
                        <td>Episteme</td>
                      </tr>
                      <tr>
                        <th>ISSN</th>
                        <td>1742-3600, 1750-0117</td>
                      </tr>
                    </table>
                    <h3 class="notes">Notes:</h3>
                    <ul class="notes">
                      <li id="item_C6CSEBWY">
                        <div>
                          <p>
                            Fallis' paper on privacy and lack of knowledge draws
                            important connections between privacy and the
                            epistemic world; and provides grounds to challenge
                            Goldman's suggestion that protecting privacy usually
                            leads to less knowledge being acquired.
                          </p>
                        </div>
                      </li>
                    </ul>
                    <h3 class="attachments">Attachments</h3>
                    <ul class="attachments">
                      <li id="item_VNSGN3ZW">
                        Fallis - 2013 - PRIVACY AND LACK OF KNOWLEDGE.pdf{" "}
                      </li>
                    </ul>
                  </li>

                  <li id="item_U6KTGNVY" class="item bookSection">
                    <h2>Social Epistemology</h2>
                    <table>
                      <tr>
                        <th>Type</th>
                        <td>Book Section</td>
                      </tr>
                      <tr>
                        <th class="author">Author</th>
                        <td>Alvin Goldman</td>
                      </tr>
                      <tr>
                        <th class="author">Author</th>
                        <td>Cailin O’Connor</td>
                      </tr>
                      <tr>
                        <th class="editor">Editor</th>
                        <td>Edward N. Zalta</td>
                      </tr>
                      <tr>
                        <th>Abstract</th>
                        <td>
                          Until recently, epistemology—the study of knowledge
                          andjustified belief—was heavily individualistic in
                          focus. Theemphasis was on evaluating doxastic
                          attitudes (beliefs and disbeliefs)of individuals in
                          abstraction from their social environment.
                          Socialepistemology seeks to redress this imbalance by
                          investigating theepistemic effects of social
                          interactions and social systems. Aftergiving an
                          introduction, and reviewing the history of the field
                          insections 1 and 2, we move on to discuss central
                          topics in socialepistemology in section 3. These
                          include testimony, peer disagreement,and judgment
                          aggregation, among others. Section 4 turns to
                          recentapproaches which have used formal methods to
                          address core topics insocial epistemology, as well as
                          wider questions about the functioningof epistemic
                          communities like those in science. In section 5
                          webriefly turn to questions related to social
                          epistemology and theproper functioning of democratic
                          societies.
                        </td>
                      </tr>
                      <tr>
                        <th>Date</th>
                        <td>2021</td>
                      </tr>
                      <tr>
                        <th>Library Catalog</th>
                        <td>Stanford Encyclopedia of Philosophy</td>
                      </tr>
                      <tr>
                        <th>URL</th>
                        <td>
                          <a href="https://plato.stanford.edu/archives/win2021/entries/epistemology-social/">
                            https://plato.stanford.edu/archives/win2021/entries/epistemology-social/
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <th>Publisher</th>
                        <td>Metaphysics Research Lab, Stanford University</td>
                      </tr>
                      <tr>
                        <th>Edition</th>
                        <td>Winter 2021</td>
                      </tr>
                      <tr>
                        <th>Book Title</th>
                        <td>The Stanford Encyclopedia of Philosophy</td>
                      </tr>
                    </table>
                  </li>
                </ul>
              </div>
            </div>
          }
        />
      </div>
    </>
  );
};
export default Blog;
