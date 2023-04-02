window.BENCHMARK_DATA = {
  "lastUpdate": 1680450162794,
  "repoUrl": "https://github.com/discordeno/discordeno",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "heiheiho000@gmail.com",
            "name": "Jonathan Ho",
            "username": "H01001000"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "782a778a1dca5cb4808a607beb4d23149e4da400",
          "message": "ci: add git reset before store benchmark (#2938)",
          "timestamp": "2023-04-02T02:25:01Z",
          "tree_id": "d94765002e3952e28c98b1851ba8ae292194d826",
          "url": "https://github.com/discordeno/discordeno/commit/782a778a1dca5cb4808a607beb4d23149e4da400"
        },
        "date": 1680402440095,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "[Cache Plugin] RSS",
            "value": 0.14,
            "range": "±2.93%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 15.61,
            "range": "±1.01%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 0,
            "range": "±0%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "rest.simplifyUrl",
            "value": 233811,
            "range": "±0.25%",
            "unit": "ops/sec",
            "extra": "96 samples"
          },
          {
            "name": "Camelize 1 event",
            "value": 7073,
            "range": "±0.41%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "Snakelize 1 event",
            "value": 7117,
            "range": "±0.39%",
            "unit": "ops/sec",
            "extra": "94 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "23035000+Skillz4Killz@users.noreply.github.com",
            "name": "Skillz4Killz",
            "username": "Skillz4Killz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dea9d1d1521fe45633ba3734a407f1314395e6a2",
          "message": "fix(transformers): message transformer using different style (#2916)\n\n* fix(transformers): message transformer using different style\r\n\r\n* fix: more bench tests\r\n\r\n* fix(bench): token can not be empty\r\n\r\n* more desired props\r\n\r\n* fix: bug on message.id props\r\n\r\n* fix: transfomrer errors on bench\r\n\r\n---------\r\n\r\nCo-authored-by: Jonathan Ho <heiheiho000@gmail.com>",
          "timestamp": "2023-04-01T21:26:46-05:00",
          "tree_id": "e12f30a67872beebb28337257e82dd80b635ae51",
          "url": "https://github.com/discordeno/discordeno/commit/dea9d1d1521fe45633ba3734a407f1314395e6a2"
        },
        "date": 1680402502059,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "[transformer] message cache check RSS",
            "value": 121.03,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] message cache check Heap Used",
            "value": 118.25,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] message cache check Heap Total",
            "value": 106.36,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check RSS",
            "value": 77.82,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check Heap Used",
            "value": 102.87,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check Heap Total",
            "value": 80.67,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] RSS",
            "value": 0.61,
            "range": "±2.84%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 10.64,
            "range": "±1.44%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 0,
            "range": "±0%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "rest.simplifyUrl",
            "value": 234190,
            "range": "±0.23%",
            "unit": "ops/sec",
            "extra": "95 samples"
          },
          {
            "name": "Camelize 1 event",
            "value": 7614,
            "range": "±0.55%",
            "unit": "ops/sec",
            "extra": "94 samples"
          },
          {
            "name": "Snakelize 1 event",
            "value": 7590,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "96 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "to@itoh.at",
            "name": "ITOH",
            "username": "itohatweb"
          },
          "committer": {
            "email": "to@itoh.at",
            "name": "ITOH",
            "username": "itohatweb"
          },
          "distinct": true,
          "id": "bb5e15d808db2f1293191c40016869793b55c6ae",
          "message": "trigger tests",
          "timestamp": "2023-04-02T15:30:26+02:00",
          "tree_id": "e12f30a67872beebb28337257e82dd80b635ae51",
          "url": "https://github.com/discordeno/discordeno/commit/bb5e15d808db2f1293191c40016869793b55c6ae"
        },
        "date": 1680442297947,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "[transformer] message cache check RSS",
            "value": 118.77,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] message cache check Heap Used",
            "value": 119.31,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] message cache check Heap Total",
            "value": 106.09,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check RSS",
            "value": 86.26,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check Heap Used",
            "value": 101.83,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check Heap Total",
            "value": 79.36,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] RSS",
            "value": 0.58,
            "range": "±3%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 10.72,
            "range": "±1.45%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 0,
            "range": "±0%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "rest.simplifyUrl",
            "value": 222790,
            "range": "±0.23%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "Camelize 1 event",
            "value": 6553,
            "range": "±0.22%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "Snakelize 1 event",
            "value": 6535,
            "range": "±0.27%",
            "unit": "ops/sec",
            "extra": "97 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "to@itoh.at",
            "name": "ITOH",
            "username": "itohatweb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "56946047c1dd56ae604da34c6363c7d024e5f36e",
          "message": "fix(README): dd logo path (#2941)",
          "timestamp": "2023-04-02T15:38:08+02:00",
          "tree_id": "73714d979885cc2f28848a751fa25a6487586698",
          "url": "https://github.com/discordeno/discordeno/commit/56946047c1dd56ae604da34c6363c7d024e5f36e"
        },
        "date": 1680442764287,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "[transformer] message cache check RSS",
            "value": 119.07,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] message cache check Heap Used",
            "value": 116.95,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] message cache check Heap Total",
            "value": 107.67,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check RSS",
            "value": 74.26,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check Heap Used",
            "value": 101.63,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check Heap Total",
            "value": 74.64,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] RSS",
            "value": 0.61,
            "range": "±2.84%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 10.65,
            "range": "±1.44%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 0,
            "range": "±0%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "rest.simplifyUrl",
            "value": 229452,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "96 samples"
          },
          {
            "name": "Camelize 1 event",
            "value": 6661,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "97 samples"
          },
          {
            "name": "Snakelize 1 event",
            "value": 6590,
            "range": "±0.11%",
            "unit": "ops/sec",
            "extra": "95 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "to@itoh.at",
            "name": "ITOH",
            "username": "itohatweb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7b0964d24a735f76ef289964612fb77c5f4755c3",
          "message": "fix(README): dd logo path (#2943)",
          "timestamp": "2023-04-02T15:20:26Z",
          "tree_id": "73714d979885cc2f28848a751fa25a6487586698",
          "url": "https://github.com/discordeno/discordeno/commit/7b0964d24a735f76ef289964612fb77c5f4755c3"
        },
        "date": 1680448907461,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "[transformer] message cache check RSS",
            "value": 120.48,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] message cache check Heap Used",
            "value": 118.39,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] message cache check Heap Total",
            "value": 106.36,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check Heap Used",
            "value": 103.03,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check Heap Total",
            "value": 74.9,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] RSS",
            "value": 0.67,
            "range": "±3.01%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 10.68,
            "range": "±1.44%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 0,
            "range": "±0%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "rest.simplifyUrl",
            "value": 226323,
            "range": "±0.18%",
            "unit": "ops/sec",
            "extra": "95 samples"
          },
          {
            "name": "Camelize 1 event",
            "value": 6616,
            "range": "±0.25%",
            "unit": "ops/sec",
            "extra": "94 samples"
          },
          {
            "name": "Snakelize 1 event",
            "value": 6565,
            "range": "±0.24%",
            "unit": "ops/sec",
            "extra": "93 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "to@itoh.at",
            "name": "ITOH",
            "username": "itohatweb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "92e25959efb72126bee298be444c5dff2564a25d",
          "message": "build: update turbo (#2942)",
          "timestamp": "2023-04-02T15:29:15Z",
          "tree_id": "5919f29fd9cb74bafbc8584b7616e4e68f8668c3",
          "url": "https://github.com/discordeno/discordeno/commit/92e25959efb72126bee298be444c5dff2564a25d"
        },
        "date": 1680449482381,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "[transformer] message cache check RSS",
            "value": 122.73,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] message cache check Heap Used",
            "value": 117.2,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] message cache check Heap Total",
            "value": 106.88,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check RSS",
            "value": 2.1,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check Heap Used",
            "value": 101.64,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check Heap Total",
            "value": 83.03,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] RSS",
            "value": 0.58,
            "range": "±3%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 10.64,
            "range": "±1.44%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 0,
            "range": "±0%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "rest.simplifyUrl",
            "value": 222323,
            "range": "±0.30%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "Camelize 1 event",
            "value": 6260,
            "range": "±0.35%",
            "unit": "ops/sec",
            "extra": "94 samples"
          },
          {
            "name": "Snakelize 1 event",
            "value": 6276,
            "range": "±0.24%",
            "unit": "ops/sec",
            "extra": "96 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "to@itoh.at",
            "name": "ITOH",
            "username": "itohatweb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "17a52fec1bb37fa2f9105ee4c495368cc6d1a568",
          "message": "fix(rest, types)!: support auditlog reason (#2940)\n\n* fix(rest, types)!: support auditlog reason\nImproved the consistency by separating the audit log reason to an optional function parameter.\nAlso added support for 100% documented reason endpoints.\n\n* missing stuff\n\n* fix this\n\n* fix e3e",
          "timestamp": "2023-04-02T15:38:06Z",
          "tree_id": "bb6b5beb14449ce6c3458d1cf3527c5f4be27a81",
          "url": "https://github.com/discordeno/discordeno/commit/17a52fec1bb37fa2f9105ee4c495368cc6d1a568"
        },
        "date": 1680449967028,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "[transformer] message cache check RSS",
            "value": 118.24,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] message cache check Heap Used",
            "value": 118.09,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] message cache check Heap Total",
            "value": 106.88,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check RSS",
            "value": 73.77,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check Heap Used",
            "value": 102.15,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check Heap Total",
            "value": 72.8,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] RSS",
            "value": 0.7,
            "range": "±2.87%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 10.72,
            "range": "±1.44%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 0,
            "range": "±0%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "rest.simplifyUrl",
            "value": 225225,
            "range": "±0.19%",
            "unit": "ops/sec",
            "extra": "96 samples"
          },
          {
            "name": "Camelize 1 event",
            "value": 6620,
            "range": "±0.19%",
            "unit": "ops/sec",
            "extra": "95 samples"
          },
          {
            "name": "Snakelize 1 event",
            "value": 6585,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "94 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "heiheiho000@gmail.com",
            "name": "Jonathan Ho",
            "username": "H01001000"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7a69c02d13f5824d6747519523d1cacd381311fa",
          "message": "feat(site): add back benchmark to site (also change cpu model) (#2939)\n\n* ci: add concurrency for deploy site\n\n* feat(site): add benchmark\n\n* refactor(bench): overwrite old result with new\n\n* Update packages/benchmark/src/generateMessage.ts\n\nCo-authored-by: ITOH <to@itoh.at>\n\n* Update scripts/generateMessage.js\n\nCo-authored-by: ITOH <to@itoh.at>\n\n* Update site.yml\n\n---------\n\nCo-authored-by: ITOH <to@itoh.at>",
          "timestamp": "2023-04-02T15:39:52Z",
          "tree_id": "1a232822eec9e71b44abbd75d262f3bb213a7a84",
          "url": "https://github.com/discordeno/discordeno/commit/7a69c02d13f5824d6747519523d1cacd381311fa"
        },
        "date": 1680450161333,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "[transformer] message cache check RSS",
            "value": 112.53,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] message cache check Heap Used",
            "value": 117.27,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] message cache check Heap Total",
            "value": 106.88,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check RSS",
            "value": 79.24,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check Heap Used",
            "value": 102.43,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check Heap Total",
            "value": 78.83,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] RSS",
            "value": 0.74,
            "range": "±2.84%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 10.76,
            "range": "±1.44%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 0,
            "range": "±0%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "rest.simplifyUrl",
            "value": 223799,
            "range": "±0.25%",
            "unit": "ops/sec",
            "extra": "95 samples"
          },
          {
            "name": "Camelize 1 event",
            "value": 6409,
            "range": "±0.40%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "Snakelize 1 event",
            "value": 6480,
            "range": "±0.42%",
            "unit": "ops/sec",
            "extra": "94 samples"
          }
        ]
      }
    ]
  }
}