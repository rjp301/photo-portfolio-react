# Personal Photography Portfolio

## Introduction

For my first project as a graduate of a full-stack web development bootcamp I chose to create a website to showcase my second passion - my photography. For years I have been overpaying Squarespace to host my work. I made this website completely from scratch and hosted it on Google Cloud - I even designed the logo myself.

## Design

One of the main features I wanted this website to have was an easy way to modify the selection of photos. I am always creating new work and thought having to change the image URI in three different places each time would dissuade me from keeping the photos fresh. To keep the code as DRY as possible, I implemented a marginally clever mechanism for generating the pages using just the file system of the server.

When the server boots up it reads the file system and generates a representation of all the folders and the photos in those photos. This representation is passed to EJS templates for the album page and gallery pages. Those pages are able to use this object to dynamically pull in the applicable images and even assign a photo to be the cover if it has a tilde in the filename.

## Technology

I attempted to keep things as lightweight and simple as possible for my first website. I used EJS and SASS for the frontend with only a couple templates and partials and no repetitive code, and Express and NODEjs on the backend for it’s ease of use and great filesystem library.

## Challenges

Building the website was easy compared to getting it on the internet. I struggled to configure my website in Google Cloud services and transferring my domain name took a lot of tinkering with DNS Records.