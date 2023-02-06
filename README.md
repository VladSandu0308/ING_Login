## Summary

I have started this application with the idea to also have two routes, for
each page. After seeing the complexity of this app is not so big, I found it
better to have just a component and to change the rendering based on state. I
left there commented all the code for the routing, so when need the Developer 
has a starting point

To keep login persistent on page refresh I also add the email in localStorage
(as this is just frontend, we don't have a token, so we use the email to simulate).

I used LionInput and LionButton for the login form. I also have some basic 
validators for the email and password. As we don't have a backend or sign up
page in this app, in the user details I show only the email, but other fields
can be added very easily.

The page is quite simple, nothing complicate UX-wise, for the colors I choose a collor pallete scheme for it to be UX friendly. What could be added for better
UX would be labels for login fields, but as for this page it is quite straightforward so maybe some labels would just overload the page, but I am 
open to suggestions.

