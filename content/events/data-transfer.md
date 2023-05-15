---

name: "Data Transfer"
date: '2023-04-15'
days: 1
venueName: 'Radisson Grand Place, Brussels'
venueAddress: ''
label: All Welcome
description: >-
  Room: Amsterdam + Luxembourg.
  
  Come join the Protocol Thunderdome as we battle to determine the best way to move content addressed bytes! We'll review recent progress in data transfer, including work coming out of the Move The Bytes Working Group, and explore how we can make IPFS 10x faster at getting your stuff than Web2!  
  
  [View video playlist](https://youtube.com/playlist?list=PLuhRWgmPaHtS6WBDGK8oxcBHA6ILKatVk)
priority: 3
attendees: 50
org: ''
dri: 'Hannah Howard'
times: '11:00 AM - 6:00 PM'

timeslots:
  - time: '11:00 - 11:25'
    speakers: 'Hannah Howard'
    title: "Track Intro"
    description: "15 minutes

[View video](https://youtu.be/13_zr--akhs)"

  - time: '11:25 - 11:55'
    speakers: 'Rüdiger Klaehn'
    title: "Moving the bytes with bao"
    description: "At number0 we have chosen to use blake3 verified streaming for data synchronization. I will explain how bao works, what the tradeoffs are, and what higher layers will benefit from lightning fast partial sync of large files.

[View video](https://youtu.be/bK9KDJxCfzI)"

  - time: '11:50 - 12:20'
    speakers: 'James Walker'
    title: "CAR Mirror Reflections"
    description: "CAR Mirror describes a method for efficiently diffing, deduplicating, packaging, and transmitting IPLD data from source to sink.  In this talk I'll give an introduction to the CAR Mirror protocol and then review the current state of the Go implementation.

[View video](https://youtu.be/UeSb7vC0K7Y)"

  - time: '12:30 - 13:00'
    speakers: 'None '
    title: "LUNCH"
    description: "1 hour"

  - time: '13:30 - 14:00'
    speakers: 'Hannah Howard'
    title: "Fetch Content Like A Border Collie: Introducing Lassie"
    description: "Lassie is a new universal IPFS retrieval client, that speaks multiple data transfer protocols to easily find and fetch your data -- no questions asked. Lassie is already operating at scale in the Saturn network. We'll talk about our design goals with Lassie, how we built it, and how Lassie might learn to speak your bespoke data transfer protocol in the future!

[View video](https://youtu.be/d5SzSm8NkUU)"

  - time: '14:05 - 14:35'
    speakers: 'Jorropo'
    title: "RAPIDE"
    description: "RAPIDE has been proposed recently as a way to improve the content fetching performance of IPFS. This talk will be a demo of RAPIDE powering ipget 2.0. A brief description of the internals of RAPIDE will also be given to provide context to the audience.

[View video](https://youtu.be/Cv01ePa0G58)"

  - time: '14:25 - 14:55'
    speakers: 'Philipp Krüger'
    title: "Data Transfer batching Techniques featuring Blake3, CAR Mirror, and more"
    description: "Batching block transfer is the main way to optimize DAG exchange compared to bitswap.
This talk discusses current proposals for batched data transfer such as blake3 with bao, sending CAR files, CAR mirror, and GraphSync. We’ll look at what use cases they do and don’t solve as well as which techniques from one protocol could be applied in others.

[View slides](https://bafybeih45t7oeqzlplns3v52zbl4opc73mfjhjhr2hnnkfdvdxrym43tji.ipfs.dweb.link/?filename=DataTransferBatchingTechiques.pdf)

[View video](https://youtu.be/VjZrOg1O-ac)"

  - time: '14:45 - 15:15'
    speakers: 'None '
    title: "We Moved The Bytes, Where Did They Go?"
    description: "Over the last few months, we assembled the Move The Bytes Working Group to improve data transfer protocols across the IPFS network. This panel discussion will cover what we discussed, what we think we learned, and where we'd like to take this work from here.

[View video](https://youtu.be/k_GcYmV5QTQ)"

  - time: '15:30 - 16:00'
    speakers: 'None '
    title: "BREAK"
    description: "45 minutes"

  - time: '16:15 - 16:35'
    speakers: 'dvd'
    title: "Retrieval Compatibility in the IP Network"
    description: "Retrieval Compatibility in the IP Network - bitswap, graphsync, and more!

[View slides](https://docs.google.com/presentation/d/1k0vN-HqxhpYK4BKWIsAugcJSlWGna3UHShpCvLxkyvE/edit?usp=sharing)

[View video](https://youtu.be/H0jw3jEjBMM)"

  - time: '16:40 - 17:10'
    speakers: 'Floris Bruynooghe'
    title: "Delta Chat and Iroh"
    description: "Delta Chat is a messenger using email as transport and with no additional infrastructure.  This talk will discuss how the minimalist Iroh is used by Delta Chat to easily set up a second device by connecting both devices peer-to-peer.

[View video](https://youtu.be/E-e758AYkmA)"

  - time: '17:00 - 17:30'
    speakers: 'Franz Heinzmann'
    title: "Repco - Exchanging community media and metadata over IPLD"
    description: "We present Repco, an open source tool to replicate content from community media publishers. Repco uses IPLD repositories, CAR streams and UCANs to exchange authenticated logs of media content and metadata, which is ingested from different sources (RSS, REST APIs). Repco is developed within a wide network of European community media publishers and builds on long-running discussions on better publishing networks for small-scale media outlets. Future plans include connecting to speech transcription and translation services as well as integrating community features over ActivityPub.

[View video](https://youtu.be/Qci5Fo_uwbk)"

  - time: '17:20 - Invalid Date'
    speakers: 'None '
    title: "Reflections, Discussions, Looking Ahead"
    description: "Open ended discussion for as long as we need"

---