@echo off
title Anki Decks Maker for Quartet Study Resources
color 1F

set /p id="Please press ENTER to generate Vocab Decks for Quartet."

python anki_decks_maker.py ../../lessons

pause
