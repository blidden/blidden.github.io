---
title: Accelo - Scheduling
date: "2019-03-25"
thumbnail: ./sch_thumbnail.png
description: The Schedule Dashboard was designed to solve what all professional service businesses want to avoid - is there a problem ahead? Through the use of key data insights around time, utilisation, and bookings, I helped designed a one-stop solution for resource managers who want to schedule work with confidence.
---

<div class="kg-card kg-image-card kg-width-wide">

![Darkness](./sch_feature.jpg)

</div>

---

<div class="section_title">Background</div>

## How Accelo was Managing Scheduling & Utilisation
Accelo keeps track of a significant amount of data. When a system has the ability to store information about time, budgets, and availability of a staff member across numerous projects, tasks, and activities, the amount of meaningful insights is advantageous in nature.

>For managers and business leaders who care about things like the bottom line and overall staff availability/utilisation, Accelo offers several solutions. Two of the more meaningful solutions are Team Scheduling and the Utilisation Dashboard.

Team Scheduling was designed to give managers a week-view of how certain staff members are resourced. Each day is represented as a column, with different colours representing both the time allocated, as well as a time type, for the respective day. 

<div class="kg-card kg-image-card">

![Darkness](./team_sch_old.jpg)

</div>

The Utilisation Dashboard built on some of the thinking and data points of Team Scheduling, but went further - exposing utilisation percentages on a daily basis (as well as the ability to add several staff members in order to see a more ‘grouped’ daily breakdown of time)

<div class="kg-card kg-image-card">

![Darkness](./utilisation_dash.png)

</div>

---

<div class="section_title">Process</div>

## Thinking Through Current Offerings

>“Give me six hours to chop down a tree and I will spend the first four sharpening the axe” - Abraham Lincoln

Similarly to Lincoln, with digital product design, we feel obligated to serve the user and ensure we know what the problem is before we go about solving it.

Through net promoter score (NPS) feedback, FullStory viewing sessions, and several early-stage user questionnaires, we discerned the following as primary shortcomings with these screens:

<div>
    <dt>Absence of context</dt>
    <dd>
        <p>Managers weren’t able to discern what constituted a time total on a given day. “I can see that Michael has 4 hours of booked work on Monday, however I can’t see what that work is from this screen”</p>
    </dd>
    <dt>Limited vantage point</dt>
    <dd>
        <p>Both screens were bound to a 7-day view. Managers need to see what’s coming up in the next week in order to make calculated decisions before booking someone onto a piece of work.</p>
    </dd>
    <dt>Difficulty in filtering work</dt>
    <dd>
        <p>Managers reported frustration towards searching for work to resource out, and figuring out which  work items required more immediate action versus those items not scheduled to start for some time.</p>
    </dd>
</div>

>These points, combined with several other insights, gave way to the main mission point: is there an iceberg ahead? In other words: is there a moment coming up where we, as a business, will be in budgetary strife or in danger of having a high amount of overutilized staff?

<div class="kg-card kg-image-card kg-width-wide">

![Darkness](./productAudit.jpg)

</div>

---

<div class="section_title">Research</div>

## Understanding Time & Visibility
One of our target markets was the professional services sector; companies who were charging staff members’ time at billable rates. Users and stakeholders quickly confirmed that the utilisation data point was one of the main pieces of information which influences their decision making, as it’s a key metric for their industry.

>Through early user research it became clear that I needed to focus on exposing utilisation, considering the weight it held for managers as they scheduled work.

In these sessions we’d ask detailed questions about the interviewees workflow in Accelo, and where they experienced pain points. In some instances we’d work in collaboration, using InVision or physical paper (should the interview be in person) to sketch through ideas and draw up mind maps of the user journey. 

### Competitor Research
At the time (2016) some of our main competitors in the project management/scheduling space included Mavenlink, 10,000ft, RelateIQ, and the then up-and-coming Monday.com.

