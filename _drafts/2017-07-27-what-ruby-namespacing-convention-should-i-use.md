---
layout: post
title:  "What Ruby/Rails Namespacing convention should I use, and does it matter?"
date:   2017-07-27
categories: code ruby rails
---

Most Ruby on Rails projects I work on have classes declared like this
```ruby
class Blog::post
  # blog_post code goes here
end
```
and like this
```ruby
module Blog
  class Post
    # blog_post code goes here
  end
end
```
without rhyme or reason. The developers, believing them to be interchangable, 

**Depends** and **Yes**
