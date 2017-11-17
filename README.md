# Chatbase middleware for Botkit
A middleware package for [Botkit](http://howdy.ai/botkit) that easily logs your convos in [Chatbase](http://chatbase.com)

_**Currently only supports Slack right now.**_

## Install

`npm install chatbase-botkit --save`

## Usage

It's really simple!

First, in your `bot.js` file, include this module and initialize it with your Chatbase API key.

```
var chatbase = require('chatbase-botkit')(API_KEY).slack;
```

Second, add the following code, usually right after initializing the Botkit controller.

```
controller.middleware.receive.use(chatbase.receive);
controller.middleware.send.use(chatbase.send);
```

### That's it!

# Disclaimer

All mention of Chatbase and its use in this project are copyright of Chatbase and Google at http://chatbase.com and http://google.com, respectively.

I do not work for Chatbase or Google, nor does Chatbase or Google endorse this project in any way.  I'm the CTO of [Obie.ai](http://obie.ai) who needs analytics on my bot!

# License

MIT License

Copyright (c) 2017 Alex Sopinka

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
