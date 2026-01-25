---
title: Knocking the CSS rust off
description: 2 divs, 1 flip
pubDate: 2026-01-24 14:42
icon: LiNotebookPen
---
Meme aside, it's pretty amazing what you can do with CSS nowadays. Like I mentioned in my previous [post](/blog/so-i-created-a-website-again), CSS was my first love of the web. I wasn't doing the craziest things when I first started, but *Web 2.0* was in its infancy years. When I started doing web, 2.0 was less than 5 years old and the focus was more on the interactivity via user generated content, API's, Ajax and early stages of Social graphs. Hell, I was still writing ActionScript at my company for our client sites that all mashed up with Classic ASP, ASP.Net, and ColdFusion.

You could use the `animation` property and `@keyframes` at-rule then, but it was very browser specific, and in the days of IE, was a huge pain. The amount of hours I spent making something look the same across all the browsers, tweaking one prefix just slightly because Microsoft thinks they can reinvent the wheel. That kind of stuff didn't really get main-stream adoption until like 2010 or so. I had left the front-end space by that time, which is when support and adoption really took off it seems. 

Having to add in every prefix you wanted to hope was supported, and then a fallback, just added more headache than it was worth.

For example, if you wanted to animate a div, you had to bloat your CSS like so:
```css
@-webkit-keyframes slide {
	0% { -webkit-transform: translateX(-100%); } 
	100% { -webkit-transform: translateX(0); } 
}

@-moz-keyframes slide { 
	0% { -moz-transform: translateX(-100%); } 
	100% { -moz-transform: translateX(0); } 
}

@-o-keyframes slide { 
	0% { -o-transform: translateX(-100%); } 
	100% { -o-transform: translateX(0); } 
}

@keyframes slide { 
	0% { transform: translateX(-100%); } 
	100% { transform: translateX(0); } 
}

.box { 
	width: 100px; 
	height: 100px; 
	background: #4caf50; 
	-webkit-border-radius: 8px; 
	-moz-border-radius: 8px; 
	border-radius: 8px; 
	-webkit-animation: slide 1s ease-in-out infinite alternate; 
	-moz-animation: slide 1s ease-in-out infinite alternate; 
	-o-animation: slide 1s ease-in-out infinite alternate; 
	animation: slide 1s ease-in-out infinite alternate;
}
```

The Opera prefix, that brings back some memories...

Now you don't need all of that, you can omit the prefixes and every browser supports it. That makes it so much easier, and as a bonus CSS has advanced so much! I have the basic `@view-transition` enabled via the `<ClientRouter />` in Astro, but that opens the doors for so many cool ideas!

I won't be doing anything crazy or advanced in this post, just some practice with a coin flip using the CSS animations.

