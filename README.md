## Description

This is **`Difference generator`** - a program that determines the difference between two configuration files and provides it to the user in chosen format.

## Requirements

1. Node.js v17.6
2. Windows 10 with WSL / macOS 10.15+ / any Linux distributive.

## Features

* Accepts different configuration file extensions: **`.json`** / **`.yaml`** / **`.yml`**
* Outputs comparison result in different formats: **`stylish`** / **`plain`** / **`json`**

## Settings

Default output format is **`stylish`**
</br>
For another output format, use the flag *-f* or *--format* with values **`plain`** or **`json`**.

## Installation

1. Clone this repository to create a local copy on your computer;  
2. Open your local repository;  
3. Use **`npm install`** and **`sudo npm link`** commands.

## Usage

***
```
gendiff [-h] [-V] [-f] <filepath1> <filepath2>

    Options:
        -h, --help           output usage information
        -V, --version        output the version number
        -f, --format         output format (default: "stylish")
```
***

## Comparison tests

#### Test 1

[ File type: **`plain`** ] [ File extension: **`.json`** ] [ Output format: **`stylish`** ]
[![asciicast](https://asciinema.org/a/581089.svg)](https://asciinema.org/a/581089)

#### Test 2

[ File type: **`plain`** ] [ File extension: **`.yaml & .yml`** ] [ Output format: **`stylish`** ]
[![asciicast](https://asciinema.org/a/581091.svg)](https://asciinema.org/a/581091)

#### Test 3

[ File type: **`nested`** ] [ File extension: **`.json`** ] [ Output format: **`stylish`** ]
[![asciicast](https://asciinema.org/a/581098.svg)](https://asciinema.org/a/581098)

#### Test 4

[ File type: **`plain`** ] [ File extension: **`.json`** ] [ Output format: **`plain`** ]
[![asciicast](https://asciinema.org/a/581101.svg)](https://asciinema.org/a/581101)

#### Test 5

[ File type: **`plain`** ] [ File extension: **`.json`** ] [ Output format: **`json`** ]
[![asciicast](https://asciinema.org/a/581102.svg)](https://asciinema.org/a/581102)