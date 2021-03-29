#!/bin/sh
rm -rf public
hugo -D --gc -d public
