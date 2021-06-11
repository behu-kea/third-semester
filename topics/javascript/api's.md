# API's

### Explanation[#](https://syllabus.codeyourfuture.io/js-core-3/week-2/lesson#explanation)

- API stands for `Application Programming Interface`
- APIs are created by providers and used by consumers
- It is a specific part of a larger system that can be contacted by other systems, for example from the internet.
- When we connect to an `API` we say that we are connecting to an `Endpoint`
- Some well-known APIs are [Facebook APIs](https://developers.facebook.com/), [Twitter APIs](https://developer.twitter.com/en/docs), [Maps APIs](https://developers.google.com/maps/documentation) and many many more
- In particular, an API doesn't care what language or technology is used in the consumer or the provider

An API is a set of rules that allow programs to talk to each other. The  developer creates the API on the server and allows the client to talk to it. An example of a server is the application on a computer hosting a  website and an example of a client is the browser on the phone trying to access the website.



#### Why do we need APIs?

Imagine that I am a big social network and I want to give developers all over  the world access to the data on the people on my website.

What are some problems that I would have with sharing my data with everyone?

1. Some of the information that I have is public (for example, peoples names)  whilst other information I have is private (for example, email  addresses). I want to make sure that I only ever give developers access  to peoples names but never to their email addresses - otherwise they  could send them spam email.
2. I want to make sure that when  developers ask for my data I can control who has access to it. I like  that my users data is being used to make their lives better but I don't  like it when companies try to sell them new stuff they don't need.
3. Some developers might want to change some of the users details on my social  network and this would get very messy quickly if people where allowed to change whatever they wanted

An API is a special type of program what acts as a **gatekeeper** to all of this information. Having an API means that I can control  which information is shared about my users and who it is shared with.  Perfect!



#### Types of APIs

- Private: for employees only under a company network for internal use.
- Semi-private: for clients who paid for the API.
- Public: for everyone on the web (but may or may not need an account to use).



##### Examples

Here is the API endpoint for Transport For London

https://api.tfl.gov.uk

The data from this endpoint will be used by many apps that you use every day - Google Maps and Citymapper to name two.

This endpoint will get location of all of the Bikepoints in London.

https://api.tfl.gov.uk/BikePoint

That's a lot of Bikes! It would be better if we could search for a location. Luckily this API let's us search for places.

https://api.tfl.gov.uk/BikePoint/Search?query=Clerkenwell

This API also has lots of other endpoints that we can use to get other data. For example, lets find the Air Quality of London.

https://api.tfl.gov.uk/AirQuality

As you can see the URL changes the data that we get from the API. This can be broken down like this

![img](https://syllabus.codeyourfuture.io/d0825b367234d87595094acd4af9939b.png)



## GET request



## `fetch`

