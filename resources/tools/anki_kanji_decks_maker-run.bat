@echo off
title Anki Kanji Decks Maker for Quartet Study Resources
color 1F

set /p id="Please press ENTER to generate Kanji Decks for Quartet."

python anki_kanji_decks_maker.py ../../lessons

pause
