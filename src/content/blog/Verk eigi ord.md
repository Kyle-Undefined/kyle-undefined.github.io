---
title: Verk eigi orð
description: Deeds, not words
pubDate: 2026-03-15 08:32
icon: LiNotebookPen
---
_`Verk-ay-yi-orth`_ - How cool does that sound?! I've always been fascinated with Norse mythology, Vikings, and the language. I'm not trying to learn Old Norse, but I'm weaving it into everything I touch lately.

I used to not be one for having a naming scheme, or universe, for projects and such, but I spent too much time with DBA's. No matter if it was personal, or even corporate, they always had a theme going for their servers. Most time it was Star Wars, Lord or the Rings, or Cars. Don't get me wrong, I enjoy having a punchy name for a project, half the fun of the project itself is coming up with a name that just *hits*. Could I interest you in my RuneScape bot, `Potato Extractor Extreme`?

I've been using Obsidian a lot more recently, not only for this blog, but as a thought organizer. Instead of having a bajillion Notepad++ tabs and randomly scattered files, I've been working on getting all of that organized and put into a system that works, for me. The main selling point of Obsidian to me, was the Graph. Being able to see how your stuff is connected, is honestly amazing. Here's what I have so far, green are tags, white are notes:

![Obsidian Graph](https://undefinedlabs.tech/content/i/gneWlmKe)

_Zoomed out so you don't see my secrets ;)_

That may look like a hot mess, but it's beautiful, and that's in the eye of the beholder. The other selling point is the Linking. You not only have tags, but you can link notes together with a really in-depth system. Taken from [Obsidian.md](https://obsidian.md)'s website:

![Obsidian Linking](https://undefinedlabs.tech/content/i/ucga4SRJ)

And that's just the default features, there's so many Plugins you can install to enhance your setup.

When I first started using Obsidian, I of course watched YouTube videos on how people used it and "best setup", but honestly I think everyone should jump in head first without any of that. Not saying there's not useful info out there, or you wouldn't use it that way, but if you want to actually turn it into `a second brain` as they call it, figure out your own workflow. The workflows looked good, until implementation and I was like yeah dawg, that's not it.

I created a vault called **Fornbok**, which in Old Norse roughly translates to `Old book`, which is the exact vibe I'm going for, it's a place of my knowledge. I started putting notes and random bits of info into it, and then all of my projects, getting things linked and tagged. It feels like I've put so much into the vault, but I see how much left I have to do still...

I hear a lot of people complaining about Kanban boards, and I will admit I've never used one until recently. After getting a chunk of data in, I quickly found out I wanted a "dashboard" of sorts. I installed the Kanban plugin and created a board and started playing with that, and I _really_ enjoy this setup. I have a board for my tasks, projects, and books. Each of those have the same-ish list layout of Backlog, In Progress, On Hold, Done. The more data I put into the vault, the more sense it made to go this route. The list has helped wrap my brain around what I actually want/need to do or work on.

It really is crazy how much I can get done when going from thinking about what I need to do, to seeing it. Just this year so far, I've started and completed 5(-1) projects, and one of which was inspired by using Obsidian. I've started two other projects, with a massive undertaking, and have made great progress on both. Not to mention all the tasks and "mini" projects I'm also doing at the same time, and in between, everything.

I created [Galdur](https://github.com/Kyle-Undefined/galdur), which is an Obsidian Plugin that allows me to use different AI CLI tools from a side panel. This roughly translates from Old Norse to "magic/incantation" and it's like I'm summoning the AI, ha. There were existing plugins that brought them into Obsidian, but just not how I wanted and the closest one [Claudian](https://github.com/YishenTu/claudian) was for one lab and is well done for a native feel. I wanted something a bit rawer, and other models/labs to play with. It's Windows only, but I just shipped WSL support, and that's all I need. I wanted to try using OpenCode CLI and the self-hosted AI on my machine I can boot up, and it is neat having an assistant and it's "unlimited" use. The only limiting factor in this setup is your wallet for better performance.

I also created [sshh](https://github.com/Kyle-Undefined/sshh) for an offline terminal inspired note taking app, as a learning project for React. I also have plans to use the new TanStack Hotkeys package to replace what I have and to expand the hotkeys available. (I was too lazy to wire up more than I did, be lucky you got that!)

I am working on bringing Tailwind to the [Tera Raid Info](https://kyleundefined.dev/tera-raid-info/) project, and redesigning it, because why not? I orchestrated my ShareX Host site, which I wrote about [here](/blog/engineering-on-vibes). _Its why I subtracted one from my completed project count_. I brought my URL Redirect and Browser Tab projects out of the shadow realm, and have made small, but good progress on the Tab one and some cleanup and updates on the other.

For the ShareX site, I had to set up a VPS, and I configured Dokploy. I named it Sindri, due to him being the Dwarf smith who forged Mjölnir. If I ever need a remote build server, due to suffering from success and outgrowing GitHub Actions free tier, it will be called Eitri who is Sindri's brother. I got that naming scheme that'll...

![Terry Crews Burgers](https://c.tenor.com/1jEb3J4Mtk4AAAAC/tenor.gif)

I can't have Obsidian and not sync it across my devices, come on now, and I'm definitely not going to pay for it. Enter Muninn, the CouchDB instance for the [LiveSync](https://github.com/vrtmrz/obsidian-livesync) plugin. A high-five if you know that reference, to being one of Odin's ravens called "Memory". You got it right! High five!

I then got tired of paying an increasingly amount of money a month just for freaking email, all because I chose Google Workspace since it was easy to get going. I saw that the renew date was coming up and seeing `$17` and knew that wasn't going to cut it. Enter [Purelymail](https://purelymail.com/), the best way to get email on a domain, by far. That `monthly` fee from Google, covers more than a `year` here!! Yes, it's just mail, but the WebMail is perfectly fine, and you can use any IMAP client you want. I went with [BetterBird](https://betterbird.eu/) for the PC and [K9Mail](https://k9mail.app/) for Android.

But I couldn't stop there, I have a lot of contacts and calendar events I wanted to get out of Google land as well, since I'm getting the email out, I might as well do this too. These were easily exported out via [Google Takeout](https://takeout.google.com/). I could take the exported files and import them into BetterBird, but that won't sync with my phone.

That's when Norn, the [Baikal](https://sabre.io/baikal/) server, weaves their fate. This is just a CalDav/CardDav instance that was surprisingly easy to set up, once I got past some of the Docker issues, and the email invite feature I wanted. It took me several hours of fiddling with the deployments, settings, and config before I got it working for a specific email to send out the calendar invites. Huge dopamine hit now that it's working how I wanted! I don't _need_ a special email for sending invites, but I saw it was possible and so I just had to have it.

But I still have to get this shit onto my phone, how is that even going to work? Ever heard of [F-Droid](https://f-droid.org/en/)? The alternative Android app store, that's free and open source?! You're slackalackin! Get you some of that [DAVx5](https://www.davx5.com/) to sync your Calendar, Contacts, and Tasks with the previously set up Baikal server. Oh? You want an app for your Notes and Tasks? Check out [jtx Board](https://jtx.techbee.at/) which works super well, and is great for quick notes and such!

Needless to say, I've been busy this year, but I'm having a blast. I'm learning, getting things done, and making things work for me. I'm nowhere close to being done, I still have to swap off of Gmail fully, finish going through Drive and Keep. Then to tackle ripping off Microsoft's hold, and then getting rid of DashLane for Vaultwarden. Plus learning the languages I want to learn, for the projects I want to build, *pluuuuuuuus* another project I came up with while looking for a solution to compliment this stack I've got going, and nothing sufficed.

It's fun to be busy with things that excite you, and things that enrich you rather than take away. I would think that I would have been feeling the creep of burnout or boredom come on by now. Usually when I have big bursts of creative energy, I have lows that take a bit to "recharge". This is different, I see all head of me and I just feel a `let's fucking do this`, as I whip my nonexistent baseball cap backwards.

![Ash Hat Flip Gif](https://c.tenor.com/itVAkG3UGrMAAAAC/tenor.gif)

I'm building my own **saga**.