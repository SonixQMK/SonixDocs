---
layout: page
title: How To Install
permalink: /install/
nav_order: 2
---

# Install Instructions
{: .no_toc }

**There is a small chance that you may brick your keyboard in the flashing process**, continue at your own risk. Use an appropriate cable, make sure you won’t lose power during flashing and follow the steps carefully.

This guide doesn’t cover bluetooth connectivity, following this guide will disable your keyboards bluetooth mode.

**Feel free to ask in our [Discord Server](https://discord.gg/8XqzfBknfC) if you encounter any problems.**

# Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## 1. Identifying your Microcontroller Unit (MCU)

This part is crucial since this is where you determine if the keyboard you are trying to flash is compatible with this project.

There are several ways to identify the MCU but the best way is to remove your keyboard's printed circuit board (PCB) from the case and taking a look at the serial number printed on the MCU.

The MCU is usually one the biggest chip in the PCB, it should look something like this.

![MCU closeup]({{site.baseurl}}/assets/images/mcu_closeup.jpg)

Please refer to the table down bellow to identify its Sonix model (if applicable) since going forward in this guide we are only going to refer to it by its Sonix model.
e.g: In the picture above the MCU is a **HFD2201KBA** but its Sonix counterpart is a **SN32F248B**.

<details>
  <summary>MCU List. Click to expand!</summary>
  {% include table.html data=site.data.mcus %}
</details>

**Continue to the next step only if your MCU is compatible.**

---

## 2. Setup QMK Enviroment

Before you can compile the firmware; you need to install the tools and the enviroment to build it. Manual compilation is preferred over using the pre-compiled firmwares since it will allow you to modify various aspect of it.

---

### 2.1 Preparing build enviroment 

Please follow [QMK instructions](https://docs.qmk.fm/#/newbs_getting_started?id=setting-up-your-qmk-environment){:target="_blank"} to setup the build enviroment.

**Come back to this page before running `qmk setup`!!!**

---

### 2.2 Setting up QMK Enviroment

After installing QMK run the following command:

```bash 
qmk setup SonixQMK/qmk_firmware -b sn32_master
```

In most situations you will want to answer y to all of the prompts.

---

## 3. Compiling your keyboard firmware

Now that your enviroment is configured, you can compile one of the default keymaps for your keyboard. Keep in mind that this step varies between keyboards since nearly all compatible boards are mantained by different people.

The command format to compile is a follow:
```bash 
qmk compile -kb <keyboard> -km <keymap>
```

For example, to build the Redragon K530, you would use:
```bash 
qmk compile -kb redragon/k530 -km default
```

Another example to build the ISO variant of the Keychron K2 RGB
```bash 
qmk compile -kb keychron/k2/rgb/iso -km iso
```

When done you will see and output similar to this:
```bash 
Linking: .build/keychron_k2_rgb_iso_iso.elf                                                         [OK]
Creating load file for flashing: .build/keychron_k2_rgb_iso_iso.hex                                 [OK]
Size after:
   text    data     bss     dec     hex filename
      0   48514       0   48514    bd82 .build/keychron_k2_rgb_iso_iso.hex
Creating binary load file for flashing: .build/keychron_k2_rgb_iso_iso.bin                          [OK]
Copying keychron_k2_rgb_iso_iso.bin to qmk_firmware folder                                          [OK]
(Firmware size check does not yet support SN32F248BF; skipping)
```

---

>**Compilation tip**
>
>To reduce the compilation time you can add the `-j <number of cores>` flag to the `qmk compile` command. e.g:
>```bash
>qmk compile -j 8 -kb redragon/k530 -km default
>```


---

## 4. Flashing the Firmware

### 4.1 Downloading the flasher

The Sonix Flasher is a community driven flasher for the SN32F248(B) and SN32F268 boards. It has been specially developed to reduced the number of bricked SN32F268 boards thanks to the ability to flash a special piece of code called "Jumploader" (more on that later). 

For now, you will need to download the [Sonix Flasher](https://github.com/SonixQMK/sonix-flasher/) from [here](https://github.com/SonixQMK/sonix-flasher/releases/latest)

---

### 4.2 Entering BOOT mode

The Sonix MCUs has the ability to enter a special mode called "BOOT" mode, in this mode, the flasher can upload the firmware to the MCU.

---

<Details markdown="block">
<summary><b> BOOT mode in SN32F248B Boards. Click to expand! </b></summary>

The Sonix SN32F248B can be put in BOOT mode by shorting the "BOOT" pin to ground (GND) before powering the board.

The BOOT pin is located at pin 3 (see picture bellow), you will need to short this pin with GND, for example the USB connector housing.

![Boot pin 248b]({{site.baseurl}}/assets/images/boot_pin248b.jpg)

Grab a piece of wire and try to place one end on the BOOT pin and the other end on GND, and with a little help of someone, try to connect the board using its USB cable to your computer. 

You know it is in BOOT mode if your board is connected to your PC and your board doesn't respond to keypress and the RGB/backlight is off.

---

>**BOOT tip**
>
>On certain boards, the manufacturer could place two test pads that are connected to BOOT and GND so it can be easier to put the board in BOOT mode. For >example,  Keychron boards usually have these two pads bellow the spacebar so they can be shorted using a pair of tweezer.
>
><Details markdown="block">
><summary>Keychron Testpads</summary>
>![Test pads Keychron]({{site.baseurl}}/assets/images/boot_pin_keychron.jpg)
></Details>
>
>It is not always a given that these pads are accesible, be sure to ask us in our [discord server](https://discord.gg/8XqzfBknfC) if you have any doubts.

</Details>

---

<Details markdown="block">
<summary><b> BOOT mode in SN32F268B Boards. Click to expand! </b></summary>
TODO...
</Details>

---

### 4.3 Flashing the keyboard

Be sure to set your keyboard in BOOT mode and then open Sonix Flasher, your board should be detected and it should display the MCU name followed by "bootloader":

![Sonix Flasher]({{site.baseurl}}/assets/images/sonix_flasher_device.jpg)

---

<Details markdown="block">
<summary><b> Flashing SN32F248B boards. Click to expand!  </b></summary>

Confirm that:
- The SN32F24x radio button is selected
- Your board is selected from the dropdown list
- The qmk offset is set to "0x00"

![Flashing 24x]({{site.baseurl}}/assets/images/sonix_flasher_248b.jpg)

Press the "Flash QMK..." button:

![Flash Button 24x]({{site.baseurl}}/assets/images/sonix_flasher_248b_button.jpg)

Select the *.bin that you built previously (it will be located at "qmk_firmware/.build" ) and hit "Open". **The moment you press this button it will start to flash**

![Select fw]({{site.baseurl}}/assets/images/sonix_flasher_248b_file.jpg)

</Details>

---

<Details markdown="block">
<summary><b> Flashing SN32F268B boards. Click to expand! </b></summary>
TODO...
</Details>

---

**If everything went right, your keyboard will be flashed with QMK and ready to go!**
