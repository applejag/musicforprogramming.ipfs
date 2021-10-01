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
/ipfs/QmNw2zeMRYXb5ud7oJ49ytSdJS2Nuw4gpKn18VgEAKRSht                  CIDv0
/ipfs/bafybeiaiz3zalf3aoei54a6vhtlucw7njoeozsp5s7ohcqil5t4fhy3ya4     CIDv1

ipns://mfp.jillejr.tech                                               DNSLink
ipfs://QmNw2zeMRYXb5ud7oJ49ytSdJS2Nuw4gpKn18VgEAKRSht                 CIDv0
ipfs://bafybeiaiz3zalf3aoei54a6vhtlucw7njoeozsp5s7ohcqil5t4fhy3ya4    CIDv1
```

### HTTP gateways

- IPFS.io via DNSLink: <https://ipfs.io/ipns/mfp.jillejr.tech/>
- IPFS.io via CIDv0: <https://ipfs.io/ipfs/QmNw2zeMRYXb5ud7oJ49ytSdJS2Nuw4gpKn18VgEAKRSht/>
- IPFS.io via CIDv1: <https://ipfs.io/ipfs/bafybeiaiz3zalf3aoei54a6vhtlucw7njoeozsp5s7ohcqil5t4fhy3ya4/>
- dweb.link via DNSLink: <https://mfp-jillejr-tech.ipns.dweb.link/>
- dweb.link via CIDv1: <https://bafybeiaiz3zalf3aoei54a6vhtlucw7njoeozsp5s7ohcqil5t4fhy3ya4.ipfs.dweb.link/>

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
$ ipfs get QmVLtnqifKS25PYYMSTfMe3Nze4fTsynDwMLeV3gUCHa4k -o public/audio
Saving file(s) to QmVLtnqifKS25PYYMSTfMe3Nze4fTsynDwMLeV3gUCHa4k
 5.00 MiB / 7.06 GiB [>----------------------------------------------------------------]   0.07% 38m45s
```

However that can be quite slow. So a faster alternative is to use BitTorrent
(ex: via [WebTorrent](https://webtorrent.io/)):

1. Download <https://musicforprogramming.net/MFP_01-52.torrent>.
   That only provides the songs 01 to 52.

2. Songs 53 to 62 will have to be downloaded manually from the webpage
   <https://musicforprogramming.net/>.

   Place the downloaded songs in `public/audio/*.mp3`.

### Serve local files

Serve code locally with live reloading on code change:

```console
$ npm run dev
```

Visit <http://localhost:5000/>.

## License

This repo has not yet been assigned an open source license, as I need to clear
up with the original author if this repo is even allowed.

To be clear: I, jilleJr, am not the author of musicforprogramming.net.

Most of the content in this repository are the result of
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
