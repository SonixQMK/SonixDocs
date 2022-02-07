---
layout: page
title: Frequently Asked Questions
permalink: /faq/
nav_order: 3
---


# FAQs

- **If I flash this firmware, will I be able to revert to the original firmware later?**

Yes you can, you can flash the stock firmware using Sonix-Flasher, but keep in mind that we only have a handful of stock firmwares in our [repo](https://github.com/SonixQMK/Mechanical-Keyboard-Database/tree/main/stockFWs).

If yours is not there you will have to source it from the manufacturer, ask us in our Discord if you can't find it.

- **I am having trouble building the firmware, what am I missing?**

Please make sure you have fully read the installation guide, check if you have the required toolchains as well as cloned the correct repository/branch and its subrepos, this will help everyone in the discord server and yourself to save time.

- **Is Bluetooth supported?**

For the time being: No. 

There are currently efforts to enable bluetooth in a subset of boards but it is still a WIP and not every Bluetooth module will be compatible.

- **Is VIA supported?**

Short answer: yes. Long answer: Some keyboards doesn't have the necessary JSON file and/or VIA keymap, if they are not present you can help us activate VIA for it.

- **Why is OpenRGB not working with my keyboard?**

Make sure you are using the correct branch: *sn32_master_orgb* and you are enabling the OpenRGB flag (*OPENRGB_ENABLE = YES*), lastly, double check you have set the correct VID/PID in OpenRGB.

- **My keyboard has SONIX chip but it is not listed, when are you supporting it?**

We can't support all SONIX boards since we need physical access to it to map the matrix, rgb matrix as well as other misc. stuff (encoders, toggle switch, indicators, etc). 

We can gladly help you port QMK into it, but we are not liable of any damages that may happen to your board.

- **My keyboard crashes randomly with QMK installed**

Please make sure that your toolchain is in the correct version.
