# musicForProgramming("IPFS!");

Listen to music while you program, streamed via the peer-to-peer technology [IPFS][ipfs]. The music comes from [musicforprogramming.net][mfp], and has been carefully chosen to maximize concentration by providing just the right amount of interest to occupy the parts of your brain that would otherwise be left free to wander and lead to distraction during your work.

![2021-09-27 02_07_31-Window](https://user-images.githubusercontent.com/2477952/134829029-35ff610a-6317-4483-8441-a59be53d0c43.png)

> This web page was stumbled together by [@jilleJr](https://github.com/jilleJr) in Visual Studio Code. It is a dApp port of the wonderful [musicforprogramming.net][mfp], rewritten in [Svelte][svelte] in the plan of hosting it [IPFS][ipfs].
>
> This site was _originally_ knocked together by [Datassette][datassette] in SublimeText. Episodes are faffed with using iZotope Ozone and Adobe Audition to maintain comparable loudness and frequency presence between episodes.

## View it online: 👉 [`ipns://mfp.jillejr.tech`](ipns://mfp.jillejr.tech) 👈

```
/ipns/mfp.jillejr.tech                                                DNSLink
/ipfs/QmT4iQv7hxwTyCuSeg5ut1tiGJwgiMNp6XpBMYgkKdhFFR                  CIDv0
/ipfs/bafybeicggvkfe43hpp34vujz5pmchxy2caela47afu7sh6pn3ir4lhc2hq     CIDv1

ipns://mfp.jillejr.tech                                               DNSLink
ipfs://QmT4iQv7hxwTyCuSeg5ut1tiGJwgiMNp6XpBMYgkKdhFFR                 CIDv0
ipfs://bafybeicggvkfe43hpp34vujz5pmchxy2caela47afu7sh6pn3ir4lhc2hq    CIDv1
```

### Seeding peers

Adding known seeding peers will speed up the dApp as that gives your local IPFS node a known place to download the files from.

Multiaddresses of peers:

```multiaddr
/ip4/127.0.0.1/tcp/4001/p2p/12D3KooWLzTuiZtMJDFzJuGQ2mob5ySC3wY2EndGhitrCV5RQ7BC
```

- If you're using the [IPFS Companion](https://github.com/ipfs/ipfs-companion) browser extension or the [IPFS Desktop](https://github.com/ipfs/ipfs-desktop) app

  - Open the control panel UI and enter the "PEERS" tab from the left sidenav.
  - Then click <kbd>+ Add connection</kbd> and paste a peer multiaddress from above.

- If you're using the [IPFS CLI](https://github.com/ipfs/go-ipfs)

  - Run the following command:

    ```console
    $ ipfs swarm connect /ip4/127.0.0.1/tcp/4001/p2p/12D3KooWLzTuiZtMJDFzJuGQ2mob5ySC3wY2EndGhitrCV5RQ7BC
    connect 12D3KooWLzTuiZtMJDFzJuGQ2mob5ySC3wY2EndGhitrCV5RQ7BC success
    ```

### Alternatives via gateways

- IPFS.io via DNSLink: <https://ipfs.io/ipns/mfp.jillejr.tech/>
- IPFS.io via CIDv0: <https://ipfs.io/ipfs/QmT4iQv7hxwTyCuSeg5ut1tiGJwgiMNp6XpBMYgkKdhFFR/>
- IPFS.io via CIDv1: <https://ipfs.io/ipfs/bafybeicggvkfe43hpp34vujz5pmchxy2caela47afu7sh6pn3ir4lhc2hq/>
- dweb.link via DNSLink: <https://mfp-jillejr-tech.ipns.dweb.link/>
- dweb.link via CIDv1: <https://bafybeicggvkfe43hpp34vujz5pmchxy2caela47afu7sh6pn3ir4lhc2hq.ipfs.dweb.link/>
- Local IPFS node (port 8080) via DNSLink: <http://mfp.jillejr.tech.ipns.localhost:8080/>
- Local IPFS node (port 8080) via CIDv1: <http://bafybeicggvkfe43hpp34vujz5pmchxy2caela47afu7sh6pn3ir4lhc2hq.ipfs.localhost:8080/>
- Local IPFS node (port 4001) via DNSLink: <http://mfp.jillejr.tech.ipns.localhost:4001/>
- Local IPFS node (port 4001) via CIDv1: <http://bafybeicggvkfe43hpp34vujz5pmchxy2caela47afu7sh6pn3ir4lhc2hq.ipfs.localhost:4001/>
- _ok that's probably enough alternatives..._

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

2. Download all music files. It's about 6 GB of .mp3 files, so hosting them in
   the repo is unfeasible, even with Git LFS.

   Easiest way is to install [WebTorrent](https://webtorrent.io/) and download
   via <https://musicforprogramming.net/MFP_01-52.torrent>. That only provides
   the songs 01 to 52, so songs 53 to 62 will have to be downloaded manually
   from the webpage <https://musicforprogramming.net/>.

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
