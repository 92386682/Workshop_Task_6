# Workshop_Task_6
##Process
Beginning by rereading p5s referencing for text functions, I loaded up some basic font/text alignment fixes for the canvas setup,  and essentially followed the workshop steps to recreate the tutors own setup, up until RiTa integration.
![56](https://github.com/user-attachments/assets/38e829f7-664b-4a0e-b223-2e412fbf7636)

Trying to move away from simply copying code by rote, I decided to try a little graphic design, and create a half grey background of constantly shifting text, as my first foray into RiTa. Beginning with test text and rereading both p5s text referencing and RiTa’s own referencing, I ended up with this. I also integrated a new font in at this point.
IMAGE
To generate random text, I was planning on calling a cvs table with 26 entries, each a letter of the alphabet. By then integrating this into a loop with a random(0,26) I believed that I could call a random assortment of letters as a string, translate this string into RiTa to generate words beginning with those letters, and then feed that as a variable into a text() function to generate a background of constantly shifting letters.
Massive errors with how I’m playing functions and calling the table, realised halfway through it needed to be in setup. I began by creating the CSV, and trying to call the letter “A” (0,0) as text manually. 
Succeeding this, I then spent some time creating the for() loop to create a longer series of letters to print. This ended up being

  `` for ( x = 0; x < 40; x++) {
      randomiser = floor(random (0, 26));
      letter = table.getString(randomiser, 0);
      alphabet.push(letter);
    ``
At this point, I took a closer look at RiTa’s documentation, and realised that ‘RiTa.randomWord()’ did this entire process, and most likely did it better. 
![56](https://github.com/user-attachments/assets/ab8f2cf0-4302-4155-a73d-852201f0bfbf)
![62](https://github.com/user-attachments/assets/3d5e4835-ae53-4ae1-a3f4-db52e4d2484f)

After taking a long break, I commented out my work, salvaged and reapplied what could be done, and then utilised a setInterval function to finish the background. At least I’m now more confident with arrays.
So, reintegrating the newline function, I wanted to integrate the .rita phonetic translator. What happened in this period is a blur, and after 4 hours, resulted in this string of variables, most of which had somepoint been removed
![63](https://github.com/user-attachments/assets/0b91f364-12f1-4db5-94b9-65ffaa90b3e1)

Half working code
![64](https://github.com/user-attachments/assets/b5c29c1f-b5a4-4144-9886-7a69348c5402)

And so many different elements that half worked, were obsolete, were vital but how they were vital was undocumented (lessons were learnt about robust and frequent //commenting) and generally a string of code with the vibe of a house built entirely by builders who spoke different languages, all of whom were suffering from early on-set dementia. Putting the task aside and hoping to come back to it, I unfortunately ran out of time to fix it, and this task was not my best. In particular, the amount of time put into it is in no way reflected by outcomes, which could have been far more developed if I hadn’t gone down so many false starts.

##Problems
I ran into difficulties when creating the background loop, as I was unsure the precise syntax of how single variables are pushed into arrays, and then calling on this, but this was easily fixed with a mix of p5 referencing and experimentatation.  At a certain point, I had so many variables saved and then discarded, that the code itself would have been easier rewritten and simplified than attempting to continue.
