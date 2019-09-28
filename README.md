1. What code draws the blades of grass?

stroke(random(60, 70), 100, 90);
line(x, height-10, x+random(-10, 10), height-10-random(h));

2. What code makes the "lawnmower" come by? How often does it come by?

rect(0, 0, width, height-15);
it will come when the grass h = 10;

3. What's the point of the h variable?

to control the height of the grass grow.
"h = h + 3;" that means continue growing bc the if statement is True.

4. What does the -10 do in the second and fourth arguments of the line function, height-10-random(h) ? Why is it there?

line(x, height-10, x+random(-10, 10), height-10-random(h));
It should be "line(x1, y1, x2, y2)", so I think if "x" = x-exit, then "height-10" should be the y-exit, and "-10" is becuase at the second arguments sets "var h = 10" but "10" is much higher than the grass starting point, so "-10" to let it grow from the begeining; the "x+random(-10,10)" should be the directions of grass sticks, it means that their range is from -10 to 10 on the x-exit. For example if set it to (-50,10) the grass will grow more towards the left side; For the "height-10-random(h)" I found out that if change the "-10" to 50 then the grass beging with a longer stick which means get cut faster, and that's not what we want, so we must let the "height-10" and to avoid random hight to be too high we should sldo do "-random(10)" inorder to let the grass srat short. 