<div class="kg-card kg-image-card kg-width-wide">

![Darkness](./competitors.jpg)

</div>

One of the stronger motifs among these offerings was the gantt chart. It was the ideal framework for showing large divisions of time and work, and allowed for the stacking of staff members and work items on displays of all sizes.

### Analysis
Through gathering data in earlier UX initiatives the design team and I were able to boil down the primary user base of scheduling in Accelo into three personas.

<div class="kg-card kg-image-card">

![Darkness](./acceloSch_persona1.jpg)
![Darkness](./acceloSch_persona2.jpg)
![Darkness](./acceloSch_persona3.jpg)

</div>

>After initial UX work, at a high level, the project became about helping managers answer questions like “what’s going on in my business” and “how are my staff looking, work wise, today/this week/this month”

---

<div class="section_title">Design Part #1</div>

## Exploring New Ways of Seeing Time

### Sketching
Sketching took place over the course of several weeks while the team interviewed users/stakeholders, ideated internally, and conducted workshops. Whiteboards and butsers paper were used, and rough thinking was visualised to help us gain perspective on how the designs could look.

<div class="kg-card kg-image-card">

![Darkness](./whiteboard1.jpg)
![Darkness](./whiteboard2.jpg)
![Darkness](./whiteboard3.jpg)
![Darkness](./whiteboard4.jpg)

</div>

### Wireframes
Once sketches were in a state and annotated to the point where we felt confident of obtaining the data inside Accelo, we started creating wireframes. These designs were for sharing with stakeholders and our CEO, who took special interest in the scheduling redesign project. During this phase we were thinking of visual elements such as colours, iconography, graphs, font hierarchy, and whether our design system would need to be modified.

<div class="kg-card kg-image-card">

![Darkness](./wire1.jpg)
![Darkness](./wire2.png)
![Darkness](./wire3.png)

</div>

<div class="section_title">Design Part #2</div>

## Pixels, Cards & Panels
The detail design phase was lengthy due to the amount of intricacies the newly named **Schedule Dashboard** held. Pixels matter, though, and we wanted to ensure our user base was able to take advantage of some of the insights this new dashboard was promising to deliver.

>I decided to use a ‘fluid’ page framework; ensuring that the entirety of the viewports height and width was utilised to ensure maximum legibility.

IMAGE

The left hand side (LHS) of the screen gives users the ability to choose the governing object of their view; people (‘Team’) or work. Each tab option would populate the LHS area with line items of people or work, respectively, along with other pieces of meaningful data such as the object breadcrumb, and a summary of time scheduled.

<div class="kg-card kg-image-card">

![Darkness](./sch_dash_lhs.jpg)

</div>

The right hand side (RHS) feature was a major breakthrough for the project.

>By allowing managers to click on a user’s day/week cell (depending on zoom level) I was able to show the context needed for them to make informed decisions (a major shortcoming of the Team Scheduling and Utilisation Dashboard screens).

The work items, associated time values, and time type breakdowns pertaining to a staff member were now all available via a few clicks. Similarly, clicking on a work day/week cell revealed which staff members had booked/billed time on the respective work item.

<div class="kg-card kg-image-card">

![Darkness](./sch_dash_rhs.jpg)

</div>

Hover cards we’re also utilised to expose useful pieces of data when the user hovers on a day/week cell (depending on their zoom level). Albeit a small piece, the key was to showcase some small but meaningful data points (such as their utilisation percentage for the day, the billable vs non-billable hours, and other metrics).

<div class="kg-card kg-image-card">

![Darkness](./hover_cards.jpg)

</div>

Finally, a link to the bookling modal (the centre piece of booking work out to staff members in Accelo) was made available via the RHS area. This was to encourage the manager to continue/action their workflow once they had consumed the information on the screen, and were enlightened as to what the best course of booking action was. 

<div class="kg-card kg-image-card">

