# musicForProgramming("IPFS!");

This is a port of [musicForProgramming.net][mfp] remade with [Svelte][svelte]
and aimed to be hosted with [IPFS][ipfs].

![2021-09-27 02_07_31-Window](https://user-images.githubusercontent.com/2477952/134829029-35ff610a-6317-4483-8441-a59be53d0c43.png)

Most of the content in this repository are the result of
[Datassette's][datassette] hard work. All love goes to Datassette and the
contributors to [musicForProgramming.net][mfp] for making such a wonderful site
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

## View it online

_Yea not yet. It's work in progress, see?_

## Difference with [musicforprogramming.net][mfp]

|                    | This repo          | [musicforprogramming.net][mfp] |
| ------------------ | ------------------ | ------------------------------ |
| Hosting            | [IPFS][ipfs]       | HTTP                           |
| Backend            | None (static site) | PHP                            |
| Frontend framework | [Svelte][svelte]   | [jQuery][jquery]               |
| Originality        | _Barely any_       | _Tons_                         |

## Setting up dev env

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

## Developing

Serve code locally with live reloading on code change:

```console
$ npm run dev
```

Visit <http://localhost:5000/>.

## License

This repo has not yet been assigned an open source license, as I need to clear
up with the original author if this repo is even allowed.

[node-dl]: https://nodejs.org/en/download/
[ipfs]: https://ipfs.io/
[svelte]: https://svelte.dev/
[datassette]: http://datassette.net/
[mfp]: https://musicforprogramming.net/
[jquery]: https://jquery.com/
