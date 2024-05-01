# Workshop_4

Workshop 4

Interactivity
* Create an interactive p5.js sketch with at least three different kinds of user input events.
* Experiment with ways to record and redeploy inputs from the user.

HTML elements
‘createButton()’

Under function set up
……
Let button = createButton(‘click here’);
Button.position(width/2, height/2);
Button.mousePressed(()=> {
Let r= random(xxx);
image(r, xxx,xxx);
}):
}

——————

Checkbox (@8min)

Under function setup
checkbox=createCheckbox();
checkbox.position(xxx,xxx);

———————
Let slider; (top of the page)
Function setup
Canvas
slider=createSlider(0,255);
Slider.position (xxx, xxx);
Slider.size (xxx);

Function draw
Background
Let val=slider.value(); (needs constantly changing so under function draw)
*backgroung(val); (optional, if want the background to change with the adjustment of slider)

—————————
@15min
Function draw
Background
Let x= selection.selected();
￼
——————

@16:30
Let theInput; (top of the page)

Function setup
theInput=createInput();
theInput.position(xxx,xxx);

Function draw
Let words= theInput.value();
text(words, xxx, xxx);
}

—————————————
￼