The following code examples can be found on my [GitHub](https://github.com/Kyle-Undefined/examples.kyle-undefined.github.io).

We'll start off with a base of:
<iframe src="https://examples.kyleundefined.dev/coin-flip/base.html" width="100%" height="100" loading="lazy" title="Base"></iframe>

This is just a simple:
```css
.container {
	border: solid 1px #848bbd;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 400px;
	flex-direction: column;
	text-align: center;
}
.coin {
	width: 25%;
	border: solid 1px silver;
}
.table {
	width: 75%;
	border: solid 1px brown;
}
```
```html
<div class="container">
  <div class="coin">Coin</div>
  <div class="table">Table</div>
</div>
```

Now let's do a simple "flip" animation on the `coin` div. I have it set to infinitely loop for easier viewing.
<iframe src="https://examples.kyleundefined.dev/coin-flip/base-ani.html" width="100%" height="200" loading="lazy" title="Base Animation"></iframe>

This is achieved with a simple `animation:` on the class like so:
```css
.coin {
	width: 25%;
	border: solid 1px silver;
	animation: coinflip 0.75s ease-in-out infinite normal 1s;
	/*
	  animation-name: coinflip;
	  animation-duration: 1s;
	  animation-timing-function: ease-in-out;
	  animation-iteration-count: infinite;
	  animation-direction: normal;
	  animation-delay: 1s;
	*/
}
@keyframes coinflip {
	0% { transform: rotateZ(0); }
	100% { transform: rotateZ(360deg); }
}
```

It's a very quick and dirty flip, but it works. So, I got the flip working, but now let's get the "up" of the flip working. Again, quick and dirty for the base, but I cleaned up the names a bit.
<iframe src="https://examples.kyleundefined.dev/coin-flip/flip-up.html" width="100%" height="300" loading="lazy" title="Flip Up"></iframe>

I have to define the "up" and I can combine them on the `.coin` class like so:
```css
.coin {
	width: 25%;
	border: solid 1px silver;
	animation:
	  coin-up 0.75s ease-in-out infinite normal 1s,
	  coin-flip 0.75s ease-in-out infinite normal 1s;
	position: relative;
}
@keyframes coin-flip {
	0% { transform: rotateZ(0); }
	100% { transform: rotateZ(360deg); }
}

@keyframes coin-up {
	0% { bottom: 0px; }
	100% { bottom: 100px; }
}
```

I have to set the `position` of the coin to be relative, otherwise the `bottom` won't move the div as I expect. But, as you can see the coin just resets back to the `table` when the animation is over.

You could add a new `keyframes` for a coin-down animation and play with the delays and orders of things, or you could just update the `coin-up` animation-direction to be `alternate` instead of `normal` which does what I am looking for.
<iframe src="https://examples.kyleundefined.dev/coin-flip/flip-down.html" width="100%" height="300" loading="lazy" title="Flip Down"></iframe>

Boom! Coin flip animated, blog post done. You wish, I have to take this further!

I can combine the `keyframes` into one as a start, this will allow me to fine tune the animation itself.
```css
@keyframes coin-flip {
	0% { 
	  transform: rotateZ(0); 
	  bottom: 0px; 
	}
	50% { 
	  transform: rotateZ(180deg); 
	  bottom: 100px; 
	}
	100% { 
	  transform: rotateZ(360deg); 
	  bottom: 0px; 
	}
}
```

This gives one flip of the coin when it goes up and down.
<iframe src="https://examples.kyleundefined.dev/coin-flip/flip-one.html" width="100%" height="300" loading="lazy" title="Flip One"></iframe>

Let's add in more rotations.
```css
@keyframes coin-flip {
	0% { 
	  transform: rotateZ(0deg); 
	  bottom: 0px; 
	}
	25% { 
	  transform: rotateZ(720deg); 
	  bottom: 75px; 
	}
	50% { 
	  transform: rotateZ(1440deg); 
	  bottom: 100px; 
	}
	75% { 
	  transform: rotateZ(2160deg); 
	  bottom: 75px; 
	}
	100% { 
	  transform: rotateZ(2880deg); 
	  bottom: 0px; 
	}
}
```

This gives a hilariously fast spin which kind of "jumps" in the air to do the rotations, but it's a start.
<iframe src="https://examples.kyleundefined.dev/coin-flip/flip-funny.html" width="100%" height="300" loading="lazy" title="Flip Funny"></iframe>

In order to smooth out the flips, I need to add in more steps to the `keyframes` for more fine tune control of the transformations.
<iframe src="https://examples.kyleundefined.dev/coin-flip/flip-smooth.html" width="100%" height="300" loading="lazy" title="Flip Smooth"></iframe>

That looks better, we're making progress! Isn't this so cool?! What more can I do to improve this? Well let's add in a delay after the animation is done so the coin sits on the table before the animation restarts. This can be done by adjusting the `keyframes` so the final stage is the delay.
<iframe src="https://examples.kyleundefined.dev/coin-flip/flip-delay.html" width="100%" height="300" loading="lazy" title="Flip Delay"></iframe>

Here is how that looks in the CSS:
```css
@keyframes coin-flip {
	0% { 
	  transform: rotateZ(0deg); 
	  bottom: 0px; 
	}
	8% { 
	  transform: rotateZ(72deg); 
	  bottom: 20px; 
	}
	16% { 
	  transform: rotateZ(144deg); 
	  bottom: 40px; 
	}
	24% { 
	  transform: rotateZ(216deg); 
	  bottom: 60px; 
	}
	32% { 
	  transform: rotateZ(288deg); 
	  bottom: 80px; 
	}
	40% { 
	  transform: rotateZ(360deg); 
	  bottom: 100px; 
	}
	48% { 
	  transform: rotateZ(432deg); 
	  bottom: 80px; 
	}
	56% { 
	  transform: rotateZ(504deg); 
	  bottom: 60px; 
	}
	64% { 
	  transform: rotateZ(576deg); 
	  bottom: 40px; 
	}
	72% { 
	  transform: rotateZ(648deg); 
	  bottom: 20px; 
	}
	80% { 
	  transform: rotateZ(720deg); 
	  bottom: 0px; 
	}
	100% { 
	  transform: rotateZ(720deg); 
	  bottom: 0px; 
	}
}
```

Sure, it's not as simple as just adjusting properties, but it's fun to figure out the stages. CSS started supporting `var()` and `calc()` functions that allow you to set variables that you can use throughout the file and to calculate a value. Dynamic CSS is so neat!

Let's implement those functions in my example, so I can adjust the flip behavior without having to change everything.

First, we'll add in the variables:
```css
.coin {
	width: 25%;
	border: solid 1px silver;
	animation: coin-flip var(--anim-time) ease-in-out infinite normal var(--anim-delay);
	position: relative;
	
	--rotation-min: 0deg;
	--rotation-max: 720deg;
	--rotation-step: calc(var(--rotation-max) / 10);
	--height-max: 100px;
	--height-step: calc(var(--height-max) / 5);
	--anim-delay: 1s;
    --anim-time: 5s;
}
```

What this does is create the variables that I can reference later. I set a Min and Max for the rotations, the Max determines how many flips is done by the coin, and is 2 flips by default. Then I set a Step for the rotations which is calculated off of the Max / 10. *Had to do math for this, ew, yuck!* The Max Height is how far up the coin goes up off the table, and that's used to calculate the step for the up/down animation. I call the Time/Delay variables for control over that as well.

With those setup, I can update the `@keyframes` to use those variables, and do some calculations of itself for the steps:
```css
@keyframes coin-flip {
	0% { 
	  transform: rotateZ(var(--rotation-min)); 
	  bottom: 0px; 
	}
	8% { 
	  transform: rotateZ(calc(var(--rotation-step) * 1)); 
	  bottom: calc(var(--height-step) * 1); 
	}
	16% { 
	  transform: rotateZ(calc(var(--rotation-step) * 2)); 
	  bottom: calc(var(--height-step) * 2); 
	}
	24% { 
	  transform: rotateZ(calc(var(--rotation-step) * 3)); 
	  bottom: calc(var(--height-step) * 3); 
	}
	32% { 
	  transform: rotateZ(calc(var(--rotation-step) * 4)); 
	  bottom: calc(var(--height-step) * 4); 
	}
	40% { 
	  transform: rotateZ(calc(var(--rotation-step) * 5)); 
	  bottom: var(--height-max); 
	}
	48% { 
	  transform: rotateZ(calc(var(--rotation-step) * 6)); 
	  bottom: calc(var(--height-step) * 4); 
	}
	56% { 
	  transform: rotateZ(calc(var(--rotation-step) * 7)); 
	  bottom: calc(var(--height-step) * 3); 
	}
	64% { 
	  transform: rotateZ(calc(var(--rotation-step) * 8)); 
	  bottom: calc(var(--height-step) * 2); 
	}
	72% { 
	  transform: rotateZ(calc(var(--rotation-step) * 9)); 
	  bottom: calc(var(--height-step) * 1); 
	}
	80% { 
	  transform: rotateZ(var(--rotation-max)); 
	  bottom: 0px; 
	}
	100% { 
	  transform: rotateZ(var(--rotation-max)); 
	  bottom: 0px; 
	}
}
```

Phew, that's a lot! Let's break that down...

I start with the base step which is just the coin being on the "table". I then calculate the transform value from the Step * step number, and the bottom value from the height step * step number. The step number for the `transform` and `bottom` is the calculated degrees/height per animation stage. The height step goes up to 4 and then back down to 1. The rotation step goes up to 9 for the pause at the end. I then end the animation with the div being "reset" and resting.

Visually nothing changes, and technically, functionality doesn't change either. However, this now allows me to adjust the coin flip by changing a few lines instead of the whole `@keyframes` setup. 
<iframe src="https://examples.kyleundefined.dev/coin-flip/flip-func.html" width="100%" height="300" loading="lazy" title="Flip Func"></iframe>

Want a slow mode flip? Easy, just adjust the `--anim-time` variable to `5s` and boom, it all updates.
<iframe src="https://examples.kyleundefined.dev/coin-flip/flip-slow.html" width="100%" height="300" loading="lazy" title="Flip Slow"></iframe>

Oh I know what you want, you want that quadruple rotation flip! Coming right up! `--rotation-max: 1440deg;` is all you'd have to adjust.
<iframe src="https://examples.kyleundefined.dev/coin-flip/flip-four.html" width="100%" height="300" loading="lazy" title="Flip Four"></iframe>

I could adjust the borders to make it more coin shaped, but this is just examples and practice. 

Again, all the code for these examples can be found in my [examples](https://github.com/Kyle-Undefined/examples.kyle-undefined.github.io) repo over on GitHub. Below is a final example utilizing all of this to have separate coins flip with different animations.

Catch ya on the flip side!

<iframe src="https://examples.kyleundefined.dev/coin-flip/flip-final.html" width="100%" height="1480" loading="lazy" title="Flip Final"></iframe>