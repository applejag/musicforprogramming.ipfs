# musicForProgramming("IPFS!");

Listen to music while you program, streamed via the peer-to-peer technology
[IPFS][ipfs]. The music comes from [musicforprogramming.net][mfp], and has been
carefully chosen to maximize concentration by providing just the right amount of
interest to occupy the parts of your brain that would otherwise be left free to
wander and lead to distraction during your work.

![2021-09-27 02_07_31-Window](https://user-images.githubusercontent.com/2477952/134829029-35ff610a-6317-4483-8441-a59be53d0c43.png)

> This web page was stumbled together by [@jilleJr](https://github.com/jilleJr)
> in Visual Studio Code. It is a dApp port of the wonderful
> [musicforprogramming.net][mfp], rewritten in [Svelte][svelte] in the plan of
> hosting it [IPFS][ipfs].
>
> This site was _originally_ knocked together by [Datassette][datassette] in
> SublimeText. Episodes are faffed with using iZotope Ozone and Adobe Audition
> to maintain comparable loudness and frequency presence between episodes.

## View it online: 👉 [`ipns://mfp.jillejr.tech`](ipns://mfp.jillejr.tech) 👈

### Addresses

```
/ipns/mfp.jillejr.tech                                                DNSLink
/ipfs/QmPk8pcQVSaG1yqRHYsYDXozZ6i8MN21AaoZozbnnNkTQh                  CIDv0
/ipfs/bafybeiau37kqbpu7m23ifcbbvfv6wmtjstfib3esfczshy4misp5caacny     CIDv1

ipns://mfp.jillejr.tech                                               DNSLink
ipfs://QmPk8pcQVSaG1yqRHYsYDXozZ6i8MN21AaoZozbnnNkTQh                 CIDv0
ipfs://bafybeiau37kqbpu7m23ifcbbvfv6wmtjstfib3esfczshy4misp5caacny    CIDv1
```

### HTTP gateways

- infura-ipfs.io:
  [via subdomain CIDv1](https://bafybeiau37kqbpu7m23ifcbbvfv6wmtjstfib3esfczshy4misp5caacny.ipfs.infura-ipfs.io/)

- ipfs.io:
  [via path DNSLink](https://ipfs.io/ipns/mfp.jillejr.tech/),
  [via path CIDv0](https://ipfs.io/ipfs/QmPk8pcQVSaG1yqRHYsYDXozZ6i8MN21AaoZozbnnNkTQh/),
  [via path CIDv1](https://ipfs.io/ipfs/bafybeiau37kqbpu7m23ifcbbvfv6wmtjstfib3esfczshy4misp5caacny/)

- dweb.link:
  [via subdomain DNSLink](https://mfp-jillejr-tech.ipns.dweb.link/),
  [via subdomain CIDv1](https://bafybeiau37kqbpu7m23ifcbbvfv6wmtjstfib3esfczshy4misp5caacny.ipfs.dweb.link/)

- cloudflare-ipfs.com:
  [via path DNSLink](https://cloudflare-ipfs.com/ipns/mfp.jillejr.tech/),
  [via path CIDv0](https://cloudflare-ipfs.com/ipfs/QmPk8pcQVSaG1yqRHYsYDXozZ6i8MN21AaoZozbnnNkTQh),
  [via path CIDv1](https://cloudflare-ipfs.com/ipfs/bafybeiau37kqbpu7m23ifcbbvfv6wmtjstfib3esfczshy4misp5caacny)

### Geo-replications

The dApp is pinned to multiple services to allow improved throughput and
discoverability:

- my own VPS, hosted in Frankfurt, Germany.
- <https://pinata.cloud/>, replicated in Frankfurt, Germany and New York, USA.
- <https://infura.io/>, *uncertain geographical location, but DNS records on their gateway suggests eastern US*

## Limitations

1. Requires IPFS. Adding `js-ipfs` is on the roadmap
   ([#3](https://github.com/jilleJr/musicforprogramming.ipfs/issues/3))
   and hosting it as an alternative via plain HTTP, but for now you can only
   access the site via IPFS.

2. Uses Ogg Vorbis as audio codec. This is mostly supported today, with some
   exceptions:

   > - Internet Explorer (what a shocker)
   > - Safari (allegedly works with OS X v11.3 or higher though)
   >
   > Source: <https://caniuse.com/ogg-vorbis>

   This site uses Ogg Vorbis because it trimmed down the size of the audio from
   7 GB to 3 GB. I'm not including the `.mp3` files to reduce the bloat from
   the IPFS object, but if you really want back `.mp3` then please tell me in
   [a new issue](https://github.com/jilleJr/musicforprogramming.ipfs/issues/new).

3. Slow. Not many users as of yet, and so the centralized [musicforprogramming.net][mfp]
   is way faster. Though this will hopefully get resolved the more users we get
   to allow more peers.

   In the meantime, you can increase the throughput by following the
   "Speeding up connection" guide below.

## Speeding up connection

### Seeding peers

Adding known seeding peers will speed up the dApp as that gives your local IPFS
node a known place to download the files from.

Peers

```json
[
  {
    "Addrs": [
      "/ip4/139.162.175.151/tcp/4001",
      "/ip6/2a01:7e01::f03c:92ff:fe09:773b/tcp/4001",
      "/ip4/139.162.175.151/udp/4001/quic",
      "/ip6/2a01:7e01::f03c:92ff:fe09:773b/udp/4001/quic"
    ],
    "ID": "12D3KooWLzTuiZtMJDFzJuGQ2mob5ySC3wY2EndGhitrCV5RQ7BC"
  }
]
```

Edit your IPFS config by adding the above peer:

```diff
 {
   // ...

  "Ipns": {
    "RecordLifetime": "",
    "RepublishPeriod": "",
    "ResolveCacheSize": 128
  },
  "Migration": {
    "DownloadSources": [],
    "Keep": ""
  },
  "Mounts": {
    "FuseAllowOther": false,
    "IPFS": "/ipfs",
    "IPNS": "/ipns"
  },
  "Peering": {
-   "Peers": null
+   "Peers": [
+     {
+       "Addrs": [
+         "/ip4/139.162.175.151/udp/4001/quic",
+         "/ip6/2a01:7e01::f03c:92ff:fe09:773b/udp/4001/quic"
+       ],
+       "ID": "12D3KooWLzTuiZtMJDFzJuGQ2mob5ySC3wY2EndGhitrCV5RQ7BC"
+     }
+   ]
  },
  "Pinning": {
    "RemoteServices": {}
  },
  "Plugins": {
    "Plugins": null
  },
  "Provider": {
    "Strategy": ""
  },
  // ...
}
```

This will make sure your local IPFS node does not disconnect from the peer when
it's inactive, as finding the peer again takes a lot of time.
(Docs: [`Peering.Peers`](https://github.com/ipfs/go-ipfs/blob/master/docs/config.md#peeringpeers))

If adding multiple peers, make sure to add a comma `,` on all but the last
closing object brace `}`.

### Disabling TCP connections on your local node

IPFS will happily connect up to 300-600 other peers, with one TCP connection
towards each. Unless you have a super computer and super-duper router, and even
super-er-er Internet connection, then this can stress out your router and even
your PC's OS. The limit on parallel TCP sockets is questionably low.

But there's an alternative: QUIC over UDP!

QUIC over UDP is enabled by default, but to make your computer happier you can
disable all TCP connections. The drawbacks are that not all peers support the
UDP/QUIC IPFS connection type. But when comparing _"somewhat usable with QUIC"_
vs _"locks up my home's internet so I can't even google why it's happening"_,
the former takes precedence.

Edit your IPFS config by changing the following values:

```diff
 {
   "API": {
     "HTTPHeaders": {}
   },
   "Addresses": {
     "API": "/ip4/127.0.0.1/tcp/5991",
     "Announce": [],
     "Gateway": "/ip4/127.0.0.1/tcp/9123",
     "NoAnnounce": [],
     "Swarm": [
-      "/ip4/0.0.0.0/tcp/4001",
-      "/ip6/::/tcp/4001",
       "/ip4/0.0.0.0/udp/4001/quic",
       "/ip6/::/udp/4001/quic"
     ]
   },
   "AutoNAT": {},
   // ...
   "Reprovider": {
     "Interval": "12h",
     "Strategy": "all"
   },
   "Routing": {
     "Type": "dht"
   },
   "Swarm": {
     "AddrFilters": null,
     "ConnMgr": {
       "GracePeriod": "300s",
       "HighWater": 300,
       "LowWater": 50,
       "Type": "basic"
     },
     "DisableBandwidthMetrics": false,
     "DisableNatPortMap": false,
     "EnableAutoRelay": false,
     "EnableRelayHop": false,
     "Transports": {
       "Multiplexers": {},
-      "Network": {},
+      "Network": {
+        "TCP": false,
+        "Websocket": false
+      },
       "Security": {}
     }
   }
 }
```

The first section of removals disables incoming connections to use TCP.
(Docs: [`Addresses.Swarm`](https://github.com/ipfs/go-ipfs/blob/master/docs/config.md#addressesswarm))

The latter section of changes will disable Websockets (which uses TCP) and pure
TCP connections for when your local node connects to other peers.
(Docs: [`Swarm.Transports.Network`](https://github.com/ipfs/go-ipfs/blob/master/docs/config.md#swarmtransportsnetwork))

Make sure to restart your IPFS node for the changes to take effect. For IPFS
Desktop, that would be to click the system tray icon of IPFS and then selecting
<kbd>Restart</kbd>. For IPFS in Brave, just restart the browser
(all windows must be closed).

## Why does this repo exist

1. I wanted to try developing with Svelte
2. I wanted to try publishing to IPFS
3. I want to use more dApps in everyday life, and this is a :100: everyday app for me

### Difference with [musicforprogramming.net][mfp]

|                    | This repo                | [musicforprogramming.net][mfp] |
| ------------------ | ------------------------ | ------------------------------ |
| Hosting            | [IPFS][ipfs] (over HTTP) | HTTP                           |
| Backend            | None (static site)       | PHP (I'm guessing?)            |
| Frontend framework | [Svelte][svelte]         | [jQuery][jquery]               |
| Originality        | _Barely any_             | _Tons_                         |

## Development

### Setting up dev env

1. Install [Node.js][node-dl] (v14 or greater) and download all code
   dependencies using `npm`:

   ```console
   $ npm install
   ```

### Download audio files

Too many files to be hosted in Git, even in Git LFS. They take up ~7GB at the
moment.

Can be downloaded via IPFS:

```console
$ ipfs get QmNiXZvueoyofKZoVEfs2kxWnVEe83Mc5UtyjV69B8ZB8q -o public/audio
Saving file(s) to public/audio
 5.00 MiB / 2.91 GiB [>---------------------------------------------------]   0.07% 38m45s
```

If the download is unbaringly slow, then you may be able to speed up the process
by regenerating the `.ogg` audio files by downloading the majority of the `.mp3`
songs via BitTorrent (ex: via [WebTorrent](https://webtorrent.io/)) and then
converting them by hand using `ffmpeg`:

1. Download <https://musicforprogramming.net/MFP_01-52.torrent>.
   That only provides the songs 01 to 52.

2. Songs 53 to 62 will have to be downloaded manually from the webpage
   <https://musicforprogramming.net/>.

3. Convert all files from `.mp3` to `.ogg` using ffmpeg:

   ```console
   $ for f in *.mp3; do echo "$f"; ffmpeg -i "$f" "${f/.mp3}.ogg" -hide_banner -loglevel error -stats; done
   music_for_programming_10-unity_gain_temple.mp3
   size=    1327kB time=00:01:48.00 bitrate= 100.6kbits/s speed=44.2x
   music_for_programming_11-miles_tilmann.mp3
   size=     393kB time=00:00:29.07 bitrate= 110.8kbits/s speed=30.4x
   music_for_programming_12-forgotten_light.mp3
   size=     175kB time=00:00:13.10 bitrate= 109.3kbits/s speed=29.5x
   ...
   ```

4. Place the converted songs in `public/audio/*.mp3`.

### Serve local files

Serve code locally with live reloading on code change:

```console
$ npm run dev
```

Visit <http://localhost:5000/>.

## License

The code in this repository (found in all `.js`, `.json`, `.ts`, `.svelte`,
`.css`, `.scss`, `.html` files) are licensed under GNU GPL 3.0. Full license
text can be found in [LICENSE](./LICENSE).

To be clear: I, jilleJr, am not the author of musicforprogramming.net. I merely
own this repository which contains a port of musicforprogramming.net.

Most of the content in this repository are heavily inspired by
[Datassette's][datassette] hard work. All love goes to Datassette and the
contributors to [musicforprogramming.net][mfp] for making such a wonderful site
that I've had so many hours of great use from. ❤

```js
//  __/\\\\____________/\\\\__/\\\\\\\\\\\\\\\__/\\\\\\\\\\\\\___
//   _\/\\\\\\________/\\\\\\_\/\\\///////////__\/\\\/////////\\\_
//    _\/\\\//\\\____/\\\//\\\_\/\\\_____________\/\\\_______\/\\\_
//     _\/\\\\///\\\/\\\/_\/\\\_\/\\\\\\\\\\\_____\/\\\\\\\\\\\\\/__
//      _\/\\\__\///\\\/___\/\\\_\/\\\///////______\/\\\/////////____
//       _\/\\\____\///_____\/\\\_\/\\\_____________\/\\\_____________
//        _\/\\\_____________\/\\\_\/\\\_____________\/\\\_____________
//         _\/\\\_____________\/\\\_\/\\\_____________\/\\\_____________
//          _\///______________\///__\///______________\///______________
```

[node-dl]: https://nodejs.org/en/download/
[ipfs]: https://ipfs.io/
[svelte]: https://svelte.dev/
[datassette]: http://datassette.net/
[mfp]: https://musicforprogramming.net/
[jquery]: https://jquery.com/
