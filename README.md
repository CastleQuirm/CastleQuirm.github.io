# CastleQuirm.github.io
An in-progress implementation utility tool for the Earthborne Rangers game.

All art is taken from the Print And Play files for Earthborne Rangers, and is owned by Earthborne Games.

Many aspects are still in-progress and no reliance should be made on this tool!

If you have feedback, please provide it to LeonardQuirm on BoardGameGeek or CastleQuirm on GitHub.

# Current Support

This app is built to allow play of Earthborne Rangers without having to reconstruct decks and shuffle regularly.  You are still expected and required to have the cards!

## Supported
- Setting any combination of Path Type cards with a location
  - It's a conscious choice to not restrict based on actual available paths, in case of things I haven't seen and general ease of use.
- Scouting
- Setting aside cards
- Moments on the Path (for The Valley only)


## Partially Supported
- Easier travel choices (pick a path and destination on the map, centered on where you were last!)
  - I might try to polish this to make it more obvious what it's doing/why.
- Reshuffling an empty deck.
  - Reshuffling works for the Challenge Deck as expected
  - Reshuffling is attempted for the Path Deck if emptied, but this assumes the same make-up as before i.e. no cards still in play/set-aside. 
- Special cases. The following are all supported but to varying degrees of niceness:
  - Whispering Fields (face-down attached cards)
  - Spire (seperate Spire deck)
  - Alluvial Ruins (seperate Detritus deck)
  - Archaelogical Outpost (always includes Arcology Sinkhole from The Valley set)
  - Bowl of the Sun (always includes The Fundamentalist from The Valley set)
  - Headwater Station (don't include cards from The Valley set)
  - The Philosopher's Garden (single card set face-down on arrival)
    - For this location, other cards will be turned face down but that is the user's responsibility to handle, using physical cards, since randomisation is not required or desired.
- Missions
  - Secret Invasion needed special handling and is supported
  - Other missions that I'm aware of can mostly be handled by existing function, but not always nicely
- Search for Next \[given trait\] is supported for things I know might be relevant.
  - Anything not appearing in the list...won't work at the moment.
  - Previously supported by the "Look at next card"/"keep and reshuffle" function which is general but it was horrible.

  
## Unsupported
- Player cards (that is expected to be fully managed by the player)
- The expansions (Legacacy of the Ancestors, Moments on the Path for the Arcology)