![Darkness](./booking_modal.jpg)

</div>

---

<div class="section_title">Launch</div>

## Handoff, Beta & Re-Analysis
InVision was used as our main handover tool from a design perspective. Static screens were uploaded and categorised accordingly, allowing front-end developers (especially) to inspect designs and grab the correct colours, margin/padding, font properties, and dimensions of UI elements throughout the mockups. The Craft plugin was used to sync Sketch artboards with our InVision prototype.

### Functional Specification Document
The design team and I played a significant role in the development and writing out of the functional spec - which served as a reference  guide to every data point and interaction piece of the design. The product team alone owned this process, and communicated with us designers constantly to ensure business logic as covered in the designs, and articulated clearly to the developers. 

### Beta
A beta period of 4 weeks was considered the best course of action considering other company/project initiatives happening at the time. During this time the product and design team gathered user feedback via UserVoice, FullStory viewing sessions, and follow-up interviews with key stakeholders identified early in the design process. The amalgamation of these exercises led to several small features being added over the course of a few months,  as well as some bugs being caught before full public launch. 

---

<div class="section_title">Post-Launch</div>

## Re-analysing & Asking Hard Questions
Retrospective thinking is something we try to do often at Accelo. The project took 6 months to complete, so there was a lot to reflect on both individually and as a team. Some of the standard questions we explore at the completion of a project include:

<div>
    <dt>Where did our process go right? And why?</dt>
    <dd>
        <p>The team felt as though the early-stage UX processes had us in a state of flow. A large amount of work, high in quality, was achieved through our user interviews especially, and gave us the necessary insights to make user-centric decisions along the way. </p>
    </dd>
    <dt>Where did we struggle? And why?</dt>
    <dd>
        <p>The initial part of the detailed design phase was difficult, as we hadn’t finished wireframing all of our UI permutations. In some cases this can cause minor inconveniences, however due to the complexity and enormity of this project we found that there were several moments when we were designing fully detailed interfaces in Sketch where we had to return to the whiteboard for another round of sketching. This held us up and caused project delivery date problems.</p>
    </dd>
    <dt>Difficulty in filtering work</dt>
    <dd>
        <p>Feedback, to this day, continues to sing high praise of the power of the Schedule Dashboard page. Never before has Accelo offered such a lateral view of someone’s company from a work schedule perspective. The dashboard was the feature piece of Accelo roadshow displays across the United States, and was a key component in both increases in user retention and new user signups (based on insights from our internal sales and success teams).</p>
    </dd>
    <dt>Did it solve their issues and pain points?</dt>
    <dd>
        <p>Yes. Reports came back from the users we interviewed during the UX phase, stating how this new design had solved the lionshare of their pain points.</p>
        <p>The delivery of the Schedule Dashboard also introduced new mini-features based on insights we picked up along the way from interviews. Things such as editing time values on the fly via the RHS and seeing when staff members had out of office (OOO) time scheduled via icons in the cell views, all add value to the user journey when using the screen.</p>
    </dd>
</div>

>“I now feel a sense of confidence previously unattainable in Accelo. Being able to see what my team is resourced onto, and how their workloads are tracking weeks into the future, allows me to engage with new client work knowing we’ll be able to deliver!”

<div>
    <dt>Where can we improve the product?</dt>
    <dd>
        <p>Opportunities exist mainly around the actioning of insights gathered on the Schedule Dashboard. For example, a current limitation includes the inability to reschedule a piece of work from one staff members calendar onto another calendar.</p>
    </dd>
    <dt>What lessons can we take away from this process for future products?</dt>
    <dd>
        <p>Taking a more vigorous approach to the wireframe phase, in order to enable and optimise the detailed design phase, was a key lesson from this project. Taking this idea a few levels up; knowing how wide to cast the net for requirements, and understanding how to discern key components to MVP features, is something the team continues to improve on over time.</p>
    </dd>
</div>