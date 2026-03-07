---
title: Engineering on Vibes
description: Experimenting with letting go of the process
pubDate: 2026-02-15 16:21
icon: LiNotebookPen
---
Buckle up, buttercup, this one is going to be girthy...

As always, you can view this projects source code over on my [GitHub](https://github.com/kyle-undefined/undefinedlabs.tech).
### A little Backstory...

I've been in this industry for 2 decades now, if you count the high school years, and sometimes I *don't* want to write every single line of code. Don't get me wrong, I truly enjoy what I do, and I couldn't imagine doing anything else. But as I've gotten older, and more experienced, I have refined what I enjoy about the craft. Younger me confused the enjoyment of engineering and solving problems, with how productive I was and how *quick* I could solve it. I still enjoy being quick and accurate, current role depends on it, but what I enjoy the most is things being done right. I'm a control freak when it comes to my code, it's an unfortunate side effect of the career path I've taken, but it stems more from pride in my work than anything else. I've been trained to bust some ass though, I tell you h'what!

Just a high level of what I'm talking about... First company right out of high school was building websites for clients. I learned so much being there, I have to give them their dues for that, but that's as far as it goes. Long story short, I was promised a Development Manager position as long as I busted my ass and delivered. I know for a 100% fact I did, but it was `re-promised` to snag a potential hire. I had templated out our entire product offering, overhauled and optimized systems, implemented mobile before it was standard and was front line support. You can call that being naive, or bad management, I think it's both. 

A year later I had landed at a job I felt at home doing web for the marketing team, at a cybersecurity focused company. This place really kicked everything into high gear for me. For starters, I was the only developer for that department. The team I worked with, and the teams I interacted with, were amazing! (`What other job pays you to design cars in Forza just for a marketing campaign?`) The job itself was stressful, especially when you go from "being the helper" to owing the entire web brand. I was building Excel sheets with more logic than I care to ever explain. Just to have RoI/Quote/etc. calculations that clients could use. Don't get me started on the marketing jargon software...

The day before Christmas in 2012 I was let go from the company, all because my name was drawn from a hat, and I swear I'm not making that up! I know because I was hired back a week later when the vertical I was a part of bought themselves out from the parent company, and the teams I worked with reached out. I felt like I was at my prime during these years, but also working 12-14 hour days all week, every week, is not healthy. I moved to an apartment right next to the office, so it would take me a literal minute to walk out the door and sit at my desk.

With the new company, I had a much bigger role than I thought I already had, as I didn't know the horrors of `corporate rebranding` until now. In the madness of this place, in order to meet a deadline and launch, I rolled my own CMS. Simply because the budget for the one we wanted hadn't been approved and the onboarding process was longer than we had. In a weeks time I built a fully customizable, database driven CMS that allowed the copy team to start the tedious process of putting that in, while the design team and I made it look pretty. This worked really well, up until 2 days before launch and the new group policy completely wiped the source code from my machine. All because I wasn't in the main "dev group" since I was in the Marketing department. To make matters worse, the files were restored, but as a giant zip that contained `file.cs, file(1).cs, file(2).cs` and etc.

Who has two thumbs and had to work overtime to restore the project one file at a time?![This guyyyyy meme](https://media.tenor.com/4vzTFsP-jNUAAAAM/office-me.gif "This guyyyyy")

Thankfully, not too long after launch, the budget was finally approved and we made the swap to the much better CMS which did make my life a hell of a lot easier. Still owned all things web, but was in a properly managed system compared to what I had made in the short time I had. After a couple of years of having a rotating door of CMO's every 6 months and a new redesign every time someone joined, the team slowly went their own ways. 

The company I am at now, I am part of an Engineering Support team that sits between first response and devs. I joined initially as a Support person, and built the internal tool to package up our deployments that could contain 100's of files, that people (`myself included`) were making by hand. That tool has evolved, the company has evolved, the role has evolved, and so have I.
### Now with that out of the Way...

That was a bit longer of an introduction that I had planned, but I can be a yapper.

With the talk over the year and a half being that "`We're 6 to 8 months away from AI replacing all engineers`" every 6 months, I wanted to at least give it all an honest try. That kind of talk really did put a sour taste in my mouth and kept me hesitant. Not because I think I'm irreplaceable, or a god engineer, but because every attempt I had made to use AI in some sort of workflow was just frustrating.

I try to keep up to speed with AI, I think it can be a really useful tool, but it's hard to wade through all the buzzword hype nonsense and get a true understanding without getting your hands dirty. I've been slowly utilizing AI more for brainstorming and helping me learn and understand coding projects. I haven't tried to "vibecode" anything, as having the model ignore the instructions of 

> I have created a unit test @test and it has tests for x, y, z. Please create another unit test for @service utilizing the same testing framework for these methods/functions a, b, c

literally sent me over the edge. Just ignore the framework I want to use, and substitute your own, anyway...

The models and harnesses have improved a lot since those days, and seeing how Opus 4.6 and Codex 5.3 both dropped a day or so before I thought about this experiment, I figured there's no better time than the present. It also doesn't hurt that $20 for Codex gives you insane usage limits due to the recent model launch and them being more generous than normal. I also signed up for the $20 for Claude, as I'm not trying to do Ralph loops over here.

I'll go ahead and say this process was actually enjoyable, and I did have fun with this project. My only gripe is due to my lack of understanding of the API's and rate limits and best way to utilize that for stuff. However, I'll get into that later on in this post. One thing I found interesting, was that Claude *loved* taking your change, and making sure there was no backwards compatibility issue. That's pretty neat, but did get in the way a few times during this project.
### The idea

I have been wanting to build my own ShareX hosting site for a few years now, and have started it countless times with different tech stacks, methodologies, and impossible designs just to push the limit of what's capable. It's not a very high priority project for me, as you can tell, since it's taken me this long to do something so simple. It's literally a web server, a database, and some endpoints. Should have been knocked out in a weekend, but the simplicity of it made it **booooooring** to me. I wanted the end product, but I didn't want to write out the same type of code I do as a job, I wanted something different.

With my quest of doing more front-end stuff, I have heard about this service called [Convex](https://www.convex.dev/). I have been wanting to play with it ever since I read the docs, as it's a badass service! It's a Backend as a Service (`BaaS`) that you can host yourself or pay for them to host it (`The pricing ain't bad either`). That really sunk deep due to the home lab I'm working on setting up. Two of my recent projects I am building with the sole purpose of using Convex with, haven't even gotten to the point of setting it up.

I wanted to use Blazor for this project, if I could, as I made an attempt forever ago when it was first coming around, but that didn't go so well. I did end up making my first [Nuget](https://github.com/Kyle-Undefined/Blazaco) package for Blazor, but that's long been dead. I wasn't fully convinced this was doable yet. Convex is mostly used with TypeScript frameworks as the database, queries/mutations, and functions are code in your project. They don't have any official C# packages, like they do for the main frameworks, including Python and Rust. So before I could try this experiment, I had to see if it was even possible.

I did a lot of research into possibly having to write my own wrapper for this project, which I was down for, but wasn't looking forward to it. Luckily, I came across an [unofficial](https://github.com/zakstam/convex-dotnet-unofficial) .Net package which saved me all of that headache. Researching that lead to even more questions about the package, which is when I used this tool a creator I follow created, called [Better Context](https://btca.dev/) which is pretty neat. It allows you to clone the repo of a project and use a model to converse with the code, and isn't made for how I used it, but the free 5 questions is all I needed. Blazor is noted as "Compatible" and the main reason why I want to try out Convex is for the sync engine. That is their selling point, outside of being a seemingly awesome company. Having the instant sync of data from the backend to the front-end without having to do it yourself, is honestly magical. Knowing that was the main driving factor behind wanting to use Convex, I used the BTCA tool and asked:

> @convexDotnetUnofficial it says that Blazor is Compatible, but asp.net core is Full Support. is the compatible in terms of just client side only Blazor, or also Blazor Server? if i was using Blazor Server, would that be fully supported? or if Blazor is only Compatible, what isn't supported on the Blazor side? the only thing i want is file storage, queries/mutations, and real-time subscriptions.

It spit out a simple to understand, yet detailed breakdown of what I want and what is supported from the package. Good news, everything I wanted to utilize, I could!

I guess I should stop and explain why I chose C# for this, instead of just using a more popular and supported option. I know my limits when it comes to TypeScript, and I'm more proficient in the .Net ecosystem than the React/Angular/Vue side. I know I could look at the code, and say it "`looks good`" but I wouldn't fully understand all of it to *know* if it's good or bad. Don't worry your sweet little head, I am working on a couple of TanStack projects with Convex which is way more complicated than this. I just wanted to have foundational knowledge of what was being done, and not have to second guess every thing. This is just a project for myself, and seeing how far it can be taken.
### The Plan

Now that I knew what I wanted to build, how I wanted it built, I just had to architect it a bit before I could begin. I started by mapping out the endpoints, the routing, data flow, auth flow, hosting, and pretty much everything else I could think of.

Speaking of hosting, I knew I wanted to self-host Convex (`Why? Because why not?`), and I knew I'd need an actual VPS as this wouldn't work with my go-to, GitHub Pages. I initially started off with the thought process of wanting to use [Coolify](https://coolify.io/), as it allows me to set up my own type of Auto Deploy system. I later swapped to [Dokploy](https://dokploy.com/) at last minute after doing more research into Coolify. The performance, alternatives, etc., I also liked the UI of Dokploy more, and it seemed more fleshed out with how I wanted to use it.

There is one more step we can do, which *should* help with the capabilities of the models, and that's called Skills. Now, I'm wary of these in general, mostly because people are fast and loose with installing these without any sort of review. I did look at the official Claude and Codex skills repo and installed the C#, front-end design, and one called superpowers. These should give Claude and Codex the best shot at doing well in the upcoming tasks. Not all Skills are available for both harnesses.

*Side note on Skills: If you aren't worried about them being an attack vector, just take a look at [OpenClaw](https://www.paubox.com/blog/malicious-crypto-skills-compromise-openclaw-ai-assistant-users) and [MoltBook](https://www.wiz.io/blog/exposed-moltbook-database-reveals-millions-of-api-keys). Read the Skills files before you just add them, even from Official repos like Claude and Codex.*

People say it all starts in the prompt, and I'm no prompt engineer, but I think this encapsulated everything I wanted. I opened Claude Code, set it to Opus 4.6, enabled Plan mode, and I gave it the following [prompt](https://undefinedlabs.tech/t/OA19vmOy), feel free to judge. Linked it as it is *not* short, plus you get to check out the work in action!

Claude churned for a while, and came back with some questions:
- Do you already have a Convex backend deployed (with functions/schema), or should this project include the Convex TypeScript backend (convex/ directory with schema.ts, mutations, queries) as part of the repo?
- For image and file uploads via ShareX JSON, how will the binary data be encoded in the JSON payload? ShareX typically sends multipart/form-data, but you specified JSON.
- For the view URLs (e.g., /i/{id}), should the ID be a short random string (like 'aB3kx9') for clean URLs, or is using the Convex document ID directly acceptable?
- Which .NET version should the project target?

Each question had a few options or an other option which I could manually type something else. I gave the following answers:
- Include in this repo
- Multipart form-data
- Short random ID
- .NET 9

Claude churned some more, and I kept watching the Usage but it wasn't going insanely fast so I just kept it going.

Finally I got a response:

> I have comprehensive research results. Let me now write the final plan, incorporating one key finding: the user explicitly wants text to be stored as a file in Convex storage (not just a DB field), so all three types share a consistent schema. Let me write the plan file.

The plan was pretty clean, and made sense compared to what I had asked for and wanted. There was a call out regarding the package I wanted to use, the ConvexClient.

> Why HTTP wrapper instead of ConvexClient directly? The Convex.Client NuGet package (5.2.1-beta) is designed around real-time WebSocket subscriptions and client-side patterns. For server-side API calls (auth-gated uploads, SSR page loads), direct HTTP API calls are more predictable and debuggable. If the NuGet package proves suitable during implementation, we can swap in, but the HTTP wrapper ensures reliability.

Claude doesn't have the context that the package will indeed work for our needs, it hasn't scanned the repo for a deep dive. That's where that Better Context tool I used earlier would come in handy, could pipe that knowledge to the model so it can use that knowledge and not have to guess. This is why I think this was a fun experiment. Had I not already done all the research prior to starting this, I wouldn't have known that the package even existed, nor that it would work for what I wanted built. Sure, eventually I would have asked the AI about live polling or using the Convex sync once it had built everything around the HTTP wrapper. But I think it would have been too late, it wouldn't know what I didn't know. It probably would have gone down a path of using the already established HTTP wrapper and doing a `setTimeout()` poll to the Convex API. Now, it may not have been that crude, but I know it wouldn't have known about the package to implement. The end product would have been way worse if I hadn't.

I asked Claude about that call out, and why not use the ConvexClient on the dashboard, since that is the proper place it should be implemented. The view pages don't need it as it's just showing what it is upon load, those don't need to live update.

I got back:
> Great call - yes, that's the perfect use case for the Convex.Client + Convex.Client.Blazor packages. The dashboard is exactly where real-time subscriptions shine.
> 
> The architecture would be a hybrid approach:
> 
> HTTP wrapper (ConvexService): Upload endpoints, download endpoints, view page SSR loads - these are all one-shot request/response patterns where a direct HTTP call is simplest
> 
> ConvexClient + Convex.Client.Blazor: Admin dashboard - subscribe to stats:getDashboardStats and the list queries so stats, view counts, and new uploads appear live without page refreshes. The Blazor package has SubscribeWithStateHasChanged() which auto-triggers component re-renders on data changes.
>
> Let me update the plan to reflect this.

After the plan file was updated with that change, it looked good enough to implement. But why have two models if you don't utilize them? I liked the plan, and just wanted another pair of "eyes" to see what it thinks based on how it was trained.

I opened up Codex, set it to 5.3 High, fed it the following prompt:
> i have a PLAN.md to create a new project, is there anything missing that would stop implementation? or anything that is confusing from the plan that needs more clarification? is the point of the plan and project clearly defined? or there any gaps when it comes to the flow of data, from upload to view? what about security concerns?

I know, seems silly asking AI about security concerns, but I'm not just telling it to `make it secure`. This is a plan review, if the plan doesn't make sense, or has issues, that would apply to a human engineer too. Especially if you were to hand it off like you do with AI.

Codex looked angry, had 9 High to Medium level security issues. Uh-oh, that sounds awful, what did Claude do? Are these even real security concerns? Well, take a [look](https://undefinedlabs.tech/t/Q59Alsjz).

The points about abuse controls, Convex Admin key, data consistency and contract consistency seemed reasonable, I did laugh at the fact it was so picky, that not having a `PUBLIC_BASE_URL` set is a High security issue. Sure, it's needed for URL normalization, but that's just down to implementation. However, it's good to call out, just don't think it's that high an issue.

I clarified some things with Codex, so it had more understanding since there was some gaps in the plan. I clarified the following:
> for clarification, this is only used by me, no one else will have access to it. so there is only one user, ever. how does that change your findings and does it get rid of any of them?
> 	1. contract mismatches: let's change the schema to fileName so it's consistent. put in other examples for the other types if that example showing you how it will be formatted is causing that much of an issue.
> 	2. let's create an env var to hold that base url which will be used with the return json.
> 	3. we don't want to orphan anything if the mutations fail. let's do a check on the mutation result and if it's a failure we delete the file and anything that was saved and return the error.
> 	4. view/download: how would you handle this? i was thinking on page view it would increment, same for when the download button was clicked. not too concerned about this, but interested.
> 	5. convex_admin_key: if i pwn myself, i pwn myself, that's fine.
> 	6. regarding the full table aggregation, it should be paginated with top 50 records of each, to prevent that. the dashboard shouldn't show everything unless selected to do so. 

Codex loved the clarifications, and immediately went to town updating the plan. It did come back with some feedback:

> Very close. I don't see major blockers now, but I'd still clarify 4 things:
> 
> Medium: Stats still imply full-table aggregation
> PLAN.md (line 136) says aggregate totals across all records.
> If your goal is to avoid heavy scans, define whether totals are precomputed counters or you accept full scans for personal scale.

This is where my not understanding of Convex came in, as I thought I had read enough to get started, but misunderstood the `full-table aggregation`. I was thinking it meant that the admin pages would be dumping all the data in one page, not that the way I was *getting* the data was by full-table aggregation. It says it right there, `precomputed counters` which is the proper solution, but I hadn't gotten my hands dirty with Convex yet so I carried on with misunderstanding for a bit. I told Codex it should be the Total Counts of it, and not the full data, which it understood enough from my own nativity to add in the precomputed counters.

After about 2 hours of planning and back and forth with Claude and Codex, I had a plan that I felt happy enough that if it was handed to me, I'd understand enough to get started. I had Codex create the `AGENTS.md` file from the `PLAN.md`, as I've heard this is supposed to help with implementation and the way to do things.
### Prompting into Existence

I went with Codex to implement the plan, and the reason for that is up until a month ago I was paying the $10 for Copilot and had been using Opus/Sonnet through that for testing and playing around with. I know it's not the same from the native harness, but I had a plan for Claude still in this, I just wanted to test out Codex which I hadn't used at all yet.

I started a new chat with Codex, leaving it on High, set it to Auto and gave it the prompt:

> AGENTS.md this is a brand new project, with a detailed agents file for you. there is also a detailed PLAN.md file in case you need it. i'd like you to start working on and implementing this, and between each check point, i'd like you to commit, but not push the changes. and if you have any questions, ask me, don't assume

About 30 minutes later, Codex had chewed through the plan, created the project layout exactly as envisioned, the Convex backend, admin pages, and even tests! It did hit the 258k token context window, and auto-compacted near the end, but I don't see any weirdness. I know for people who have been using AI like for a while now will say it's nothing special, but it is pretty neat you have to admit. I've never given the harness full control to go, I use it as question dump and such. The C# code that was produced was not half bad too, which I was surprised about. I know the majority of the training is not on C# but it did it well enough that I couldn't complain too much. I was hoping it would have gone with `vertical slice` instead of `minimal api` for this, but we'll tackle that later.

Codex wrapped up what it was working on and came back that the Convex backend needed real values so the backend can be deployed. I created a `.env` to point the backend to my locally running Convex instance. Told Codex that was configured, and Codex kicked off the `bun convex deploy` and I saw my dashboard instantly updated with the data stores and functions. That's so fucking cool! The fact that the code is what drives Convex is why I wanted to play with this, and makes me excited for my other projects!

I asked Codex to run the Tests it had created to see what would happen, expecting some/most to fail, and I wasn't too far off. Most of the errors were due to the `.env` file stuff in C# which we normally would use User Secrets. It got hung up for about 5 minutes trying to chew through that issue, and started creating its own file loader and parser and tests for said loader and parser. I stopped it as some of the blame is on me for that. Like I just mentioned, that's not typical for a C# project and I was trying to keep everything in one file across the board. I had Codex implement the [DotNetEnv](https://www.nuget.org/packages/DotNetEnv) package to make this possible. It still wanted to do some shenanigans with the file, but that's just because of where I placed it, moved it and that went away.

Just over an hour with back and forth with Codex, the base app was ready to begin testing, let's see what's been cooked up.

- Design is trash, but that's fine, I have a plan for that
- Can't login to Admin dashboard
- Convex backend is duplicated
- Still weird .env file code
- Convex Storage URL needs normalization

Codex cleaned up everything but the front-end, so now it was time to test the endpoints. I'm lazy so I asked Codex to create the `.sxcu` files to test from ShareX itself.

> in the /sharex/ folder, can you create the custom uploaders for each the text, file, and image for me? that way i can just import them into sharex. 
> 
> they should pass the auth token we are validaing for in the backend, which i've now set in the .env file. however, the ones you create can be filled in using a example value and i can replace it with the proper value once imported.
> 
> here is the docs on how to create a custom uploader: https://getsharex.com/docs/custom-uploader

I imported those into ShareX and began testing the Text uploader, immediately finding an error in my logic. I had set Codex on the wrong path of using a JSON object, when it's a Form POST, and I had confused myself when looking at the ShareX app and the fields were `{json:text}`. 

Codex easily fixed that, and I was able to send Text through ShareX to my dev setup, progress! I could see the Convex dashboard update instantly when the data came in. Upon viewing the link that was generated, I was greeted with an error which Codex fixed quickly. 

*Side note: I didn't note down the error I got, iirc it was related to the grabbing of the slug and fetching from Convex.*

The Copy Text button wasn't copying as expected, and the Download button went directly to the route instead of staying on the page. The fixing of the copy functionality took Codex a few tries, but it did get it working, noice!

In testing of the file upload, it uploaded fine, but the Download button had the same issue as the Text view did. When fixing the Text view, I could have also prompted better to tell it to also fix the other views, but I also think that it should have checked to see if there was other views to fix. As soon as I told Codex the file view Download button was behaving the same as the Text view, it fixed that and *then* automatically fixed the image view. That's why I think it should have done it to begin with, but that's just me being extra. Codex did have to fix the download not starting upon click, and the view count incrementing twice upon page load, but fixed those without issue.

Now that the file, image, and text upload and view is working, time to move onto the Admin dashboard. I could login fine, awesome, but no stats were displaying on the dashboard. No errors in either console, hmm.

This is where Codex went into a bit of a spiral, in my opinion, and I always start with a new chat. It did fix an issue with the JSON mappings between Convex and HTTP, but it could not figure out the Convex live subscription. I gave Codex the package docs, I saw it digging through the local package, but no matter what it did, it couldn't get the subscription working. I saw why, the IConvexClient was disposed of after it was registered, by the way Codex was invoking it. I decided to leave it for now, interesting test case for later. Codex basically said `fuck this` and went to a single get on load, fair.

Basically, the project is done, right? Well, yeah, if you like an ugly design and want to ship a vulnerable product!

In Plan mode, I fed Codex the following:
> base functionality is done, everything is working, which is perfect.
>
> now, one thing i just thought about is, even though i'm protecting the post route with the auth, it doesn't prevent bots/people from spamming the paths. i would like to implement some sort of protections, rate limitting of people spamming the endpoints and the like. def want any anti-automation (bot) controls we can implement, the better. 
> 
> the same protections should be for the view/download as they increment. 
> 
> what would be the easiest, best solution for these? are there asp.net core packages we can use that makes it easiser to implement these things? i've watched tutorials on implementing these types of things, but it's been a year or so and i'd have to hunt down where i saved those. 
> 
> if you have any questions, ask and don't assume. make sure you plan it with security best practices in mind so we are not exposing ourselves.
> 
> maybe also investigate how we are doing the dashboard protection. i know it's from env var, and is session based and the only real risk is me exposing it. is there a more secure, better way to implement an auth but only have it for me alone to login to? i know this way i'm doing it now is better than doing the validation on the front end, but if there's a way to implement an auth system i control (or even can self host) for this, that would be fine.

Codex chewed through the codebase, and came back with a few questions, which I answered with the defaults.

- Where should abuse protection be enforced for public/upload routes?
	- Hybrid app+edge
- Which admin auth model should this plan target?
	- Harden local auth
- Choose default upload size limits for abuse control.
	- Balanced caps
- Which edge/proxy should the plan target for bot/WAF controls?
	- Cloudflare + app

Solid options from Codex, and Cloudflare is a perfect fit as I already use it for this domain. With the hardening plan figured out, Codex went to work and in 10 minutes the changes were implemented, absolutely insane. This included rate limiting, upload limits, allowed proxy list, and all the logic that comes with it.

I had Codex implement the Scalar API behind the Admin route, so I could hit the endpoints from there without having to use ShareX.
### Can It Imagine?

I watch enough content on YouTube regarding Claude and how much better it is at design than Codex, so I just had to see for myself.

I used the `/using-superpowers` plugin, as reading into this (`and the source code`), it seems like a super plan mode so wanted to give it a shot. A creator I watch called [Theo](https://www.youtube.com/@t3dotgg) was showing how he used Claude for front-end so I gave it a shot:

> i have a asp.net core blazor server app, and i have all the functionality done. what i'd like now is a design that's modern, sleek, minimal, but unique. all i'd want done is the front end design, so if you can use that skill and knowledge, even better. 
> 
> i'd also like you to generate 5 designs that i can compare and see which one i like the most.
> 
> the general designs should be dark theme styled. i don't want a terminal look, not a fan of those for a website. 
> 
> i like the synthwave style for vscode (https://github.com/robb0wen/synthwave-vscode) but that isn't a requirement for them, maybe one can incorporate that color scheme. otherwise, you come up with everything.
>
> really want to be impressed!

I was hoping the wanting to be impressed tidbit would really make Claude go all out. However, after the back and forth and watching it spin, I didn't feel confident. It was confident that the 5 different designs would be unique, and that the only thing that would have to change is the CSS and no HTML. I'll be the judge of that...

Claude came back a bit after it had made the changes. Ha, completely ignored what I had asked, but is that Claude, the superpower, or a combination? No clue. There was indeed 5 designs, but they were reskins which is what I explicitly told Claude I *didn't* want.

> i was hoping to see more than just palette swaps and header navigation placement changes. i will say, the midnight-rose color scheme is beautiful, i really like that, i was just hoping for a fresh layout for all of them. can you use the midnight-rose for the colors but come up with actual re-designs like i asked for? you confirmed more than just css changes and then ignored it. 

Have to rub it in that Claude ignored me and itself, which honestly did seem to work, finally. It created a few themes and test pages to review them. Claude took the colors from the midnight-rose I mentioned, and made a really clean design I liked, minus a few things. The other designs were okay, but just didn't *hit* like the main one. I had Claude clean up the design a bit by removing the Header and Footer, swapping out some button/font colors, and cleaning up the view pages.

While the designs it came up with were neat, I think it's still a ways away from being as good as a human designer. Now, I'm sure if you fed it an image of a design, it could implement that from reference. But with AI just being an algorithm, it really doesn't have an imagination like you and I to really think outside the box. It can only go as far as its training.

The color scheme that was generated is beautiful though, I can't take away from that. However, I do think about all the artists whose work was stolen for that to be possible. There really should be a way for artists and AI to be a team and compensation for their work that the models are trained on, but that's a whole other topic.
### Close to the Finish Line

The base functionality was working, and just had to instruct for a 404 page to be created and used, but it's time to clean up some of the code. While it all worked, the `Program.cs` file had become God-like and I didn't like that.

Started a new chat with Codex and gave it the following prompt:
> the Program.cs is getting a little large. let's swap to the vertical slice architechture for all of these, so the architecture is cleaned up and it's easier to find everything and it makes sense. this way we can still use the minimal api's and their routes, we just have the routes in their own paths so anything related to the route can be in there with it.

It went to town on the architecture changes, and remapping of everything. This is one of the things I found I enjoyed about working with AI, I've done that type of thing a gazillion times, but I can't keep up with the speed in which it does things. Now, speed isn't always the greatest thing, but staying in the loop and actively participating does seem to be a fantastic way to compliment the speed.

I was happy with the product as it was, but wanted to nail down any other other issues that may be present in the codebase. I instructed both Codex and Claude to review my current project, and look for any security concerns, gaps in logic, principle violations, etc. Here is the [Codex result](https://undefinedlabs.tech/t/FKee1aes) and here is the [Claude result](https://undefinedlabs.tech/t/ivQTgUGA). All in all, both found good points of concern that should be investigated, Claude was more verbose which I liked, and I had Codex begin working on those that were easy to knock out after tweaking it a bit.

I had been giving Codex a lot of work to try so far in this project, so I instructed Claude to migrate to User Secrets (away from the `.env`), clean up the Convex functions, implement counters to remove Table scans, etc.

Next came the Admin Tools to generate the login and ShareX hashes, as if no Environmental Variable was set, it defaulted to the hash of "password". This is so I could roll the keys in case something leaks.

Then came the true test, I wanted to see if Claude could get the Convex live subscription working on the Admin Dashboard:
> i was trying to get the IConvexClient working on the dashboard earlier, with the live sync from convex so things would update automatically as things happened. however it just wouldn't connect. could it be because the dashboard pages don't have the interactive server like we had to do for the tools?

After some digging, I got this as a response, which lines up to exactly why it wasn't working:
> Yes, that's exactly the problem. Here's what's going on:
> 
> AdminDashboard.razor has no @rendermode directive, so it renders as static SSR - the server generates HTML once, sends it to the browser, and there's no persistent SignalR circuit. Compare with AdminTools.razor:2 which has @rendermode InteractiveServer.
> 
> For IConvexClient real-time subscriptions to work, you need two things:
> 
> @rendermode InteractiveServer on the page - without it, there's no live SignalR circuit to push updates through. The component runs once, produces HTML, and is done. There's nothing keeping it alive to receive subscription callbacks.
> 
> Inject IConvexClient instead of ConvexService - the dashboard currently uses ConvexService (your HTTP wrapper) which does one-shot request/response queries. IConvexClient from the Convex NuGet package maintains a WebSocket and can push updates when data changes.
> 
> There's also a subtlety in Program.cs:212-220 - you set admin auth on IConvexClient inside a startup CreateScope() block. The IConvexClient is likely registered as a singleton by AddConvex(), so the auth should persist, but the scope itself gets disposed right after. Worth double-checking the Convex NuGet docs to make sure the auth sticks after the scope disposal.
> 
> TL;DR: Add @rendermode InteractiveServer to the dashboard page, switch from ConvexService to IConvexClient, and subscribe to queries rather than one-shot fetching. That should get the live sync working.

So I told Claude to get to work on that to see if it had actually found what the issue was. I had faith, but no luck, the stats were still not showing as expected. Claude put in some debugging steps, and after some trial and error back and forth, Claude finally started seeing the other issue. Instead of using the `.AddConvex()` to register the service, it manually registered with a Singleton. Huge step to figure out the issue, now the Auth side is failing as it can't parse the JWT payload.

Removing the Auth part of the Convex setup worked, and the Dashboard now showed the stats and data live as it updated! This turns the Convex "public" in a sense, so I will need to figure that out later.

Feeling confident again, I swapped to Codex to see if it could do the other pages since now there is a working example done on the Dashboard:
> the AdminDashboard.razor is now working with live sync from Convex. could you wire up the rest of the admin pages (files, images, texts) to also pull the data live like the main dashboard?

I had to provide logs a few times to Codex, as it just couldn't get the subscription wired up. Eventually after trial and error, the logs pointed to an actionable item. The data coming form the WebSocket was slightly off to what the Class was set-up as, so Codex created a JSON converter so data comes over from Convex as `"69.0"` the conversion doesn't fail and `"69"` is mapped. After this was implemented, all the Admin pages had a successful live subscription!

I asked Codex to add a functionality to the Tools page that would take the key from the ShareX hash and generate the ShareX Custom Uploader using that. Easy to roll keys and make sure I don't mess anything up when doing so. No issues with that, one-shotted it.

Next was adding the top links to the main dashboard page, ordered by view count. Just so I can see if anything is popping off in particular.

One final change was the startup, I didn't like "password" being the default hashed string if the Env Vars didn't exist. So Codex changed that to a randomly generated string for both, and that was hashed. This way the default is "secure" but can easily get the keys from the console, and roll new ones.
### "Make It Secure"

I like looking around GitHub for trending repos, projects, and cool ideas. I came across two AI powered Penetration Testers that seemed promising. One I just couldn't get running, but I will claim user error for that one. The other, while it worked, was hit with an API rate limit immediately. I set up an Anthropic API just for this, and threw $10 onto the credits. I was under the impression that as long as you had the funds, using the official API's was all you'd have to do. I'd kick off the tool, it would start "Scanning endpoints" and then stop with "Rate Limit hit" after seeing barely anything done. I could keep resuming the task, but it would work for 30 seconds to a minute and then get rate limited again. At this point I just grew frustrated, and gave up, I didn't want to try another API just for the same thing to potentially happen. I just turned to Claude and Codex with the following prompt:
> You are a web application security expert conducting a comprehensive security assessment.
> 
> Stack: .Net Blazor, Convex
> 
> Authentication: Password login
> 
> Purpose: ShareX hosting site for files, images, and text. Admin dashboard to track links.
>
> Endpoints:
> 
> /admin
> 
> /admin/dashboard
> 
> /admin/images
> 
> /admin/files
> 
> /admin/texts
> 
> /admin/tools
> 
> /admin/api-reference
> 
> /
> 
> /i/ (POST)
> 
> /i/{slug} (GET)
> 
> /f/ (POST)
> 
> /f/{slug} (GET)
> 
> /t/ (POST)
> 
> /t/{slug} (GET)
> 
> Analyze the web application and provide:
> 1. OWASP Top 10 vulnerability assessment
> 2. Authentication and session management analysis
> 3. Input validation and output encoding review
> 4. Business logic flaw identification
> 5. Client-side security assessment
> 6. Detailed remediation recommendations with code examples

I know this seems silly, but given the clear context of the endpoints, the stack, purpose, and the goal, I felt like this would perform pretty well.

The biggest thing both pointed out was the Convex implementation, both called out that the functions, queries, and mutations are not secure since there is no auth. That makes sense, we took it out to get it working. Claude didn't like the `Math.random()` isn't cryptographically secure, and a few other things like CSP, admin sessions, file upload type validation, and the like. Those were cleaned up pretty easy, followed up by hardening the Convex implementation. I could spend more time by implementing auth and all of that, or just add in an Internal API Key that the Convex side and my side share to validate the requests are from my side.

Codex didn't really have much to do after those were addressed, outside of some Tests and some anti-forgery stuff. It did however, suggest something I didn't think about. The image URL is directly from the Convex backend, which not only exposes the URL for the Convex but also bypasses the view/download counter (`which wasn't a huge deal to me`). Now the endpoints use the slug to have a `/content` and `/download` route, which will always update properly.

I then had Claude bring the `AGENTS.md` and `README.md` files up to speed according to the plan and the work done.

Finally, I removed the `seedCounter` Convex function, as that was no longer needed. Removed the Scalar integration, and some other minor cleanup.
### Wrapping Up

Before I attempt to publish this, I wanted to walk through the steps of a deployment again. So I blew away my local Convex containers, to start from scratch. I built my projects image and ran that, alongside the fresh Convex, with the necessary env vars. It was all working locally, I could use ShareX to hit the local environment, and I could see the tests appear in both dashboards instantly. Whoo!!

I needed one last change, and this is just for better performance out of my VPS. Dokploy by default will build the new images on your server, unless you specify a Remote Server which I don't want to pay for right now. There is a workaround for this though, and that's GitHub Actions. I created a `.github/workflows/deploy.yml` file and set it up to build my Docker Image and push it to the GitHub Container Registry (GHCR). Then, with a webhook, the Dokploy instance can be notified a new Image is available, and spin down the current one, and spin up the new one with the proper configs.

I pushed my repo, and the Tests failed, oof. Turns out, it's due to how I'm handing the persistent keys. Quick fix, another push later, and my Image was successfully built by GitHub and pushed to the Registry. However, I didn't notice at the time, but my `.yml` file was configured incorrectly, as it was pushing the webhook notify (`from commit`) before the new Image was pushed. So the Dokploy would restart with the old Image.

I noticed a few issues I didn't see at first, like page titles not being consistent, and missing Open Graph tags for rich text display. Got those taken care of easily.

I then noticed the webhook issue, and swapped it to a `Dokploy Deployment Action` which worked exactly as I needed. Once the new Image was available, then the Action would ping my Dokploy instance which would use that Image when re-creating the container.

Now that it was all live, I just needed one final test of everything. I generated the new ShareX Uploaders, and added those to my setup. Clicking `Test` and greeted with a URL on one screen, and an updated dashboard on the other!

![Dashboard Updating with Tests](https://undefinedlabs.tech/content/i/8TkRao5F "Dashboard Updating with Tests")

How cool is that!? That's why I wanted to try this project out, one see if AI could do a task it's not typically done, and two to see that sweet sweet syncing!
### Conclusion

Overall, I'd call this a successful experiment! I got to play around with some AI, engineered a tool I wanted, and got it done faster than it took me to write this blog post!

I'm not going to go AI crazy, but I can see the usefulness of it and I did enjoy this process. I will continue to use AI to bounce my ideas off of, questions when I get stuck and can't figure it out on my own, and day to day stuff like that. I will be using it for more boilerplate work, as it is fantastic for that, and things I don't really care too much about and just want something created.

I do feel less `connection` with this project, in terms of the code itself. Which is strange for me, as I always *feel* connected to the code and the finished project. It is a weird feeling, going from owning your code, to barely writing any of it. I don't think it's necessarily a bad thing, it's just different. In a way, I wish I could severe that connection and just lean in fully to AI, but then I won't learn nor grow, and I don't want that. If I just wanted to stay in my C# bubble, I would create a lot more projects utilizing AI to do the majority of it, it's easy to get something out the door and move onto the next one. I'm not hating or knocking on the people who prompt and ship, it just doesn't align with my goals personally.

This just makes me want to work on the other Convex projects even more, but I have a lot in the works right now. It's tough trying to balance everything out. I have a Go learning project idea that was inspired by working on this, and I just finished chewing on an idea for learning Rust. So be on the lookout for those, sooner rather than later!

Never stop **engineering**.