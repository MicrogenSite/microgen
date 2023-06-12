---
name: Measuring IPFS
date: 2023-04-15T00:00:00.000Z
days: 1
venueName: 'Radisson Grand Place, Brussels'
venueAddress: ''
label: All Welcome
description: >
  Room: Madrid. A data-driven approach to the design and operation of IPFS and
  libp2p through rigorous network measurements, performance evaluation, and
  recommendations for builders and operators.\

  [View video
  playlist](https://youtube.com/playlist?list=PLuhRWgmPaHtQkkbiq-PbIkt9_S2NjJz6x)
priority: 3
attendees: 50
org: ''
dri: Yiannis Psaras
times: '11:00 AM - 6:00 PM'
timeslots:
  - time: '11:00 - 11:30'
    speakers: Yiannis Psaras
    description: >
      We will introduce the importance of data-driven protocol design and
      optimisation and the measurement campaigns that the ProbeLab team has
      carried out in the past couple of quarters. We will selectively dive into
      a couple of them, present representative results and provide pointers for
      the rest. We will also talk about KPIs for the IPFS network and discuss
      our future plans.


      [View
      slides](https://ipfsthing.slack.com/files/U03P35Q59HR/F053DBG9TT5/ipfs_thing_2023_-_measurements_track_opening_talk.pdf)
      | [View video](https://youtu.be/O8Nk1FN04Q8)
  - time: '11:30 - 11:50'
    speakers: Asmir c
    description: |
      Measurements & Performance when building protocols.
      [View video](https://youtu.be/tZmcNktfoxw)
  - time: '11:50 - 12:10'
    speakers: Gui
    description: >
      Bitswap is the current data exchange protocol for IPFS. When a new CID is
      requested, kubo will first broadcast the request to all directly connected
      peers over Bitswap. If the content wasn’t provided by any connected peers
      after a timeout, kubo will start a DHT walk to find where the content is
      located. This talk discusses the effectiveness of the Bitswap discovery
      broadcast and the use of Bitswap as a Content Router.

      [View video](https://youtu.be/zppddk2O9UQ)
  - time: '12:10 - 12:30'
    speakers: Zhengyu Wu
    description: >
      Participants will have ideas about how video stream is currently on IPFS.
      Also have idea how can we improved video streaming with IPFS.

      [View slides](QmQKz2gJ6zwpU8pV36U2HKsh2t6FV6TsY45aKWSTksW1uG)

      [View video](https://youtu.be/MuBFNnZeH08)
  - time: '12:30 - 13:30'
    speakers: 'None '
    description: |
      1 hour
  - time: '13:30 - 13:50'
    speakers: Max (mxinden)
    description: >
      Measuring libp2p's transport performance with the new perf protocol
      https://github.com/libp2p/specs/pull/478.

      [View video](https://youtu.be/2h9jth3nvJw)
  - time: '13:50 - 14:30'
    speakers: Yiannis Psaras
    description: >
      During the last couple of quarters we have seen several developments
      landing on IPFS's public DHT: the content routing-specific operation of
      Hydras has been disabled, the resource manager was turned on by default
      and some misconfiguration of it led to several nodes in the network
      performing worse than expected. In parallel we developed improvements that
      will hopefully increase the performance. This talk will present data from
      our measurement experiments and will also lay out our future plans.

      [View
      slides](https://ipfsthing.slack.com/files/U03P35Q59HR/F053G8U7CMA/ipfs_thing_2023_-_state_of_dht_content_routing_through_measurements.pdf)

      [View video](https://youtu.be/8cGEjdCfm14)
  - time: '14:30 - 15:00'
    speakers: Max (mxinden)
    description: >
      In 2022 we rolled out hole punching in libp2p. One year has passed since.
      We launched a large measurement campaign with many volunteers deploying
      vantage points in their home network, punching holes across the globe.

      In this talk I will give an overview of the largest hack of the internet
      (aka. hole punching), dive into learnings running it on IPFS (~50\_000
      nodes) and finally present the data collected through our measurement
      campaign.

      If you always wondered how hole punching works, how much more successful
      UDP is over TCP, whether IPv4 or v6 makes a difference, which country is
      most friendly to p2p and how to overcome symetric NATs, join for the talk!

      [View video](https://youtu.be/R-ToBsdlEk4)
  - time: '15:00 - 15:30'
    speakers: Logan Lentz
    description: >
      Unlocking a Few Secrets of IPFS Engagement: Learn about our journey
      creating an Anonymous Analytics Platform that respects user privacy while
      giving developers usable information about their data on IPFS.
  - time: '15:30 - 16:00'
    speakers: 'None '
    description: |
      45 min
  - time: '16:00 - 16:30'
    speakers: 'None '
    description: ''
---






